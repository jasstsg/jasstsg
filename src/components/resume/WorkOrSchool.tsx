import Pill from "../pill/Pill";
import { WorkOrSchoolProps } from "./interfaces";

function WorkOrSchool(props: {props: WorkOrSchoolProps}){
    const record = props.props;
    return (
        <div className="record">
            <h2>{record.title}</h2>
            <div className="">
                <span className="fa-solid fa-building"></span>
                &nbsp;{record.institution}
                <span className="fa-solid fa-circle"></span>              
                <span className="fa-solid fa-location-dot"></span>
                &nbsp;{record.location}
                <span className="fa-solid fa-circle"></span>
                <span className="fa-solid fa-calendar-days"></span>
                &nbsp;{record.dateStarted} - {record.dateEnded}
            </div>
            <ul>
                <div>{record?.descriptionNote}</div>
                {record.description.map(d => <li key={d}>{d}</li>)}</ul>
            <div>
                {record.skills.map(d => <Pill key={d} text={d}></Pill>)}
            </div>
        </div>
    )
}

export default WorkOrSchool;