import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    const url = "?";
    const githublink = "https://github.com/alphadiop7/baatukaay";
    return (
        <div id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler me-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <a className="navbar-brand me-auto" href={url}>Baatukaay</a>
                    <ul className="btk-navbar-nav navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" target={githublink} href={githublink}><FontAwesomeIcon className="btk-github" icon={faGithub} /></a>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={url}>Accueil</a>
                            </li>
                            <li className="btk-nav-item nav-item">
                                <a className="nav-link" target={githublink} href={githublink}><FontAwesomeIcon className="btk-github" icon={faGithub} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;