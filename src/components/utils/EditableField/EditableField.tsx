import React from "react";
import "./EditableField.scss";
import useLogic from "./hooks/useLogic";
import useRender from "./hooks/useRender";

export interface IEditableFieldProps {
    value: string,
    onChange: (value: string) => void,
    label?: string,
    placeHolder?: string,
    className?: string,
}

const EditableField = (props: IEditableFieldProps) => {
    const logic = useLogic(props);
    const render = useRender(logic, props);

    return (
        <div className={"editable-field d-flex flex-column gap-1 " + props.className}>
            <h3>{props.label}</h3>
            {render.field}
        </div>
    )
}

export default EditableField;