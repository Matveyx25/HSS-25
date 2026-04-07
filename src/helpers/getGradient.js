const gradients = [
		"linear-gradient(135deg, #667eea, #764ba2)",
		"linear-gradient(135deg, #f093fb, #f5576c)",
		"linear-gradient(135deg, #4facfe, #00f2fe)",
		"linear-gradient(135deg, #43e97b, #38f9d7)",
		"linear-gradient(135deg, #fa709a, #fee140)",
		"linear-gradient(135deg, #30cfd0, #330867)",
		"linear-gradient(135deg, #a18cd1, #fbc2eb)",
		"linear-gradient(135deg, #f6d365, #fda085)",
	];

	export const getGradient = (id) => {
		return gradients[id % gradients.length];
	};