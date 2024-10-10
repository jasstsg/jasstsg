import Card from '../card/Card';
import './body.scss';
import logo from '../../img/react-and-typescript.png';

function Body() {
    return (
        <div className="body">
            <div className="h-line"></div>
            <h1>Hi, my name is Tyler</h1>
            <div className="h-line"></div>
            
            <section id="projects">
                <h2>Check out some of the projects I've worked on</h2>
                <Card src={logo} title="jasstsg.github.io/jasstsg"
                    desc="This is the site you're currently on!  It serves multiple purposes.  It is a project where I could practice react and typescript, but it also serves as a portfolio/resume.  I had a lot of fun working on it!">
                </Card>
            </section>
            
            <div className="h-line"></div>
            <section id="work">Work Experience</section>
            <div className="h-line"></div>
            <section id="education">Education</section>
            <div className="h-line"></div>
        </div>
    );
}

export default Body;