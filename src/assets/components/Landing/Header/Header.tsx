import styled from 'styled-components';
import {
	textColor,
	fontFamily,
	fontSize,
	fontWeight
} from '../../../variables';

import { FC } from 'react';
import { IAuthReducerProps } from '../../../types';

export const Header: FC<IAuthReducerProps> = ({ dispatch }) => {
	function scroll(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void {
		switch (e.currentTarget.innerText) {
			case 'Функционал':
				scrollTo({ top: 965, behavior: 'smooth' });
				break;
			case 'Для кого':
				scrollTo({ top: 1510, behavior: 'smooth' });
				break;
			case 'О проекте':
				scrollTo({ top: 2450, behavior: 'smooth' });
				break;
			default:
				scrollTo({ top: 0, behavior: 'smooth' });
				break;
		}
	}

	return (
		<>
			<HeaderContainer>
				<HeaderLeftContainer>
					<HeaderLogo></HeaderLogo>
					<nav>
						<HeaderMenu>
							<HeaderMenuList onClick={(e) => scroll(e)}>
								<a href="#">Функционал</a>
							</HeaderMenuList>
							<HeaderMenuList onClick={(e) => scroll(e)}>
								<a href="#">Для кого</a>
							</HeaderMenuList>
							<HeaderMenuList onClick={(e) => scroll(e)}>
								<a href="#">О проекте</a>
							</HeaderMenuList>
						</HeaderMenu>
					</nav>
				</HeaderLeftContainer>
				<button
					className="button"
					onClick={() => dispatch({ type: 'openLogin' })}
				>
					Войти
				</button>
			</HeaderContainer>
		</>
	);
};

const HeaderContainer = styled.header`
	padding: 0 160px 0 120px;
	backdrop-filter: blur(12px);
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 98px;
`;

const HeaderLeftContainer = styled.div`
	display: flex;
	column-gap: 150px;
	align-items: center;
`;

const HeaderLogo = styled.div`
	background-color: #d9d9d9;
	border-radius: 100%;
	width: 86px;
	height: 86px;
`;

const HeaderMenu = styled.ul`
	display: flex;
	column-gap: 150px;
`;

const HeaderMenuList = styled.li`
	font-family: ${fontFamily.inter};
	font-weight: ${fontWeight.medium};
	list-style: none;
	font-size: ${fontSize.xSmall};
	color: ${textColor.text};
	cursor: pointer;
`;
