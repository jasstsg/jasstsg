import EmblaCarousel from '../../components/embla/EmblaCarousel';
import './projects.scss';
import ProjectSlide from './ProjectSlide';
import resumeData from '../../data/resume.json';
import { ProjectProps } from '../../components/resume/interfaces';

function Projects (props: any){
    const projects: ProjectProps[] = resumeData.projects;

    const slides = projects.map(p => ( <ProjectSlide key={p.title} props={p} />))
    return (
        <section id="projects">
            <EmblaCarousel slides={slides}
                options={{
                    loop: true,
                }}></EmblaCarousel>
        </section>
    );
}

export default Projects;