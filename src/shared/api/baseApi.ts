export const baseAPI = async <T>(url: string, params?: Record<string, unknown>): Promise<T> => {
	const query = params
		? "?" +
			new URLSearchParams(
				Object.entries(params).reduce(
					(acc, [key, value]) => {
						if (value !== undefined && value !== null) {
							acc[key] = String(value);
						}
						return acc;
					},
					{} as Record<string, string>,
				),
			).toString()
		: "";

	const res = await fetch(url + query);

	if (!res.ok) {
		throw new Error("API error");
	}

	return res.json();
};
