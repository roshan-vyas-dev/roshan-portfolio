import Container from "./Container";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-white">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <a href="/" className="text-xl font-semibold tracking-tight">
                        Roshan Vyas
                    </a>

                    <div className="flex items-center gap-8">
                        <a href="#about" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">About</a>
                        <a href="#skills" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">Skills</a>
                        <a href="#projects" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">Projects</a>
                        <a href="#contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">Contact</a>
                    </div>

                    <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100">
                        Resume
                    </button>

                </div>
            </Container>
        </nav>
    );
}

export default Navbar;