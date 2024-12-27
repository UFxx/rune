import { FC } from 'react';
import { AboutItem } from './AboutItem';
import { Slider } from './Slider';

export const About: FC = () => {
	return (
		<>
			<div className="about-container">
				<div className="about-items">
					<AboutItem
						text={`${document.title} - авторский мир, который был придуман и написан администрацией этого форума специально для ролевой игры`}
					/>
					<div className="about-items__separator"></div>
					<AboutItem text="Проект создавался группой ролевиков, которые со временем просто устали скитаться в поисках подходящей платформы и место обитания. Поэтому было принято решение сделать все самостоятельно" />
					<div className="about-items__separator"></div>
					<AboutItem
						text={`${document.title} - фэнтези мир меча и магии, в котором каждое существо - маленькая песчинка в огромной пустыне истории. Тысячи лет, миллионы разных существ, государств, войн, “концов света” и много чего другого. Действия развернуться на материке Название материка.`}
						extended={true}
					/>
				</div>
				<Slider sliderItems={[1, 2, 3, 4, 5, 6, 7, 8]} />
			</div>
		</>
	);
};
