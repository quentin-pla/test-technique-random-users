import React from "react";
import {IEditableFieldLogic} from "./useLogic";
import {IEditableFieldProps} from "../EditableField";
import {Check2, Pencil} from "react-bootstrap-icons";

interface IEditableFieldRender {
    field: JSX.Element
}

const useRender = (logic: IEditableFieldLogic, props: IEditableFieldProps): IEditableFieldRender => {

    const renderField = () => (
        <div className={"d-flex gap-2 align-items-center"}>
            {logic.isEditing ?
                <>
                    <input placeholder={props.placeHolder} value={logic.value} onChange={logic.handleInput}/>
                    <Check2 size={30} onClick={logic.handleToggleEditMode} className={"icon"}/>
                </>
                :
                <>
                    <span>{logic.value}</span>
                    <Pencil size={15} onClick={logic.handleToggleEditMode} className={"icon"}/>
                </>
            }
        </div>
    )

    return {
        field: renderField()
    }
}

export default useRender;