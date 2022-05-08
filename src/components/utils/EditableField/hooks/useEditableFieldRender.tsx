import React, {useMemo} from "react";
import {IEditableFieldLogic} from "./useEditableFieldLogic";
import {IEditableFieldProps} from "../EditableField";
import {Check2, Pencil} from "react-bootstrap-icons";

interface IEditableFieldRender {
    field: JSX.Element,
    error: JSX.Element
}

const useEditableFieldRender = (logic: IEditableFieldLogic, props: IEditableFieldProps): IEditableFieldRender => {
    const renderLabel = () => (
        <>
            <span title={logic.value} className={"field"}>{logic.value}</span>
            <Pencil size={15} onClick={logic.handleToggleEdit} className={"icon"}/>
        </>
    )

    const renderInput = () => (
        <>
            <input ref={logic.inputRef} className={"field " + (logic.isInvalid ? "error" : "")}
                   placeholder={props.placeHolder}
                   value={logic.value} onChange={logic.handleInput} onKeyUp={logic.handleKeyUp}/>
            <Check2 size={logic.isInvalid ? 0 : 22} onClick={logic.handleToggleEdit} className={"icon"}/>
        </>
    )

    const renderField = () => (
        <div className={"d-flex gap-2 align-items-center"}>
            {logic.isEditing ? renderInput() : renderLabel()}
        </div>
    )

    const renderError = () => (
        <span className={"error-message " + (logic.isInvalid ? "show" : "hide")}>
            {props.errorMessage}
        </span>
    )

    return useMemo(() => ({
        field: renderField(),
        error: renderError()
    }), [logic.value, logic.isEditing, logic.isInvalid])
}

export default useEditableFieldRender;