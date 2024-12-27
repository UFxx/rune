import { FC } from 'react';
import { FunctionalityItem } from './FunctionalityItem';

export const Functionality: FC = () => {
	return (
		<>
			<div className="functionality-container">
				<p className="functionality-title title">
					Много возможностей - одна платформа
				</p>
				<div className="functionality-content">
					<FunctionalityItem
						iconClass="user-plus"
						title="Создай и играй"
						text="Создай персонажа и оставь свой след в истории!"
					/>
					<FunctionalityItem
						iconClass="vr-cardboard"
						title="Интересный мир"
						text="Погрузись в хорошо проработанный мир меча и магии."
					/>
					<FunctionalityItem
						iconClass="crown"
						title="Свобода действий"
						text="Найди товарищей и победи врагов! Открой бизнес! Или заведи семью! Все в твоих руках."
					/>
					<FunctionalityItem
						iconClass="marker"
						title="Стабильность"
						text="Удобный интерфейс, живая администрация, постоянный актив."
					/>
				</div>
			</div>
		</>
	);
};
