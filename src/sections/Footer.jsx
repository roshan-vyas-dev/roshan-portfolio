import Container from "../components/Container";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

function Footer() {
    return (
        <footer className="border-t border-gray-200 py-8">
            <Container>
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Roshan Vyas
                        </h3>

                        <p className="text-gray-600">
                            Full Stack Developer 
                        </p>
                    </div>

                    <div className="flex items-center gap-5">
                        <a
                            href="https://github.com/roshan-vyas-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:scale-110"
                            aria-label="GitHub"
                        >
                            <img
                                src={githubIcon}
                                alt="GitHub"
                                className="h-6 w-6"
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/roshan-vyas-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <img
                                src={linkedinIcon}
                                alt="LinkedIn"
                                className="h-6 w-6"
                            />
                        </a>
                    </div>

                </div>

                <p className="mt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Roshan Vyas. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}

export default Footer;