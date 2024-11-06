import HorizontalLine from '../horizontal-line/HorizontalLine';
import './footer.scss';

function Footer(props: any) {
    return (
        <section className="footer">
            <HorizontalLine></HorizontalLine>
            <ul>
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
                <li>
                    <a href="mailto:jasstsg@gmail.com">
                        <span className="fa-solid fa-envelope" aria-hidden="true"></span>
                        &nbsp;Email
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Footer;