import { TypeAnimation } from 'react-type-animation';
import './hero.scss';

function Hero(props: any){
    const sequence: any[] = [
        "Tyler", 2000,
        "a web developer", 5000,
        "excited about learning", 5000,
        "a casual guitar player", 5000,
        "a dog owner", 5000, 
        "a husband", 5000,
        "a dungeon master", 5000,
        "a gamer", 5000,
        "Tyler", 3000,
    ];

    return (
        <section id="hero">
            <h1>Welcome, I'm&nbsp;
                <TypeAnimation className="animated-text"
                    sequence={sequence}
                    repeat={Infinity}
                    cursor={false}/>
                    !
            </h1>
            <h2>Its still under construction, but while you're here, please have a look around!</h2>
        </section>
    )
}

export default Hero;