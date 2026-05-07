export function filterByImageUrl(url: string): Promise<boolean> {
	if (!url) return Promise.resolve(false);

	return new Promise((resolve) => {
		const img = new Image();
		const timeoutId = setTimeout(() => {
			resolve(false);
		}, 5000);

		img.onload = () => {
			clearTimeout(timeoutId);
			resolve(true);
		};

		img.onerror = () => {
			clearTimeout(timeoutId);
			resolve(false);
		};

		img.src = url;
	});
}
