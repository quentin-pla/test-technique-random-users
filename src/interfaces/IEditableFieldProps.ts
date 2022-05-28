export interface IEditableFieldProps {
    value: string,
    onChange: (value: string) => void,
    label?: string,
    placeHolder?: string,
    className?: string,
    regexValidator?: RegExp,
    errorMessage?: string,
}