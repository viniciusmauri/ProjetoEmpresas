module.exports = {
    baseUrl: 'http://localhost:3000',
    version: 'v1',
    secret: '46dcb2915adaafa609da91528cba7c76',
    corsOptions: {
      origin: "*",
      methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
};