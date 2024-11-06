import { ProjectProps, WorkOrSchoolProps } from '../../components/resume/interfaces';
import Project from '../../components/resume/Project';
import WorkOrSchool from '../../components/resume/WorkOrSchool';
import resumeData from '../../data/resume.json';
import './resume.scss';
import './resume.grid.scss';
import IconText from '../../components/IconText/IconText';
import IconTextLink from '../../components/IconText/IconTextLink';

function Resume(props: any) {
    const work: WorkOrSchoolProps[] = resumeData.work;
    const school: WorkOrSchoolProps[] = resumeData.school;
    const projects: ProjectProps[] = resumeData.projects;
    
    return (
        <section id="resume">
            <div className="header">
                <div className="left">
                    <h1>Tyler Jass</h1>
                </div>
                <div className="right">                
                    <div>
                        <IconText 
                            faclasses="fa-solid fa-location-dot" 
                            text="Hamilton, ON, Canada" />
                    </div>
                    <div>
                        <IconTextLink 
                            faclasses="fa-solid fa-globe" 
                            href="https://jasstsg.github.io/jasstsg/"
                            text="https://jasstsg.github.io/jasstsg/"
                            newTab={true} />
                    </div>
                    <div>
                        <IconTextLink
                            faclasses="fab fa-linkedin" 
                            href="https://ca.linkedin.com/in/tyler-jass" 
                            text="https://ca.linkedin.com/in/tyler-jass"
                            newTab={true} />
                    </div>
                    <div>
                        <IconTextLink
                            faclasses="fab fa-github-square" 
                            href="https://www.github.com/jasstsg" 
                            text="https://www.github.com/jasstsg"
                            newTab={true} />
                    </div>
                    <div>
                        <IconTextLink
                            faclasses="fa-solid fa-envelope" 
                            href="mailto:jasstsg@gmail.com" 
                            text="jasstsg@gmail.com"
                            newTab={true} />
                    </div>
                </div>

            </div>
            <div className="body">
                <h1>Experience</h1>
                {work.map(w => ( <WorkOrSchool props={w}></WorkOrSchool> ))}
                <h1>Education</h1>
                {school.map(s => ( <WorkOrSchool props={s}></WorkOrSchool> ))}
                <h1>Projects</h1>
                {projects.map(p => ( <Project props={p}></Project> ))}
            </div>
        </section>
    )
}

export default Resume;