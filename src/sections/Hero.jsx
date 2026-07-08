import Container from "../components/Container";

function Hero() {
    return (
        <section>
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
                    <div className="mt-10 flex items-center gap-4">
                        <button className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                            View Projects
                        </button>

                        <button className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100">
                            Download Resume
                        </button>
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default Hero;