import styled from 'styled-components';

import { FC } from 'react';
import { IAuthReducerProps } from '../../../types';
import { bgColor, fontFamily, fontSize, textColor } from '../../../variables';

export const CTO: FC<IAuthReducerProps> = ({ dispatch }) => {
	return (
		<>
			<Container>
				<Item>
					<Text>Уже есть аккаунт? Войди!</Text>
					<Text>Мы тебя тут уже заждались если честно</Text>
					<Button
						className="button"
						onClick={() => dispatch({ type: 'openLogin' })}
					>
						Войти
					</Button>
				</Item>
				<Separator></Separator>
				<Item>
					<Text>Ещё нет аккаунта? Создай!</Text>
					<Text>Это не займёт много времени</Text>
					<Button
						className="button"
						onClick={() => dispatch({ type: 'openRegistration' })}
					>
						Регистрация
					</Button>
				</Item>
			</Container>
		</>
	);
};

const Container = styled.div`
	margin-top: 70px;
	display: flex;
	justify-content: space-between;
	padding: 44px 240px;
	background-color: ${bgColor.bg2};
`;

const Separator = styled.div`
	width: 2px;
	background-color: ${textColor.textHover};
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Text = styled.p`
	text-align: center;
	padding-bottom: 20px;
	font-size: ${fontSize.xSmall};
	font-family: ${fontFamily.ledger};
`;

const Button = styled.button`
	margin-top: 20px;
	font-size: ${fontSize.medium};
`;
