// ./jest.config.js

export default {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        "^(\\.\\.?\\/.+)\\.js$": "$1",
    },
};
