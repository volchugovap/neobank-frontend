import { baseAPI } from "../../../shared";
import type { NewsApiResponse, IGetNews } from "../types";
import { filterByImageUrl, filterByMarkup } from "../lib";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const newsApi = {
	async getNews({
		pageSize = 20,
		country = "us",
		apiKey = API_KEY,
	}: IGetNews): Promise<NewsApiResponse> {
		try {
			const response = await baseAPI<NewsApiResponse>(BASE_URL, {
				pageSize,
				country,
				apiKey,
			});

			if (response.status !== "ok") {
				throw new Error(response.message || "NewsAPI returned an error");
			}

			const filteredArticles = response.articles.filter(
				(a) =>
					filterByMarkup(a.title) &&
					filterByMarkup(a.description) &&
					filterByImageUrl(a.urlToImage),
			);

			return { ...response, articles: filteredArticles };
		} catch (error) {
			console.error("Failed to fetch news:", error);
			throw error;
		}
	},
};
