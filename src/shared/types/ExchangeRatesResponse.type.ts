export interface ExchangeRatesResponse {
	result: string;
	conversion_rates: Record<string, number>;
	base_code: string;
}
