module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 80,
  importOrder: [
    "^(react|next|redux|msw).*",
    "^((?!(/|^@config$)).)*$", // target: 외부 라이브러리 (문자열에 "/"" 가 포함되지 않을때, 예외처리: @config 도 포함되지 않을때)
    "^@(apis|features|contexts).*",
    "^@(components|icons).*",
    "^@(styles)",
    "^@.*",
    "^[.].*/.*", //  target: 상대 경로 ( "." 로 시작하고 "/"" 가 포함되어 있을 때)
    ".*",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
}
