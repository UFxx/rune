import styled from 'styled-components';

import { FC } from 'react';
import { BenefitsItem } from './BenefitsItem';
import preview from '../../../images/Audience/site-preview.png';
import { fontSize, fontWeight, textColor } from '../../../variables';

export const Audience: FC = () => {
	return (
		<>
			<Container>
				<Title className="title">Для всех и каждого!</Title>
				<Content>
					<div className="preview">
						<img src={preview} alt="" />
					</div>
					<Benefits>
						<BenefitsItem text="Здесь каждый ролевик найдет с кем сыграть!" />
						<BenefitsSeparator />
						<BenefitsItem text="Авторы всегда могут поучаствовать в работе с миром" />
						<BenefitsSeparator />
						<BenefitsItem text="Гейм-мастеры имеют много возможностей для развития сюжета" />
					</Benefits>
				</Content>
			</Container>
		</>
	);
};

const Container = styled.div`
	border-bottom: 2px solid ${textColor.textHover};
`;

const Title = styled.p`
	margin-top: 50px;
	text-align: center;
	font-size: ${fontSize.large};
	font-weight: ${fontWeight.medium};
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 75px;
	padding: 50px 170px;
`;

const Benefits = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 70px;
`;

const BenefitsSeparator = styled.div`
	width: 120%;
	margin-left: -10%;
	height: 2px;
	background-color: ${textColor.textHover};
`;
