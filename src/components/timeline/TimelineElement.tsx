import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { TimelineElementProps } from "./interfaces";

function TimelineElement(props: {element: TimelineElementProps} )
{
    const element: TimelineElementProps = props.element;
    
    return (
      <VerticalTimelineElement 
        icon={element.icon} 
        position={element.elementPosition}>
        <div className="instituion-and-loaction">
              <span className="fa-solid fa-building"></span>
              &nbsp;{element.institution}
              <span className="fa-solid fa-circle"></span>
              <span className="fa-solid fa-calendar-days"></span>
              &nbsp;{element.date}
          </div>
          <h2>{`${element.title}`}</h2>
          <p>{element.content}</p>
      </VerticalTimelineElement>
    )
}

export default TimelineElement;