import { ReactNode } from "react"

export interface TimelineElementProps {
    style: TimelineElementStyle,
    content: TimelineElementContent
}

export interface TimelineElementStyle {
    contentBackgroundColor: string,
    contentColor: string,
    arrowColor: string,
    iconBackgroundColor: string,
    iconColor: string,
}

export interface TimelineElementContent {
    icon?: ReactNode,
    date: string,
    title: string,
    subtitle: string,
    content: ReactNode
}