import { useRef, useState } from "react";
import { useNewsList } from "../../hooks/useNewsList";
import { NewsCard } from "../../../../entities";
import { SliderControls } from "../slider-controls/SliderControls";
import { SliderLoader } from "../../../../shared";
import "./NewsSlider.scss";

const STEP = 500;

export const NewsSlider: React.FC = () => {
	const { news, isLoading } = useNewsList();

	const trackRef = useRef<HTMLUListElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const [offset, setOffset] = useState(0);

	const maxOffset = (trackRef.current?.scrollWidth || 0) - (containerRef.current?.clientWidth || 0);

	const handleNext = () => {
		setOffset((prev) => Math.min(prev + STEP, maxOffset));
	};

	const handlePrev = () => {
		setOffset((prev) => Math.max(prev - STEP, 0));
	};

	return (
		<div className="slider" ref={containerRef} aria-label="news slider" role="region">
			{isLoading && <SliderLoader className="slider__loader" />}

			{!isLoading && (
				<ul
					className="slider__track"
					ref={trackRef}
					role="list"
					style={{
						transform: `translateX(-${offset}px)`,
					}}
				>
					{news.map((item) => (
						<li key={item.title} className="slider__item" role="listitem">
							<NewsCard article={item} key={item.title} />
						</li>
					))}
				</ul>
			)}

			<SliderControls
				onPrev={handlePrev}
				onNext={handleNext}
				disablePrev={offset === 0}
				disableNext={offset >= maxOffset}
			/>
		</div>
	);
};
