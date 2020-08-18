import typescript from "rollup-plugin-typescript2";

export default {
  input: "demo/my-button.ts",
  output: [
    {
      file: "demo/build/bundle.js",
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
