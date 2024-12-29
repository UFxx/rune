import { FC } from 'react';
import { IAuthReducerProps } from '../../../types';
import styled from 'styled-components';
import {
	bgColor,
	fontFamily,
	fontSize,
	fontWeight,
	textColor
} from '../../../variables';

export const Login: FC<IAuthReducerProps> = ({ dispatch }) => {
	return (
		<>
			<BG onClick={() => dispatch({ type: 'closeForm' })}></BG>
			<Container>
				<p className="title">Авторизация</p>
				<Form>
					<Input type="text" placeholder="Логин" autoComplete="username" />
					<Input
						type="password"
						autoComplete="current-password"
						placeholder="Пароль"
					/>
					<FormOptions>
						<FormOptionsText>Нет аккаунта? Тогда создай его!</FormOptionsText>
						<FormOptionsLink
							onClick={() => dispatch({ type: 'openRegistration' })}
						>
							Регистрация
						</FormOptionsLink>
					</FormOptions>
					<FormOptions>
						<FormOptionsLinkTitle>Забыли пароль?</FormOptionsLinkTitle>
						<FormOptionsLink
							onClick={() => dispatch({ type: 'openForgotPassword' })}
						>
							Восстановить пароль
						</FormOptionsLink>
					</FormOptions>
					<Button type="button" className="button">
						Войти
					</Button>
				</Form>
			</Container>
		</>
	);
};

const BG = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	z-index: 1;
	cursor: pointer;
`;

const Container = styled.div`
	position: absolute;
	background-color: ${bgColor.bg3};
	padding: 20px 80px;
	border-radius: 30px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	z-index: 2;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 15px;
	margin-top: 20px;
`;

const Input = styled.input`
	text-align: center;
	color: ${textColor.text};
	padding: 13px 0;
	background-color: ${bgColor.bg2};
	border-radius: 15px;
	border: none;
	font-size: ${fontSize.medium};
	font-family: ${fontFamily.ysabeauSC};
	width: 400px;
	transition: 0.3s ease box-shadow;
	outline: none;
	&::placeholder {
		text-align: center;
		color: ${textColor.text};
		transition: 0.3s ease transform, 0.3s ease opacity;
	}
	&:focus {
		box-shadow: 0 0 0 2px ${textColor.textHover};
	}
	&:focus::placeholder {
		transform: translateX(5px);
		opacity: 0;
	}
`;

const FormOptions = styled.div`
	display: flex;
	column-gap: 10px;
`;

const FormOptionsText = styled.p`
	font-size: ${fontSize.xxSmall};
	font-family: ${fontFamily.ysabeauSC};
	&:last-child {
		color: ${textColor.header};
		cursor: pointer;
		transition: 0.3s ease color;
		&:hover {
			color: ${textColor.header};
		}
	}
`;

const FormOptionsLink = styled.p`
	position: absolute;
	left: 60%;
	font-family: ${fontFamily.ysabeauSC};
	color: ${textColor.header};
	transition: 0.3s ease color;
	cursor: pointer;
	&:hover {
		color: ${textColor.textHover};
	}
`;

const FormOptionsLinkTitle = styled.p`
	font-family: ${fontFamily.ysabeauSC};
	margin-left: 122px;
`;

const Button = styled.button`
	align-self: center;
	margin-top: 20px;
	font-size: ${fontSize.medium};
	font-weight: ${fontWeight.medium};
`;

export { BG, Container, Form, Input, Button };
