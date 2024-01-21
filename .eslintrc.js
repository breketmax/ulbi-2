module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next",
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-indent": [2,2],
        indent:[2,2],
        "no-unused-vars": "warn",
        semi: "off",
        "comma-dangle": "off",
        "react/display-name":"warn",


        "@typescript-eslint/comma-dangle": ["error",{
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never"
        }],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/member-delimiter-style":["error", { "multiline": {
                "delimiter": "semi",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "semi",
                "requireLast": false
            },
            "multilineDetection": "brackets"
        }],
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "i18next/no-literal-string": ["error"]
    }
}
