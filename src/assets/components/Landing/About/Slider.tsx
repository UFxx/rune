import styled from 'styled-components';
import { bgColor, textColor } from '../../../variables';

import { FC, useEffect, useState } from 'react';

interface Props {
	sliderItems: number[];
}

export const Slider: FC<Props> = ({ sliderItems }) => {
	const slideWidth: number = 850;

	const [sliderOffset, setSliderOffset] = useState(0);
	const [maxOffset, setMaxOffset] = useState(0);
	const [sliderPointerIndex, setSliderPointerIndex] = useState(0);

	// Mobile slider state
	const [touchStart, setTouchStart] = useState(0);
	let swipeDistance: number;

	useEffect(() => {
		setMaxOffset((sliderItems.length - 1) * -slideWidth);

		if (sliderOffset > 0) {
			setSliderOffset(20);
			setTimeout(() => setSliderOffset(0), 200);
		} else if (sliderOffset < maxOffset) {
			setSliderOffset(maxOffset - 20);
			setTimeout(() => setSliderOffset(maxOffset), 200);
		}

		setSliderPointerIndex(
			Math.round(sliderOffset === 0 ? 0 : -sliderOffset / slideWidth)
		);
	}, [maxOffset, sliderOffset, sliderItems.length]);

	function increaseOffset(): void {
		setSliderOffset((prevValue) => prevValue + slideWidth);
	}

	function decreaseOffset(): void {
		setSliderOffset((prevValue) => prevValue - slideWidth);
	}

	function handleTouchStart(e: React.TouchEvent): void {
		setTouchStart(e.touches[0].screenX);
	}

	function handleTouchMove(e: React.TouchEvent): void {
		swipeDistance = touchStart - e.touches[0].screenX;
	}

	function handleTouchEnd(): void {
		if (swipeDistance > 0) {
			setSliderOffset((prevValue) => prevValue + -slideWidth);
		} else if (swipeDistance < 0) {
			setSliderOffset((prevValue) => prevValue + slideWidth);
		}
	}

	return (
		<>
			<SliderContainer>
				<SliderArrowRight onClick={increaseOffset}></SliderArrowRight>
				<SliderLine
					onTouchStart={(e) => handleTouchStart(e)}
					onTouchMove={(e) => handleTouchMove(e)}
					onTouchEnd={handleTouchEnd}
				>
					<SliderItems
						marginLeft={sliderOffset}
						width={sliderItems.length * slideWidth}
					>
						{sliderItems.map((sliderItem, i) => {
							return (
								<SliderItem key={i}>
									<p>{sliderItem}</p>
								</SliderItem>
							);
						})}
					</SliderItems>
					<SliderPoints>
						{sliderItems.map((sliderItem, i) => {
							return (
								<SliderPoint
									key={i}
									onClick={() => {
										setSliderPointerIndex(i);
										setSliderOffset(i * -slideWidth);
									}}
									isActive={sliderPointerIndex === i}
								></SliderPoint>
							);
						})}
					</SliderPoints>
				</SliderLine>
				<SliderArrowLeft onClick={decreaseOffset}></SliderArrowLeft>
			</SliderContainer>
		</>
	);
};

const SliderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SliderLine = styled.div`
	position: relative;
	width: 850px;
	height: 400px;
	border: 2px solid ${textColor.textHover};
	background-color: ${bgColor.bg2};
	overflow-x: hidden;
`;

const SliderItems = styled.div<{ marginLeft: number; width: number }>`
	display: flex;
	user-select: none;
	margin-left: ${(props) => props.marginLeft}px;
	width: ${(props) => props.width}px;
	transition: 0.3s ease margin-left;
`;

const SliderItem = styled.div`
	width: 850px;
	height: 396px;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
`;

const SliderPoints = styled.div`
	position: absolute;
	left: 50%;
	top: 90%;
	display: flex;
	column-gap: 10px;
	transform: translateX(-50%);
`;

const SliderPoint = styled.div<{ isActive: boolean }>`
	width: 10px;
	height: 10px;
	background-color: ${bgColor.bg3};
	border-radius: 100%;
	cursor: pointer;
	box-shadow: ${(props) =>
		props.isActive ? `0 0 0 2px ${textColor.textHover}` : null};
	transition: 0.3s ease box-shadow;
`;

const SliderArrow = styled.div`
	width: 0;
	height: 0;
	border-left: 40px solid transparent;
	border-right: 40px solid transparent;
	border-bottom: 40px solid ${textColor.textHover};
	user-select: none;
	cursor: pointer;
`;

const SliderArrowLeft = styled(SliderArrow)`
	transform: rotate(90deg);
`;

const SliderArrowRight = styled(SliderArrow)`
	transform: rotate(-90deg);
`;
