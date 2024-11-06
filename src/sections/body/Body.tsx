import Card from '../../components/card/Card';
import './body.scss';
import logo from '../../img/react-and-typescript.png';
import HorizontalLine from '../horizontal-line/HorizontalLine';

function Body(props: any) {
    return (
        <section className="body">
            <HorizontalLine></HorizontalLine>
            <section id="projects">
                <Card src={logo} title="jasstsg.github.io/jasstsg"
                    desc="This is the site you're currently on!  This project was a fun way to practice with React & Typescript while also sharing some of my work.">
                </Card>
            </section>
            <HorizontalLine></HorizontalLine>
        </section>
    );
}

export default Body;