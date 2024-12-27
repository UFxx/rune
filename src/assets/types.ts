export type HeaderReducerAction =
	| 'openLogin'
	| 'openRegistration'
	| 'openForgotPassword'
	| 'openConfirmEmail'
	| 'closeForm';

export interface IAuthReducerProps {
	dispatch: React.Dispatch<{
		type: HeaderReducerAction;
	}>;
}
