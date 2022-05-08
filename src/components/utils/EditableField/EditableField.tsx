import React, {useMemo} from "react";
import "./EditableField.scss";
import useEditableFieldLogic from "./hooks/useEditableFieldLogic";
import useEditableFieldRender from "./hooks/useEditableFieldRender";

export interface IEditableFieldProps {
    value: string,
    onChange: (value: string) => void,
    label?: string,
    placeHolder?: string,
    className?: string,
    regexValidator?: RegExp,
    errorMessage?: string,
}

const EditableField = (props: IEditableFieldProps) => {
    const logic = useEditableFieldLogic(props);
    const render = useEditableFieldRender(logic, props);

    return useMemo(() => (
        <div className={"editable-field d-flex flex-column gap-1 " + props.className}>
            <h3 className={"no-select"}>{props.label}</h3>
            {render.field}
            {render.error}
        </div>
    ), [logic.value, logic.isEditing, logic.isInvalid])
}

export default EditableField;