module.exports = {
	parserOptions: {
		// (3|5|7|8|9) 使用的ECMAScript版本
		ecmaVersion: 6,
		// ("script"|"module") 模块
		sourceType: "module", 
		// 额外的语言特性
		ecmaFeatures: {
			// 启用jsx
			"jsx": true,
			// 允许在全局作用域使用return语句
			"globalReturn": false,
			// 启用全局strict mode
			impliedStrict: false
		},
		// 定义一组预定义全局变量
		env: {
			browser: true,
			node: false,
			amd: false,
			mocha: false
		},
		// 定义全局变量
		globals: {
			// Boolean true表示可以被重写
			var1: true
		},
		// 第三方插件
		plugins: [],
		// 配置规则
		rules: {
			// off 关闭规则
			// warn 警告级别错误 => 不会程序退出
			// error 错误级别规则 => 程序会退出
			eqeqeq: "off"
		}
	}
}