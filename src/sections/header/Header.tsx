import IconTextLink from '../../components/IconText/IconTextLink';
import HorizontalLine from '../horizontal-line/HorizontalLine';
import './header.scss';

function Header(props: any) {
    return (
        <section className="header">
            <nav>
                <ul>
                    <li>
                        <IconTextLink
                            faclasses="fa-solid fa-house"
                            href="/jasstsg"
                            text="Home"
                        />
                    </li>
                    <li>
                        <IconTextLink
                            faclasses="fa-solid fa-gears"
                            href="#/projects"
                            text="Projects"
                        />
                    </li>
                    <li>
                        <IconTextLink
                            faclasses="fa-solid fa-id-badge"
                            href="#/resume"
                            text="Resume"
                        />
                    </li>
                    <li>
                        <IconTextLink
                            faclasses="fab fa-linkedin" 
                            href="https://ca.linkedin.com/in/tyler-jass" 
                            text="LinkedIn"
                            newTab={true}
                        />
                    </li>
                    <li>
                        <IconTextLink
                            faclasses="fab fa-github-square" 
                            href="https://www.github.com/jasstsg" 
                            text="Github"
                            newTab={true}
                        />
                    </li>
                </ul> 
            </nav>
            <HorizontalLine></HorizontalLine>
        </section>
    );
}

export default Header;
