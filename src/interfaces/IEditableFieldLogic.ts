import React, {ChangeEvent} from "react";

export interface IEditableFieldLogic {
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void,
    handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    handleToggleEdit: () => void,
    isEditing: boolean,
    value: string,
    isInvalid: boolean,
    inputRef: React.RefObject<HTMLInputElement>
}