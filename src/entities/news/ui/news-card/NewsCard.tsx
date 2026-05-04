import { Link } from "react-router";
import type { NewsApiArticle } from "../../types/news.types";
import "./NewsCard.scss";

interface IProps {
	article: NewsApiArticle;
}

export const NewsCard: React.FC<IProps> = ({ article }) => {
	return (
		<Link
			className="news-card"
			to={article.url}
			target="_blank"
			rel="noopener noreferrer"
			aria-labelledby="news-card__title"
		>
			<img className="news-card__img" src={article.urlToImage} alt={article.title} />
			<h3 className="news-card__title" id="news-card__title">
				{article.title}
			</h3>
			<p className="news-card__description">{article.description}</p>
		</Link>
	);
};
