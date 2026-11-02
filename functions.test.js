const test = require("node:test");
const assert = require("node:assert/strict");
const {
  createUserProfile,
  formatUserProfile,
  validateAge,
  validateName,
  validateProgrammingLanguage,
} = require("./functions.js");

test("validateName accepts a meaningful name", () => {
  assert.equal(validateName("Musibau Bolaji"), true);
  assert.equal(validateName("A"), false);
  assert.equal(validateName("   "), false);
});

test("validateAge accepts a valid whole-number age", () => {
  assert.equal(validateAge("46"), true);
  assert.equal(validateAge("0"), false);
  assert.equal(validateAge("46.5"), false);
  assert.equal(validateAge("121"), false);
});

test("validateProgrammingLanguage accepts non-empty text", () => {
  assert.equal(validateProgrammingLanguage("JavaScript"), true);
  assert.equal(validateProgrammingLanguage(""), false);
});

test("createUserProfile normalizes values", () => {
  const profile = createUserProfile("  Musibau Bolaji  ", "46", " JavaScript ");

  assert.deepEqual(profile, {
    name: "Musibau Bolaji",
    age: 46,
    favoriteProgrammingLanguage: "JavaScript",
  });
});

test("formatUserProfile returns the expected output", () => {
  const profile = createUserProfile("Musibau Bolaji", "46", "JavaScript");

  assert.equal(
    formatUserProfile(profile),
    "Name: Musibau Bolaji\nAge: 46\nFavorite Programming Language: JavaScript",
  );
});
