import React, {useCallback, useEffect, useRef, useState} from "react";
import {IEditableFieldLogic, IEditableFieldProps, IEditableFieldState} from "../interfaces";

const initialState: IEditableFieldState = {
    value: "",
    isEditing: false,
    isInvalid: false,
}

export const useEditableFieldLogic = (props: IEditableFieldProps): IEditableFieldLogic => {
    const [state, setState] = useState<IEditableFieldState>(initialState);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setState(prevState => ({...prevState, value: props.value}))
    }, [props.value])

    useEffect(() => {
        // Focus input when editing
        if (state.isEditing && !!inputRef.current) inputRef.current.focus();
    }, [state.isEditing])

    const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isInvalid = !!props.regexValidator && !props.regexValidator.test(value);
        setState(prevState => ({...prevState, value, isInvalid: isInvalid}));
    }, [props.regexValidator])

    const handleToggleEdit = useCallback(() => {
        if (state.isInvalid) return;
        const isEditing = !state.isEditing;
        setState(prevState => ({...prevState, isEditing}));
        if (!isEditing) props.onChange(state.value);
    }, [state.isEditing, state.value, inputRef.current])

    const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") handleToggleEdit();
    }, [handleToggleEdit])

    return {
        inputRef,
        handleInput,
        handleKeyUp,
        handleToggleEdit,
        value: state.value,
        isEditing: state.isEditing,
        isInvalid: state.isInvalid,
    }
}