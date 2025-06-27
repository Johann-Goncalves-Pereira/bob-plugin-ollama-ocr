import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";

export default defineConfig({
  input: "src/main.ts",
  output: {
    file: "dist/main.js",
    format: "cjs",
    exports: "named",
  },
  plugins: [
    del({ targets: "dist/*" }),
    nodeResolve(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: false,
      declarationMap: false,
    }),
    terser({
      format: {
        comments: false,
      },
    }),
    copy({
      targets: [{ src: "public/*", dest: "dist" }],
    }),
  ],
  external: [],
});
