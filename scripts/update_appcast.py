#!/usr/bin/env python3

import json
import argparse
import sys


def update_appcast(version, sha256, url, desc=None):
    """Update appcast.json with new version info"""

    # Read existing appcast
    try:
        with open("appcast.json", "r") as f:
            appcast = json.load(f)
    except FileNotFoundError:
        print("Error: appcast.json not found")
        sys.exit(1)
    except json.JSONDecodeError:
        print("Error: Invalid JSON in appcast.json")
        sys.exit(1)

    # Create new version entry
    new_version = {
        "version": version.lstrip("v"),
        "desc": desc or f"Release {version}",
        "sha256": sha256,
        "url": url,
        "minBobVersion": "1.8.0",
    }

    # Insert at the beginning of versions array
    appcast["versions"].insert(0, new_version)

    # Write updated appcast
    try:
        with open("appcast.json", "w") as f:
            json.dump(appcast, f, indent=2, ensure_ascii=False)
        print(f"Successfully updated appcast.json with version {version}")
    except Exception as e:
        print(f"Error writing appcast.json: {e}")
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(description="Update appcast.json with new version")
    parser.add_argument("--version", required=True, help="Version tag (e.g., v1.0.0)")
    parser.add_argument(
        "--sha256", required=True, help="SHA256 checksum of the plugin file"
    )
    parser.add_argument("--url", required=True, help="Download URL for the plugin")
    parser.add_argument("--desc", help="Release description")

    args = parser.parse_args()

    update_appcast(args.version, args.sha256, args.url, args.desc)


if __name__ == "__main__":
    main()
