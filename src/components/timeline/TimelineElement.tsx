import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { TimelineElementContent, TimelineElementProps, TimelineElementStyle } from "./interfaces";

function TimelineElement(props: {element: TimelineElementProps} )
{
    const style: TimelineElementStyle = props.element.style;
    const content: TimelineElementContent = props.element.content;
    
    return (
      <VerticalTimelineElement
        contentStyle={{ background: `${style.contentBackgroundColor}`, color: `${style.contentColor}` }}
        contentArrowStyle={{ borderRight: `12px solid ${style.arrowColor}` }}
        iconStyle={{ background: `${style.iconBackgroundColor}`, color: `${style.iconColor}` }}
        icon={content.icon}
        date={`${content.date}`}
      >
        <h2>{`${content.title}`}</h2>
        <h3>{`${content.subtitle}`}</h3>
        <p>{content.content}</p>
    </VerticalTimelineElement>
    )
}

export default TimelineElement;