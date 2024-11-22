import { GITHUB_URL } from "../../helpers/constants";
import Pill from "../../components/pill/Pill";
import { ProjectProps } from "../../components/resume/interfaces";

function ProjectDetails(props: {props: ProjectProps}){
    const record = props.props;
    return (
        <div className="record project-details">
            <h2>{record.title}</h2>
            
            { record.siteLink && (
                <div>
                    <a href={record.siteLink}
                        target="_blank"
                        rel="noreferrer">   
                            <span className="fa-solid fa-globe"></span>
                            &nbsp;
                            {record.siteLink}
                    </a>
                </div>
            )}
            <div>
                <a href={record.githubLink}
                    target="_blank"
                    rel="noreferrer">   
                        <span className="fab fa-github-square"></span>
                        &nbsp;&nbsp;
                        {record.githubLink.substring(GITHUB_URL.length)}
                </a>
            </div>
            <div>
                <span className="fa-solid fa-calendar-days"></span>
                &nbsp;{record.dateStarted}
            </div>
            <ul>{record.description.map(d => <li key={d}>{d}</li>)}</ul>
            <div>
                {record.skills.map(d => <Pill key={d} text={d}></Pill>)}
            </div>
        </div>
    )
}

export default ProjectDetails;