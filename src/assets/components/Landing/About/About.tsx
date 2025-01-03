import { FC } from 'react';
import { AboutItem } from './AboutItem';
import { Slider } from './Slider/Slider';
import styled from 'styled-components';
import { textColor } from '../../../variables';

import sliderImg1 from '../../../images/SliderMain/img1.webp';
import sliderImg2 from '../../../images/SliderMain/img2.webp';

export const About: FC = () => {
	return (
		<>
			<Container>
				<Items>
					<AboutItem
						text={`${document.title} - авторский мир, который был придуман и написан администрацией этого форума специально для ролевой игры`}
						extended={false}
					/>
					<ItemsSeparator />
					<AboutItem
						text="Проект создавался группой ролевиков, которые со временем просто устали скитаться в поисках подходящей платформы и место обитания. Поэтому было принято решение сделать все самостоятельно"
						extended={false}
					/>
					<ItemsSeparator />
					<AboutItem
						text={`${document.title} - фэнтези мир меча и магии, в котором каждое существо - маленькая песчинка в огромной пустыне истории. Тысячи лет, миллионы разных существ, государств, войн, “концов света” и много чего другого. Действия развернуться на материке Название материка.`}
						extended={true}
					/>
				</Items>
				<Slider sliderItems={[sliderImg1, sliderImg2]} />
			</Container>
		</>
	);
};

const Container = styled.div`
	padding: 70px 15px 240px 15px;
	display: flex;
	align-items: flex-start;
	justify-content: space-evenly;
	column-gap: 250px;
`;

const Items = styled.div`
	position: relative;
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	row-gap: 40px;
`;

const ItemsSeparator = styled.div`
	width: 100%;
	height: 2px;
	background-color: ${textColor.textHover};
`;
