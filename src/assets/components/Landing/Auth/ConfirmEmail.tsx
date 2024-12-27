import { FC } from 'react';
import { IAuthReducerProps } from '../../../types';

export const ConfirmEmail: FC<IAuthReducerProps> = ({ dispatch }) => {
	return (
		<>
			<div
				className="form-bg"
				onClick={() => dispatch({ type: 'closeForm' })}
			></div>
			<div className="form-container">
				<p className="title">Подтвердите почту</p>
				<p className="form-subtitle">
					Код подтверждения отправлен вам на почту
				</p>
				<form>
					<input
						type="text"
						placeholder="Введите код"
						autoComplete="one-time-code"
					/>
					<p>
						Есть аккаунт?
						<span onClick={() => dispatch({ type: 'openLogin' })}>Войти</span>
					</p>
					<button type="button" className="button">
						Зарегистрироваться
					</button>
				</form>
			</div>
		</>
	);
};
