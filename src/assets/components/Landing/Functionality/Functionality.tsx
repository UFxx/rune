import styled from 'styled-components';
import { textColor, fontSize, fontWeight, bgColor } from '../../../variables';

import { FC } from 'react';
import { FunctionalityItem } from './FunctionalityItem';

export const Functionality: FC = () => {
	return (
		<>
			<Container>
				<Title className="title">Много возможностей - одна платформа</Title>
				<Content>
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
				</Content>
			</Container>
		</>
	);
};

const Container = styled.div`
	padding: 50px 120px;
	background-color: ${bgColor.bg2};
	box-shadow: 0 35px 120px 120px rgba(0, 0, 0, 0.25);
	box-shadow: 0 -35px 120px 120px rgba(0, 0, 0, 0.25);
	z-index: 3;
`;

const Title = styled.p`
	font-size: ${fontSize.large};
	color: ${textColor.header};
	font-weight: ${fontWeight.semibold};
	text-align: center;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 50px;
`;
