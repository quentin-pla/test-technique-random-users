import React, {ChangeEvent, useCallback, useEffect, useMemo, useState} from "react";
import {IEditableFieldProps} from "../EditableField";

export interface IEditableFieldLogic {
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void,
    handleToggleEdit: () => void,
    isEditing: boolean,
    value: string,
    isInvalid: boolean,
}

interface IEditableFieldState {
    value: string,
    isEditing: boolean,
    isInvalid: boolean,
}

const initialState: IEditableFieldState = {
    value: "",
    isEditing: false,
    isInvalid: false,
}

const useEditableFieldLogic = (props: IEditableFieldProps): IEditableFieldLogic => {
    const [state, setState] = useState<IEditableFieldState>(initialState);

    useEffect(() => {
        setState(prevState => ({...prevState, value: props.value}))
    }, [props.value])

    const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isInvalid = !!props.regexValidator && !props.regexValidator.test(value);
        setState(prevState => ({...prevState, value, isInvalid: isInvalid}));
    }, [props.regexValidator])

    const handleToggleEdit = useCallback(() => {
        const isEditing = !state.isEditing;
        setState(prevState => ({...prevState, isEditing}));
        if (!isEditing) props.onChange(state.value);
    }, [state.isEditing, state.value])

    return useMemo(() => ({
        handleInput,
        handleToggleEdit,
        value: state.value,
        isEditing: state.isEditing,
        isInvalid: state.isInvalid,
    }), [state.isEditing, state.value, state.isInvalid])
}

export default useEditableFieldLogic;