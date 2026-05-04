import { useCallback, useEffect, useState } from "react";
import { currencyApi } from "../../../entities";
import { type ExchangeRatesResponse } from "../../../shared";

type UseCurrencyRatesOptions = {
	baseCurrency?: string;
	targetCurrencies?: string[];
	refreshIntervalMs?: number;
};

export const useCurrencyRates = ({
	baseCurrency,
	targetCurrencies,
	refreshIntervalMs = 900000,
}: UseCurrencyRatesOptions = {}) => {
	const [data, setData] = useState<ExchangeRatesResponse | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchRates = useCallback(async () => {
		setIsLoading(true);
		try {
			const result = await currencyApi.getRates(baseCurrency);
			setData(result);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, [baseCurrency]);

	useEffect(() => {
		fetchRates();
		if (refreshIntervalMs > 0) {
			const interval = setInterval(fetchRates, refreshIntervalMs);
			return () => clearInterval(interval);
		}
	}, [baseCurrency, refreshIntervalMs, fetchRates]);

	const filteredRates =
		targetCurrencies && data?.conversion_rates
			? Object.fromEntries(
					targetCurrencies
						.filter((curr) => curr in data.conversion_rates)
						.map((curr) => [curr, data.conversion_rates[curr]]),
				)
			: data?.conversion_rates;

	return {
		rates: filteredRates,
		isLoading,
	};
};
