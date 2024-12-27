import { FC, useEffect, useState } from 'react';

interface Props {
	sliderItems: number[];
}

export const Slider: FC<Props> = ({ sliderItems }) => {
	const [sliderOffset, setSliderOffset] = useState(0);
	const [maxOffset, setMaxOffset] = useState(0);
	const [sliderPointerIndex, setSliderPointerIndex] = useState(0);

	useEffect(() => {
		setMaxOffset(-(sliderItems.length - 1) * 850);

		if (sliderOffset > 0) {
			setSliderOffset(20);
			setTimeout(() => setSliderOffset(0), 200);
		} else if (sliderOffset < maxOffset) {
			setSliderOffset(maxOffset - 20);
			setTimeout(() => setSliderOffset(maxOffset), 200);
		}

		setSliderPointerIndex(sliderOffset === 0 ? 0 : -sliderOffset / 850);
	}, [maxOffset, sliderOffset]);

	function increaseOffset(): void {
		setSliderOffset((prevValue) => prevValue + 850);
	}

	function decreaseOffset(): void {
		setSliderOffset((prevValue) => prevValue - 850);
	}

	return (
		<>
			<div className="about__slider">
				<div
					className="slider-arrow slider__arrow-right"
					onClick={() => {
						increaseOffset();
					}}
				></div>
				<div className="slider-line">
					<div
						className="slider-items"
						style={{
							marginLeft: sliderOffset,
							width: sliderItems.length * 850
						}}
						onMouseDown={(e) => {
							console.log(e.clientX);
						}}
					>
						{sliderItems.map((sliderItem, i) => {
							return (
								<div key={i} className="slider-item">
									<p>{sliderItem}</p>
								</div>
							);
						})}
					</div>
					<div className="slider-points">
						{sliderItems.map((sliderItem, i) => {
							return (
								<div
									key={sliderItem}
									onClick={() => {
										setSliderPointerIndex(i);
										setSliderOffset(i * -850);
									}}
									className={`slider-point ${
										sliderPointerIndex === i ? 'slider-point__active' : null
									}`}
								></div>
							);
						})}
					</div>
				</div>
				<div
					className="slider-arrow slider__arrow-left"
					onClick={() => {
						decreaseOffset();
					}}
				></div>
			</div>
		</>
	);
};
