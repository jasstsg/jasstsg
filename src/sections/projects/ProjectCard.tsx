import { ProjectProps } from "../../components/resume/interfaces";

function ProjectCard(props: any) {

    const project: ProjectProps = props.props;
    return (
        <section className="project-card" onClick={() => _handleClick(project)} >
            <img src={`${process.env.PUBLIC_URL}/images/${project.imageName}`} />
            <div className="content">
                <h3>{project.title}</h3> 
                <p>{project.shortDescription}</p> 
            </div>
        </section>
    )
}

function _handleClick(project: ProjectProps) {
    window.open(project?.siteLink ?? project?.githubLink, "_blank");
}

export default ProjectCard;