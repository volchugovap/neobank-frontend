export interface IGetNews {
	apiKey?: string;
	q?: string;
	page?: number;
	country?: string;
	sources?: string;
	pageSize?: number;
	category?: string;
}
