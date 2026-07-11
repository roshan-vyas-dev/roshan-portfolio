import Container from "./Container";
import Button from "./Button";

function Navbar() {
    const navLinkClasses =
        "text-sm font-medium text-gray-600 transition-colors hover:text-black";

    return (
        <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-white">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="text-xl font-semibold tracking-tight text-gray-900"
                    >
                        Roshan Vyas
                    </a>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        <a href="#about" className={navLinkClasses}>
                            About
                        </a>

                        <a href="#skills" className={navLinkClasses}>
                            Skills
                        </a>

                        <a href="#projects" className={navLinkClasses}>
                            Projects
                        </a>

                        <a href="#contact" className={navLinkClasses}>
                            Contact
                        </a>
                    </div>

                    {/* Resume Button */}
                    <Button href="#">
                        Resume
                    </Button>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;