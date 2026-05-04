export interface NewsApiArticle {
	title: string;
	description: string;
	url: string;
	urlToImage: string;
}

export interface NewsApiResponse {
	status: string;
	message?: string;
	articles: NewsApiArticle[];
}
