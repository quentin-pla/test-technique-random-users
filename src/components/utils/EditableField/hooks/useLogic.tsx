import React, {ChangeEvent, useEffect, useState} from "react";
import {IEditableFieldProps} from "../EditableField";

export interface IEditableFieldLogic {
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void,
    handleToggleEditMode: () => void,
    isEditing: boolean,
    value: string,
}

interface IEditableFieldState {
    value: string,
    editMode: boolean
}

const initialState: IEditableFieldState = {
    value: "",
    editMode: false,
}

const useLogic = (props: IEditableFieldProps): IEditableFieldLogic => {
    const [state, setState] = useState<IEditableFieldState>(initialState);

    useEffect(() => {
        setState(prevState => ({...prevState, value: props.value}))
    }, [props.value])

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState(prevState => ({...prevState, value}));
    }

    const handleToggleEditMode = () => {
        setState(prevState => ({...prevState, editMode: !prevState.editMode}));
    }

    return {
        handleInput,
        handleToggleEditMode,
        value: state.value,
        isEditing: state.editMode
    }
}

export default useLogic;