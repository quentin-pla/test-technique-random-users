import React, {useMemo} from "react";
import "../styles/EditableField.scss";
import {IEditableFieldProps} from "../interfaces";
import {EditableFieldHooks} from "../hooks";

export const EditableField = (props: IEditableFieldProps) => {
    const logic = EditableFieldHooks.useLogic(props);
    const render = EditableFieldHooks.useRender(logic, props);

    return useMemo(() => (
        <div className={"editable-field d-flex flex-column gap-1 " + props.className}>
            <h3 className={"no-select"}>{props.label}</h3>
            {render.field}
            {render.error}
        </div>
    ), [logic.value, logic.isEditing, logic.isInvalid])
}