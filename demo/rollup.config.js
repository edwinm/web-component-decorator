import typescript from "rollup-plugin-typescript2";

export default {
  input: "demo/script.ts",
  output: [
    {
      file: "demo/build/script.js",
      format: "iife",
      name: "bundle",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      clean: true,
    }),
  ],
};
