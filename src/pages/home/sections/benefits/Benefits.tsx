import "./Benefits.scss";

const phrases = [
	"Powerfull online protection",
	"Cashback without borders",
	"Personal design",
	"Work anywhere in the world",
];

export const Benefits: React.FC = () => {
	return (
		<section className="section-benefits" aria-labelledby="benefits__title">
			<img
				src="/images/home-page/programmer.svg"
				alt="programmer"
				className="section-benefits__img"
			/>

			<div className="section-benefits__text-container">
				<h2 className="section-benefits__title" id="benefits__title">
					We Provide Many benefits You Can Use
				</h2>
				<p className="section-benefits__description">
					You can explore the benefits that we provide with fun and have their own functions each
					feature
				</p>
				<ul className="section-benefits__list-items">
					{phrases.map((el) => (
						<li key={el} className="section-benefits__item">
							<img src="/images/home-page/success.svg" alt="" role="presentation" />
							{el}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
