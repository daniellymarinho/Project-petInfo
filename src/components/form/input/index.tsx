import {UseFormRegisterReturn} from "react-hook-form"
import { StyleInput } from "./style";

interface IInputProps{
    label: string;
    type: "text" | "email" | "password" | "url"
    register: UseFormRegisterReturn<string>
    placeholder: string
}

export const Input = ({label, type, register, placeholder}: IInputProps) => {
    return(
        <StyleInput>
            <label>{label}</label>
            <input type={type} {...register} placeholder={placeholder}  />
        </StyleInput>
    )
}