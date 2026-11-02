function validateName(name) {
  return typeof name === "string" && name.trim().length >= 2;
}

function validateAge(age) {
  const numericAge = Number(age);
  return Number.isInteger(numericAge) && numericAge > 0 && numericAge <= 120;
}

function validateProgrammingLanguage(language) {
  return typeof language === "string" && language.trim().length >= 2;
}

function createUserProfile(name, age, favoriteProgrammingLanguage) {
  return {
    name: name.trim(),
    age: Number(age),
    favoriteProgrammingLanguage: favoriteProgrammingLanguage.trim(),
  };
}

function formatUserProfile(profile) {
  return [
    `Name: ${profile.name}`,
    `Age: ${profile.age}`,
    `Favorite Programming Language: ${profile.favoriteProgrammingLanguage}`,
  ].join("\n");
}

module.exports = {
  createUserProfile,
  formatUserProfile,
  validateAge,
  validateName,
  validateProgrammingLanguage,
};
