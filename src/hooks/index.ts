import {useUserProfileLogic} from "./UserProfileLogic.hook";
import {useUserProfileRender} from "./UserProfileRender.hook";
import {useEditableFieldLogic} from "./EditableFieldLogic.hook";
import {useEditableFieldRender} from "./EditableFieldRender.hook";
import {useUsersContextLogic} from "./UsersContextLogic";

export const UserProfileHooks = {
    useLogic: useUserProfileLogic,
    useRender: useUserProfileRender
}

export const EditableFieldHooks = {
    useLogic: useEditableFieldLogic,
    useRender: useEditableFieldRender
}

export const UsersContextHooks = {
    useLogic: useUsersContextLogic
}