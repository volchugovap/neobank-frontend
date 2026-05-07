import { useState, useEffect, useCallback } from "react";
import type { NewsApiArticle } from "../../../entities/news/types/news.types";
import { newsApi } from "../../../entities";

interface UseNewsOptions {
	count?: number;
	refreshIntervalMs?: number;
}

export const useNewsList = ({
	count = 20,
	refreshIntervalMs = 15 * 60 * 1000,
}: UseNewsOptions = {}) => {
	const [news, setNews] = useState<NewsApiArticle[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchNews = useCallback(async () => {
		setIsLoading(true);

		try {
			const response = await newsApi.getNews({ pageSize: count });
			setNews(response.articles);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, [count]);

	useEffect(() => {
		fetchNews();
		if (refreshIntervalMs > 0) {
			const interval = setInterval(fetchNews, refreshIntervalMs);
			return () => clearInterval(interval);
		}
	}, [fetchNews, refreshIntervalMs]);

	return {
		news,
		isLoading,
	};
};
