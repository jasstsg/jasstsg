import EmblaCarousel from '../../components/embla/EmblaCarousel';
import './projects.scss';
import ProjectSlide from './ProjectSlide';
import resumeData from '../../data/resume.json';
import { ProjectProps } from '../../components/resume/interfaces';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import HorizontalLine from '../horizontal-line/HorizontalLine';
import IconTextLink from '../../components/IconText/IconTextLink';

function Projects (props: any){
    const heading: string = props.heading;
    const featuredOnly: number = props?.featuredOnly ?? false;
    let projects: ProjectProps[] = resumeData.projects;

    //const slides = projects.map(p => ( <ProjectSlide key={p.title} props={p} />))

    if (featuredOnly) {
        projects = projects.filter(p => p.featured);
    }

    const cards = projects.map(p => (_createProjectCard(p)));

    return (
        <section id="projects">
            <div id="project-cards-container">
                <h2 className="text-white">{heading}</h2>
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

function _createProjectCard(project: ProjectProps) {
    const id = `project-card-${project.title}`;
    let props: ProjectCardProps = {
        id: id,
        project: project,
        onClick: () => _handleClick(id)

    }
    return (
        <ProjectCard key={project.title} props={props} />
    );
}


function _handleClick(id: string){
    const TRANSITION_SPEED: number = 1;  // In seconds
    let card = document.getElementById(id);
    let allCards = document.querySelectorAll<HTMLElement>('.project-card');

    if (card) {
        card.style.transition = `${TRANSITION_SPEED}s`;
        if (card.classList.contains('flipped')) {
            _flipToFront(card, allCards, TRANSITION_SPEED);
        }
        else {
            _flipToBack(card, allCards, TRANSITION_SPEED);
        }
    }
    else {
        console.log(`project card '${id}' was undefined or null`);
    }
}

function _flipToFront(card: HTMLElement, allCards: NodeListOf<HTMLElement>, transitionSpeed: number) {
    card.style.transform = 'rotateY(0deg)';
    setTimeout((card: HTMLElement) => {
            card.classList.remove('flipped')
        }, 
        transitionSpeed * 300,
        card
    );            
    setTimeout(() => {
            allCards.forEach(c => c.style.display = 'block');
        }, 
        transitionSpeed * 1000
    );
}

function _flipToBack(card: HTMLElement, allCards: NodeListOf<HTMLElement>, transitionSpeed: number) {
    card.style.transform = 'rotateY(180deg)';
        setTimeout((card: HTMLElement) => {
            allCards.forEach(c => c.style.display = 'none');
            card.style.display = 'block';
            card.classList.add('flipped')
        },
        transitionSpeed * 300,
        card
    );
}

export default Projects;