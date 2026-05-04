import { NewsSlider } from "../../../../features";
import "./News.scss";

export const News: React.FC = () => {
	return (
		<section className="section-news" aria-labelledby="news__title">
			<h2 className="section-news__title" id="news__title">
				Current news from the world of finance
			</h2>
			<p className="section-news__description">
				We update the news feed every 15 minutes. You can learn more by clicking on the news you are
				interested in.
			</p>

			<NewsSlider />
		</section>
	);
};
