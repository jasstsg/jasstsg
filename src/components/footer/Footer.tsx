import './footer.scss';

function Footer() {
    return (
        <div className="footer">
            <ul>
                <li>
                    <a href="https://ca.linkedin.com/in/tyler-jass" target="_blank">
                        <span className="fab fa-linkedin" aria-hidden="true"></span>
                        &nbsp;LinkedIn 
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/jasstsg" target="_blank">
                        <span className="fab fa-github-square" aria-hidden="true"></span>
                        &nbsp;Github
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;