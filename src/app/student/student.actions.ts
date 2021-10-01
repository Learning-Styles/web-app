import { createAction, props } from "@ngrx/store";

export const allFormsLoaded = createAction(
    "[Load Forms Effect] All Forms Loaded",
    props<{forms: any[]}>()
);
