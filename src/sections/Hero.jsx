import Container from "../components/Container";
import Button from "../components/Button";

function Hero() {
    return (
        <section id="hero">
            <Container>
                <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-16 lg:py-24">
                    {/* name */}
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Roshan Vyas
                    </h1>

                    {/* role */}

                    <p className="mt-4 text-xl text-gray-600">
                        Full Stack Developer (MERN)
                    </p>
                    {/* introduction */}
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        I’m a Full Stack Developer specializing in the MERN stack, passionate about
                        building clean, responsive, and user-focused web applications. I enjoy
                        solving real-world problems through code and continuously improving my
                        development skills.
                    </p>

                    {/* two buttons */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Button href="#projects">
                            View Projects
                        </Button>

                        <Button variant="secondary">
                            Download Resume
                        </Button>
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default Hero;