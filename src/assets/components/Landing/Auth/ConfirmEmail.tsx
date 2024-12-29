import { BG, Container, Form, Input, Button } from './Login';
import { FormOptionsText } from './Registration';
import styled from 'styled-components';

import { FC } from 'react';
import { IAuthReducerProps } from '../../../types';
import { fontFamily, fontSize } from '../../../variables';

export const ConfirmEmail: FC<IAuthReducerProps> = ({ dispatch }) => {
	return (
		<>
			<BG onClick={() => dispatch({ type: 'closeForm' })}></BG>
			<Container>
				<p className="title">Подтвердите почту</p>
				<Subtitle>Код подтверждения отправлен вам на почту</Subtitle>
				<Form>
					<Input
						type="text"
						placeholder="Введите код"
						autoComplete="one-time-code"
					/>
					<FormOptionsText>
						Есть аккаунт?
						<span onClick={() => dispatch({ type: 'openLogin' })}>Войти</span>
					</FormOptionsText>
					<Button type="button" className="button">
						Зарегистрироваться
					</Button>
				</Form>
			</Container>
		</>
	);
};

const Subtitle = styled.p`
	color: white;
	font-size: ${fontSize.xxSmall};
	font-family: ${fontFamily.ysabeauSC};
`;
