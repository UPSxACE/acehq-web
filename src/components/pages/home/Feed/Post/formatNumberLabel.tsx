export function formatNumberLabel(num: number) {
	if (num < 1000) {
		return num.toString();
	}

	if (num < 10000) {
		// add commas for thousands
		return num.toLocaleString();
	}

	if (num < 1000000) {
		// Thousands (K)
		return `${(num / 1000).toFixed(num % 1000 >= 100 ? 1 : 0).replace(/\.0$/, "")}K`;
	}

	if (num < 1000000000) {
		// Millions (M)
		return `${(num / 1000000)
			.toFixed(num % 1000000 >= 100000 ? 1 : 0)
			.replace(/\.0$/, "")}M`;
	}

	// Billions (B)
	return `${(num / 1000000000)
		.toFixed(num % 1000000000 >= 100000000 ? 1 : 0)
		.replace(/\.0$/, "")}B`;
}
