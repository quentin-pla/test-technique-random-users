import React, {ChangeEvent, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {IEditableFieldProps} from "../EditableField";

export interface IEditableFieldLogic {
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void,
    handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    handleToggleEdit: () => void,
    isEditing: boolean,
    value: string,
    isInvalid: boolean,
    inputRef: React.RefObject<HTMLInputElement>
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

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") handleToggleEdit();
    }

    const handleToggleEdit = useCallback(() => {
        const isEditing = !state.isEditing;
        setState(prevState => ({...prevState, isEditing}));
        if (!isEditing) props.onChange(state.value);
    }, [state.isEditing, state.value, inputRef.current])

    return useMemo(() => ({
        inputRef,
        handleInput,
        handleKeyUp,
        handleToggleEdit,
        value: state.value,
        isEditing: state.isEditing,
        isInvalid: state.isInvalid,
    }), [state.isEditing, state.value, state.isInvalid])
}

export default useEditableFieldLogic;