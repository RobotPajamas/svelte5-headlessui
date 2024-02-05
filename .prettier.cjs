module.exports = {
  bracketSameLine: true,
  organizeImportsSkipDestructiveCodeActions: true,
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
  plugins: [
    "prettier-plugin-svelte",
    //   "prettier-plugin-organize-imports",
    //   "prettier-plugin-tailwindcss",
  ],
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "es5",
};
