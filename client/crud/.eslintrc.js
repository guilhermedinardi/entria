module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		'prettier',
		'prettier/react'
	],
	parser: 'babel-eslint',
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'warn',
			{extensions: ['.js', '.jsx']}
		],
		'import/prefer-default-export': 'off',
		'jsx-quotes': ['error', 'prefer-single']
		}
	}
};
