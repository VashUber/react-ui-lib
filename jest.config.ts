import type { Config } from "jest";

export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
} as Config;
