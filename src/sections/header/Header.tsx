import HorizontalLine from '../horizontal-line/HorizontalLine';
import './header.scss';

function Header(props: any) {
    return (
        <section className="header">
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            <span className="fa-solid fa-house"></span>
                            &nbsp;Home
                        </a>
                    </li>
                    <li>
                        <a href="/#/projects">
                            <span className="fa-solid fa-gears"></span>
                            &nbsp;Projects
                        </a>
                    </li>
                    <li>
                        <a href="/#/resume" target="_blank" rel="noreferrer">
                            <span className="fa-solid fa-id-badge"></span>
                            &nbsp;Resume
                        </a>
                    </li>
                    <li>
                        <a href="https://ca.linkedin.com/in/tyler-jass" target="_blank" rel="noreferrer">
                            <span className="fab fa-linkedin" aria-hidden="true"></span>
                            &nbsp;LinkedIn 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/jasstsg" target="_blank" rel="noreferrer">
                            <span className="fab fa-github-square" aria-hidden="true"></span>
                            &nbsp;Github
                        </a>
                    </li>
                </ul> 
            </nav>
            <HorizontalLine></HorizontalLine>
        </section>
    );
}

export default Header;
