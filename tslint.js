module.exports = {
  "extends": [
    "tslint-config-standard"
  ],
  "jsRules": {},
  "rules": {
    "await-promise": [true, "Bluebird"],
    "max-line-length": {
      "options": [96]
    },
    "indent": ["error", 2, {"FunctionDeclaration": {"parameters": "first"}}],
    "ter-indent": ["error", 2, {"FunctionDeclaration": {"parameters": "first"}}]
  }
}
