import { createAction, props } from "@ngrx/store";
import { User } from './models/user.model';

export const loginAction = createAction(
    '[Login Page] User Login',
    props<{user: User}>()
);