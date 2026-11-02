// Backend Development Assignment 1
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const {
  createUserProfile,
  formatUserProfile,
  validateAge,
  validateName,
  validateProgrammingLanguage,
} = require("./functions.js");

function main() {
  const rl = readline.createInterface({ input, output });
  const steps = [
    { question: "Name: ", validator: validateName, value: undefined },
    { question: "Age: ", validator: validateAge, value: undefined },
    {
      question: "Favorite Programming Language: ",
      validator: validateProgrammingLanguage,
      value: undefined,
    },
  ];
  let currentStep = 0;

  console.log("Backend Development Profile\n");
  rl.setPrompt(steps[currentStep].question);
  rl.prompt();

  rl.on("line", (answer) => {
    const step = steps[currentStep];

    if (!step.validator(answer)) {
      console.log("Please enter a valid value.");
      rl.prompt();
      return;
    }

    step.value = answer.trim();
    currentStep += 1;

    if (currentStep < steps.length) {
      rl.setPrompt(steps[currentStep].question);
      rl.prompt();
      return;
    }

    rl.close();
    const profile = createUserProfile(
      steps[0].value,
      steps[1].value,
      steps[2].value,
    );
    console.log(`\n${formatUserProfile(profile)}`);
  });
}

main();

process.on("uncaughtException", (error) => {
  console.error(`An unexpected error occurred: ${error.message}`);
  process.exitCode = 1;
});
