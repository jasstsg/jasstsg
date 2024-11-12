import { ProjectProps, WorkOrSchoolProps } from '../../components/resume/interfaces';
import Project from '../../components/resume/Project';
import WorkOrSchool from '../../components/resume/WorkOrSchool';
import resumeData from '../../data/resume.json';
import './resume.scss';
import './resume.grid.scss';
import IconText from '../../components/IconText/IconText';
import IconTextLink from '../../components/IconText/IconTextLink';

function Resume(props: any) {
    /* Options for resume type are either an empty string or "printable" */
    const resumeType: string = props.resumeType;
    
    const work: WorkOrSchoolProps[] = resumeData.work;
    const school: WorkOrSchoolProps[] = resumeData.school;
    const projects: ProjectProps[] = resumeData.projects;
    
    return (
        <section id="resume">
            <div className={`resume-container ${resumeType}`}>
                <div className="header">
                    <div className="left">
                        <div className="resume-printable">
                            <IconTextLink
                                faclasses="fa-solid fa-print"
                                href="#/resume-printable"
                                text="Open print-ready resume"
                                newTab={true} />
                        </div>
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
                    {
                        work.map(w => ( <WorkOrSchool key={w.title} props={w} /> ))
                    }
                    <h1>Education</h1>
                    {
                        school.map(s => ( <WorkOrSchool key={s.title} props={s} /> ))
                    }
                    <h1>Projects</h1>
                    {
                        projects.filter(p => !p.hideFromResume)
                            .map(p => ( <Project key={p.title} props={p} /> ))
                    }
                    <div id="see-more-projects">
                        Find more of my projects:&nbsp;
                        <a href="https://jasstsg.github.io/jasstsg/#/projects">
                            https://jasstsg.github.io/jasstsg/#/projects
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Resume;