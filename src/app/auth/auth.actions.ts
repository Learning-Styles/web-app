import { createAction, props } from "@ngrx/store";
import { User } from './models/user.model';

export const loginAction = createAction(
    '[Login Page] User Login',
    props<{user: User, rememberMe: boolean}>()
);

export const logoutAction = createAction(
    '[Top Menu] User Logout'
);

export const userLoaded = createAction(
    '[Auth Module] User Loaded',
    props<{studentId: string, token: string}>()
);