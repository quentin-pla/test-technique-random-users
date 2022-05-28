import React, {useMemo} from "react";
import {Check2, Pencil} from "react-bootstrap-icons";
import {IEditableFieldLogic, IEditableFieldProps, IEditableFieldRender} from "../interfaces";

export const useEditableFieldRender = (logic: IEditableFieldLogic, props: IEditableFieldProps): IEditableFieldRender => {
    const renderLabel = useMemo(() => (
        <>
            <span title={logic.value} className={"field"}>{logic.value}</span>
            <Pencil size={15} onClick={logic.handleToggleEdit} className={"icon"}/>
        </>
    ), [logic.value, logic.handleToggleEdit])

    const renderInput = useMemo(() => (
        <>
            <input ref={logic.inputRef} className={"field " + (logic.isInvalid ? "error" : "")}
                   placeholder={props.placeHolder}
                   value={logic.value} onChange={logic.handleInput} onKeyUp={logic.handleKeyUp}/>
            <Check2 size={logic.isInvalid ? 0 : 22} onClick={logic.handleToggleEdit} className={"icon"}/>
        </>
    ), [logic.inputRef, logic.isInvalid, props.placeHolder, logic.value, logic.handleInput, logic.handleKeyUp, logic.handleToggleEdit])

    const renderField = () => (
        <div className={"d-flex gap-2 align-items-center"}>
            {logic.isEditing ? renderInput : renderLabel}
        </div>
    )

    const renderError = useMemo(() => (
        <span className={"error-message " + (logic.isInvalid ? "show" : "hide")}>
            {props.errorMessage}
        </span>
    ), [logic.isInvalid, props.errorMessage])

    return {
        field: renderField(),
        error: renderError
    }
}