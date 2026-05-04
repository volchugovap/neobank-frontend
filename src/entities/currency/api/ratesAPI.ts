import { baseAPI } from "../../../shared";
import type { ExchangeRatesResponse } from "../../../shared";

const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6";

export const currencyApi = {
	async getRates(baseCurrency: string = "USD"): Promise<ExchangeRatesResponse> {
		try {
			const response = await baseAPI<ExchangeRatesResponse>(
				`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`,
			);

			if (response.result !== "success") {
				throw new Error("API error");
			}

			return response;
		} catch (error) {
			console.error("Failed to fetch currency rates:", error);
			throw error;
		}
	},
};
