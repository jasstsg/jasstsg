import './header.scss';

function Header() {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#education">Education</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
