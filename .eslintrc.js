module.exports = {
	'root': true, // 标识当前配置文件为eslint的根配置文件，让其停止在父级目录中继续寻找。
	'parserOptions': { // 解析器选项
	    'parser': 'babel-eslint', // 对Babel解析器的包装使其与 ESLint 兼容
	    'sourceType': 'module'// 代码是 ECMAScript 模块
	  },
	'env': { // 环境变量
		'browser': true,
		// 'es2021': true,
		'node': true,
		'es6': true,
	},
	globals: { // 配置js全局变量，因为是uni-app，全局的uni是不需要引入的，还有5+的plus对象
		uni: 'readonly',
	    plus: 'readonly',
	    wx: 'readonly',
		getApp: 'readonly',
	},
	'extends': ['plugin:vue/recommended', 'eslint:recommended'], // 规则继承
	'plugins': [
		'vue',
		//'nvue',
	],
	'overrides': [
		{
			"files": ["*.nvue"],
			//"processor": "vue/recommended"
			"parser": "vue"
		}
	],
	/**
	* 自定义规则
	* http://eslint.cn/docs/rules/
	* []基本使用方式
	* "off" 或者0 关闭规则
	* "warn" 或者1 将规则打开为警告（不影响退出代码）
	* "error" 或者2 将规则打开为错误（触发时退出代码为1）
	* 如：'no-restricted-syntax': 0, // 表示关闭该规则
	* []如果某项规则，有额外的选项，可以通过数组进行传递，而数组的第一位必须是错误级别。如0,1,2
	* 如 'semi': ['error', 'never'], never就是额外的配置项
	*/
	rules: {
		// https://ask.dcloud.net.cn/article/37070 HB自动修复不生效
		// lss 2021/3/18添加
		'vue/attribute-hyphenation': 2, // 遇到大写字母，强制用-符号链接！
		'vue/html-indent': ['error', 'tab'], // 强制一致的缩进 <template>
		'vue/comment-directive': 'off',
		'vue/no-v-html': 0,
		
		'block-spacing': [2, 'always'], // 强制在单行代码块中使用一致的空格
		'brace-style': [0, '1tbs', { // 强制在代码块中使用一致的大括号风格 
		  'allowSingleLine': true
		}],
		'camelcase': [0, { // 强制使用骆驼拼写法命名约定 
		  'properties': 'always'
		}],
		'new-cap': [2, { // 要求构造函数首字母大写 
		  'newIsCap': true,
		  'capIsNew': false
		}],
		'comma-spacing': [2, { // 强制在逗号前后使用一致的空格 
		  'before': false,
		  'after': true
		}],
		'comma-style': [2, 'last'], // 强制使用一致的逗号风格 
		'curly': [2, 'multi-line'], // 强制所有控制语句使用一致的括号风格 
		'eol-last': 0, // 是否强制文件末尾至少保留一行空行 
		'generator-star-spacing': [2, {
		  'before': true,
		  'after': true
		}],
		'handle-callback-err': [2, '^(err|error)$'], // 要求回调函数中有容错处理 
		'indent': ['error', 'tab', { // 强制使用一致的缩进 
		  // 'SwitchCase': 1
		}],
		'jsx-quotes': [0, 'prefer-single'], // 强制在 JSX 属性中一致地使用双引号或单引号 
		'key-spacing': [2, { // 强制在对象字面量的属性中键和值之间使用一致的间距 
		  'beforeColon': false,
		  'afterColon': true
		}],
		'keyword-spacing': [2, { // 强制在关键字前后使用一致的空格 
		  'before': true,
		  'after': true
		}],
		'dot-location': [2, 'property'], // 强制在点号之前和之后一致的换行
		'eqeqeq': ['error', 'always', { 'null': 'ignore' }], // 强制使用全等
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁用 debugger 
		'new-parens': 2, // 要求调用无参构造函数时有圆括号 
		'no-array-constructor': 2, // 禁止使用 Array 构造函数 
		'no-console': 'off', // 禁用no-console规则
		'no-cond-assign': 2, // 禁止条件表达式中出现模棱两可的赋值操作符 
		'no-dupe-args': 2, // 禁止 function 定义中出现重名参数 
		'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key 
		'no-duplicate-case': 2, // 禁止出现重复的 case 标签 
		'no-eval': 2, // 禁用 eval() 
		'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值 
		'no-extra-bind': 2, // 禁止不必要的 .bind() 调用 
		'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换 
		'no-extra-parens': [2, 'functions'], // 禁止不必要的括号 
		'no-func-assign': 2, // 禁止对 function 声明重新赋值 
		'no-inner-declarations': [2, 'functions'], // 禁止在嵌套的块中出现变量声明或 function 声明 
		'no-irregular-whitespace': 2, // 禁止在字符串和注释之外不规则的空白 
		'no-obj-calls': 2, // 禁止把全局对象作为函数调用 
		'no-sparse-arrays': 2, // 禁用稀疏数组 
		'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式 
		'no-unreachable': 2, // 禁止在return、throw、continue 和 break语句之后出现不可达代码 
		'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
		'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较 
		'no-lone-blocks': 2, // 禁用不必要的嵌套块 
		'no-mixed-spaces-and-tabs': 0, // 不允许空格和 tab 混合缩进 
		'no-multi-spaces': 2, // 禁止使用多个空格
		'no-multi-str': 2, // 禁止使用多行字符串 
		'no-multiple-empty-lines': [2, { // 不允许多个空行 
		  'max': 1
		}],
		'no-new-require': 2, // 禁止调用 require 时使用 new 操作符 
		'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符 
		'no-path-concat': 2, // 禁止对 dirname 和 filename进行字符串连接 
		'no-redeclare': 2, // 禁止使用 var 多次声明同一变量 
		'no-return-assign': [0, 'except-parens'], // 禁止在 return 语句中使用赋值语句 
		// 'no-self-assign': 2, // 禁止自我赋值 
		'no-self-compare': 2, // 禁止自身比较 
		'no-sequences': 2, // 禁用逗号操作符 
		'no-spaced-func': 2, // 禁止 function 标识符和括号之间出现空格 
		// 'no-trailing-spaces': 2, // 禁用行尾空格 
		'no-undef': 0, // 禁用未声明的变量，除非它们在 /global / 注释中被提到 
		'no-undef-init': 2, // 禁止将变量初始化为 undefined 
		'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件 
		'no-unused-vars': [0, { // 禁止出现未使用过的变量 
		  'vars': 'all',
		  'args': 'none'
		}],
		'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply() 
		'no-whitespace-before-property': 2, // 禁止属性前有空白 
		'one-var': [2, { // 强制函数中的变量要么一起声明要么分开声明 
		  'initialized': 'never'
		}],
		'operator-linebreak': [2, 'after', { // 强制操作符使用一致的换行符 
		  'overrides': {
		    '?': 'before',
		    ':': 'before'
		  }
		}],
		'quotes': [2, 'single', { // 强制使用一致的反勾号、双引号或单引号 
		  // 'avoidEscape': true,
		  // 'allowTemplateLiterals': true
		}],
		'semi': [0, 'never'], // 要求或禁止使用分号而不是 ASI 
		'semi-spacing': [2, { // 强制分号之前和之后使用一致的空格 
		  'before': false,
		  'after': true
		}],
		'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
		'space-infix-ops': 2, // 要求操作符周围有空格 
		'space-unary-ops': [2, { // 强制在一元操作符前后使用一致的空格 
		  'words': true,
		  'nonwords': false
		}],
		'spaced-comment': [2, 'always', { // 强制在注释中 // 或 /* 使用一致的空格
		  'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
		}],
		'no-class-assign': 2,
		'no-const-assign': 2,
		'no-control-regex': 0,
		'no-delete-var': 2,
		'no-dupe-class-members': 2,
		'no-empty-character-class': 2,
		'no-empty-pattern': 2,
		'no-extend-native': 2,
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-implied-eval': 2,
		'no-invalid-regexp': 2,
		'no-caller': 2,
		'no-iterator': 2,
		'no-label-var': 2,
		'no-labels': [2, {
		  'allowLoop': false,
		  'allowSwitch': false
		}],
		'no-native-reassign': 2,
		'no-negated-in-lhs': 2,
		'no-new-object': 2,
		'no-new-symbol': 2,
		'no-octal': 2,
		'no-octal-escape': 2,
		'no-proto': 2,
		'no-regex-spaces': 2,
		'no-shadow-restricted-names': 2,
		'no-this-before-super': 2,
		'no-throw-literal': 2,
		'no-unneeded-ternary': [2, {
		  'defaultAssignment': false
		}],
		'no-unsafe-finally': 2,
		'no-useless-computed-key': 2,
		'no-useless-constructor': 2,
		'no-useless-escape': 0,
		'no-with': 2,
		'padded-blocks': [2, 'never'],
		'space-before-blocks': [0, 'always'],
		'space-before-function-paren': [0, 'never'],
		'template-curly-spacing': [2, 'never'],
		'wrap-iife': [2, 'any'],
		'yield-star-spacing': [2, 'both'],
		'yoda': [2, 'never'],
		'prefer-const': 0,
		'object-curly-spacing': [2, 'always', {
		  objectsInObjects: false
		}],
		'array-bracket-spacing': [2, 'never']
	}

};
