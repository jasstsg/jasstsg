import { ReactNode } from "react"

export interface TimelineElementProps {
    title?: string,
    institution?: string,
    location?: string,
    content?: ReactNode,
    date?: string,
    elementPosition?: string,
    icon?: ReactNode,
}
