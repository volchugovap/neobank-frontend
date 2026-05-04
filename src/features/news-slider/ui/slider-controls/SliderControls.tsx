import { Button } from "../../../../shared/ui";
import { ArrowSVGR } from "../../../../shared/ui";
import "./SliderControls.scss";

interface IProps {
	onPrev: () => void;
	onNext: () => void;
	disablePrev: boolean;
	disableNext: boolean;
}

export const SliderControls: React.FC<IProps> = ({ onPrev, onNext, disablePrev, disableNext }) => {
	return (
		<div role="group" className="slider-controls" aria-label="Slider navigation">
			<Button
				onClick={onPrev}
				disabled={disablePrev}
				aria-label="Previous slide"
				className="slider-controls__btn"
			>
				<ArrowSVGR
					width={24}
					height={24}
					aria-hidden="true"
					focusable="false"
					className={`${disablePrev ? " slider-controls__icon--disabled" : "slider-controls__icon"} slider-controls__icon--prev`}
				/>
			</Button>
			<Button
				onClick={onNext}
				disabled={disableNext}
				aria-label="Next slide"
				className="slider-controls__btn"
			>
				<ArrowSVGR
					width={24}
					height={24}
					aria-hidden="true"
					focusable="false"
					className={`${disableNext ? " slider-controls__icon--disabled" : "slider-controls__icon"} slider-controls__icon--next`}
				/>
			</Button>
		</div>
	);
};
