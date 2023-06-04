import {ReactNode} from "react";

export interface PostPartProps {
    onCancel: () => void
    children?: ReactNode
}