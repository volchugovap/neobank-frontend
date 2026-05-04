import { useState, useEffect, useCallback } from "react";
import type { NewsApiArticle } from "../../../entities/news/types/news.types";
import { newsApi } from "../../../entities";

export const useNewsList = (count: number = 20) => {
	const [news, setNews] = useState<NewsApiArticle[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchNews = useCallback(async () => {
		setIsLoading(true);

		try {
			const response = await newsApi.getNews(count);
			setNews(response.articles);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, [count]);

	useEffect(() => {
		fetchNews();
	}, [fetchNews]);

	return {
		news,
		isLoading,
		refetchNews: fetchNews,
	};
};
