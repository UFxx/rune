import { FC } from 'react';
import { IAuthReducerProps } from '../../../types';

export const Registration: FC<IAuthReducerProps> = ({ dispatch }) => {
	return (
		<>
			<div
				className="form-bg"
				onClick={() => dispatch({ type: 'closeForm' })}
			></div>
			<div className="form-container">
				<p className="form-title title">Регистрация</p>
				<form>
					<input type="text" placeholder="Логин" autoComplete="username" />
					<input
						type="password"
						autoComplete="new-password"
						placeholder="Пароль"
					/>
					<input
						type="password"
						placeholder="Повторите пароль"
						autoComplete="new-password"
					/>
					<input type="email" placeholder="Почта" />
					<p>
						Есть аккаунт?
						<span onClick={() => dispatch({ type: 'openLogin' })}>Войти</span>
					</p>
					<p>
						Подтвердить почту
						<span onClick={() => dispatch({ type: 'openConfirmEmail' })}>
							Временно
						</span>
					</p>
					<button type="button" className="button">
						Зарегистрироваться
					</button>
				</form>
			</div>
		</>
	);
};
