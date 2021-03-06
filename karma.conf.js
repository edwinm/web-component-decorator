module.exports = function (config) {
  config.set({
    frameworks: ["mocha", "karma-typescript"],
    files: ["test/*.ts", "src/*.ts"],
    preprocessors: {
      "**/*.ts": "karma-typescript",
      "src/*.ts": "coverage",
    },
    reporters: ["progress", "karma-typescript", "coverage"],
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ["Firefox"],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    coverageReporter: {
      reporters: [{ type: "lcov", subdir: "." }],
      dir: "coverage/",
    },
  });
};
