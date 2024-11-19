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
                            faclasses=""
                            href="/jasstsg"
                            text="Tyler Jass"
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
                            faclasses="fa-solid fa-laptop-code"
                            href="#/projects"
                            text="Projects"
                        />
                    </li>
                    <li className="hide-for-mobile">
                        <IconTextLink
                            faclasses="fab fa-linkedin" 
                            href="https://ca.linkedin.com/in/tyler-jass" 
                            text="LinkedIn"
                            newTab={true}
                        />
                    </li>
                    <li className="hide-for-mobile">
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
