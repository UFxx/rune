import styled from 'styled-components';
import {
	textColor,
	fontFamily,
	fontSize,
	fontWeight,
	bgColor
} from '../../../variables';

import { FC } from 'react';
import bg from '../../../images/Main/main-bg.png';

export const Banner: FC = () => {
	return (
		<>
			<div className="banner-container">
				<ImageContainer>
					<img src={bg} alt="" />
				</ImageContainer>
				<Content>
					<Logo>
						<p>Логотип</p>
					</Logo>
					<Info>
						<InfoTitle className="title">{document.title}</InfoTitle>
						<InfoText className="text">
							Платформа для текстовой онлайн ролевой игры по авторской вселенной{' '}
							{document.title}
						</InfoText>
						<Button>Прочитать подробнее</Button>
					</Info>
				</Content>
			</div>
		</>
	);
};

const ImageContainer = styled.div`
	position: absolute;
	top: 0;
	z-index: -1;
	img {
		width: 100%;
		height: 99.53svh;
		user-select: none;
	}
`;

const Content = styled.div`
	padding: 0 155px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: calc(100svh - 99px);
`;

const Logo = styled.div`
	p {
		font-size: ${fontSize.medium};
		color: ${textColor.header};
		background-color: ${bgColor.bg1};
		padding: 100px 70px;
		border-radius: 100%;
		font-family: ${fontFamily.ysabeauSC};
		font-weight: ${fontWeight.medium};
	}
`;

const Info = styled.div`
	padding: 86px 54px;
	display: flex;
	flex-direction: column;
	text-align: center;
	row-gap: 90px;
	border-radius: 35px;
	/* like bgColor.bg1 (#0b0c10) */
	background-color: rgba(11, 12, 16, 0.7);
`;

const InfoTitle = styled.p`
	font-weight: ${fontWeight.black};
	font-size: ${fontSize.xLarge};
`;

const InfoText = styled.p`
	width: 659px;
`;

const Button = styled.button`
	align-self: center;
	width: 425px;
	padding: 15px 0;
	border-radius: 25px;
	background-color: ${bgColor.bg3};
	color: ${textColor.header};
	font-size: ${fontSize.xLarge};
	font-weight: ${fontWeight.medium};
	font-family: ${fontFamily.ysabeauSC};
	border: none;
	transition: 0.3s ease color;
	cursor: pointer;
	&:hover {
		color: ${textColor.textHover};
	}
`;
