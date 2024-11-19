import EmblaCarousel from '../../components/embla/EmblaCarousel';
import './projects.scss';
import ProjectSlide from './ProjectSlide';
import resumeData from '../../data/resume.json';
import { ProjectProps } from '../../components/resume/interfaces';
import ProjectCard from './ProjectCard';
import HorizontalLine from '../horizontal-line/HorizontalLine';
import IconTextLink from '../../components/IconText/IconTextLink';

function Projects (props: any){
    const heading: string = props.heading;
    const featuredOnly: number = props?.featuredOnly ?? false;
    const projects: ProjectProps[] = resumeData.projects;

    const slides = projects.map(p => ( <ProjectSlide key={p.title} props={p} />))
    const cards = featuredOnly ? 
        projects.filter(p => p.featured)
                .map(p => ( <ProjectCard key={p.title} props={p} />)) : 
        projects.map(p => ( <ProjectCard key={p.title} props={p} />))

    return (
        <section id="projects">
            <div id="project-cards-container">
                <h2>{heading}</h2>
                {cards}
                {
                    featuredOnly &&
                    <h3 className="see-more">
                        <IconTextLink
                            faclasses="fa-solid fa-arrow-right"
                            href="#/projects"
                            text="See more"
                            iconAfter={true}
                        />
                    </h3>
                }
            </div>
            {/* <EmblaCarousel slides={slides} options={{ loop: true }}></EmblaCarousel> */}
        </section>
    );
}

export default Projects;