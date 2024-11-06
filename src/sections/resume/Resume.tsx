import { ProjectProps, WorkOrSchoolProps } from '../../components/resume/interfaces';
import Project from '../../components/resume/Project';
import WorkOrSchool from '../../components/resume/WorkOrSchool';
import resumeData from '../../data/resume.json';
import './resume.scss';

function Resume(props: any) {
    const work: WorkOrSchoolProps[] = resumeData.work;
    const school: WorkOrSchoolProps[] = resumeData.school;
    const projects: ProjectProps[] = resumeData.projects;

    return (
        <section id="resume">
            <div id="resume-header">
                <h1>Tyler Jass</h1>
                <div>Hamilton, ON, Canada</div>
                <div>
                    <a href="https://ca.linkedin.com/in/tyler-jass" target="_blank" rel="noreferrer">
                        <span className="fab fa-linkedin" aria-hidden="true"></span>
                        &nbsp;https://ca.linkedin.com/in/tyler-jass
                    </a>
                </div>
                <div>
                    <a href="https://www.github.com/jasstsg" target="_blank" rel="noreferrer">
                        <span className="fab fa-github-square" aria-hidden="true"></span>
                        &nbsp;https://www.github.com/jasstsg
                    </a>
                </div>
                <div>
                    <a href="mailto:jasstsg@gmail.com">
                        <span className="fa-solid fa-envelope" aria-hidden="true"></span>
                        &nbsp;jasstsg@gmail.com
                    </a>
                </div>
            </div>
            <h1>Experience</h1>
            {work.map(w => ( <WorkOrSchool props={w}></WorkOrSchool> ))}
            <h1>Education</h1>
            {school.map(s => ( <WorkOrSchool props={s}></WorkOrSchool> ))}
            <h1>Projects</h1>
            {projects.map(p => ( <Project props={p}></Project> ))}
        </section>
    )
}

export default Resume;