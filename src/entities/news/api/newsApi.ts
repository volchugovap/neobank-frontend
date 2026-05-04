import type { NewsApiResponse } from "../types/news.types";
import { baseAPI } from "../../../shared";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const newsApi = {
	async getNews(pageSize: number = 20): Promise<NewsApiResponse> {
		try {
			const response = await baseAPI<NewsApiResponse>(BASE_URL, {
				pageSize: pageSize,
				country: "us",
				apiKey: API_KEY,
			});

			if (response.status !== "ok") {
				throw new Error(response.message || "NewsAPI returned an error");
			}

			const filteredArticles = response.articles.filter(
				(a) => a.urlToImage && a.title && a.description && a.urlToImage,
			);

			return { ...response, articles: filteredArticles };
		} catch (error) {
			console.error("Failed to fetch news:", error);
			throw error;
		}
	},
};
