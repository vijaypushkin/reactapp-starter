export default {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  endOfLine: 'lf',

  // Import sorting
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@/(?!assets)(.*)$',
    '^[./]',
    '^@/assets/(.*)$',
    '^(.*).(css|scss)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
