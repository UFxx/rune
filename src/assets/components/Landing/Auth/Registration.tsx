import { BG, Container, Form, Input, Button } from './Login';

import styled from 'styled-components';

import { FC } from 'react';
import { IAuthReducerProps } from '../../../types';
import { fontFamily, textColor } from '../../../variables';

export const Registration: FC<IAuthReducerProps> = ({ dispatch }) => {
	return (
		<>
			<BG onClick={() => dispatch({ type: 'closeForm' })}></BG>
			<Container>
				<p className="title">Регистрация</p>
				<Form>
					<Input type="text" placeholder="Логин" autoComplete="username" />
					<Input
						type="password"
						autoComplete="new-password"
						placeholder="Пароль"
					/>
					<Input
						type="password"
						placeholder="Повторите пароль"
						autoComplete="new-password"
					/>
					<Input type="email" placeholder="Почта" />
					<FormOptionsText>
						Есть аккаунт?
						<span onClick={() => dispatch({ type: 'openLogin' })}>Войти</span>
					</FormOptionsText>
					<FormOptionsText>
						Подтвердить почту
						<span onClick={() => dispatch({ type: 'openConfirmEmail' })}>
							Временно
						</span>
					</FormOptionsText>
					<Button type="button" className="button">
						Зарегистрироваться
					</Button>
				</Form>
			</Container>
		</>
	);
};

export const FormOptionsText = styled.p`
	font-family: ${fontFamily.ysabeauSC};
	span {
		margin-left: 10px;
		color: ${textColor.header};
		transition: 0.3s ease color;
		cursor: pointer;
		&:hover {
			color: ${textColor.textHover};
		}
	}
`;
