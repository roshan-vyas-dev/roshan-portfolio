import Container from "../components/Container";

function Hero() {
    return (
        <section>
            <Container>
                <div className="py-24">
                    {/* name */}
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900">
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
                </div>
            </Container>
        </section>
    );
}

export default Hero;