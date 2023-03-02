/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const createCLIProgram = require('./cli');

const main = async () => {
  const program = createCLIProgram();
  program.parseAsync(process.argv);
};

main();
