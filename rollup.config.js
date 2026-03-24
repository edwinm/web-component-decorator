import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.min.js",
      format: "es",
      name: "bundle",
      sourcemap: true,
    },
  ],
  plugins: [typescript({ declarationDir: "dist", rootDir: "src" }), terser()],
};
