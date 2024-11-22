import { ProjectProps } from "../../components/resume/interfaces";
import ProjectDetails from "./ProjectDetails";
import './project-card.scss';

export interface ProjectCardProps {
    id: string, 
    project: ProjectProps,
    onClick: React.MouseEventHandler
}

function ProjectCard(props: {props: ProjectCardProps}) {
    const cardProps: ProjectCardProps = props.props;
    const project: ProjectProps = cardProps.project;
    const cardBackStyle: React.CSSProperties = {
        backgroundImage: 
            `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
            url(${process.env.PUBLIC_URL}/images/${project.imageName})`,
    }

    return (
        <section className="project-card not-flipped" id={cardProps.id} onClick={cardProps.onClick}>
            <div className="card-front">
                <img src={`${process.env.PUBLIC_URL}/images/${project.imageName}`} />
                <div className="content">
                    <h3>{project.title}</h3> 
                    <p>{project.shortDescription}</p> 
                </div>
            </div>
            <div className="card-back" style={cardBackStyle}>
                <ProjectDetails props={project} />
            </div>
        </section>
    )
}

function _handleClick(project: ProjectProps) {
    window.open(project?.siteLink ?? project?.githubLink, "_blank");
}

export default ProjectCard;