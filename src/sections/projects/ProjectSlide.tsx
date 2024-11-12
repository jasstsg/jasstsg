import { ProjectProps } from "../../components/resume/interfaces";
import Pill from "../../components/pill/Pill";
import './projects.scss';
import { GITHUB_URL } from "../../helpers/constants";

function ProjectSlide(props: any) {
    const record: ProjectProps = props.props;
    return (
        <section id={`project-slide-${record.title}`} className="project-slide">
            <div className="embla__tween__node"
                style={{ 
                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/${record.imageName}')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionX: 'right',
                    borderRadius: '10px',
                }}>
                <div className="record">
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
                    <p><em>{record.shortDescription}</em></p>
                    <div>
                        {record.skills.map(s => <Pill key={s} text={s}></Pill>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSlide;