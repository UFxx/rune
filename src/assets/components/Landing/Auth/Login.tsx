import { FC } from 'react';
import { IAuthReducerProps } from '../../../types';

export const Login: FC<IAuthReducerProps> = ({ dispatch }) => {
	return (
		<>
			<div
				className="form-bg"
				onClick={() => dispatch({ type: 'closeForm' })}
			></div>
			<div className="form-container">
				<p className="form-title title">Авторизация</p>
				<form>
					<input type="text" placeholder="Логин" autoComplete="username" />
					<input
						type="password"
						autoComplete="current-password"
						placeholder="Пароль"
					/>
					<div>
						<p>Нет аккаунта? Тогда создай его!</p>
						<p
							className="form-additional-link"
							onClick={() => dispatch({ type: 'openRegistration' })}
						>
							Регистрация
						</p>
					</div>
					<div>
						<p className="form-additional-link-title">Забыли пароль?</p>
						<p
							className="form-additional-link"
							onClick={() => dispatch({ type: 'openForgotPassword' })}
						>
							Восстановить пароль
						</p>
					</div>
					<button type="button" className="button">
						Войти
					</button>
				</form>
			</div>
		</>
	);
};
