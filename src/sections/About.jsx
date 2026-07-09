import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import InfoCard from "../components/InfoCard";
import aboutInfo from "../data/aboutData";



function About() {

    return (
        <section id="about" className="py-24">
            <Container>

                 <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Get to know me
                </p>
                
                <SectionHeading>
                    About Me
                </SectionHeading>

               

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                    I am a passionate Full Stack Developer specializing in the MERN stack. I
                    enjoy building modern, responsive web applications and continuously improving
                    my skills through real-world projects and hands-on learning.
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {aboutInfo.map((item) => (
                        <InfoCard
                            key={item.title}
                            title={item.title}
                            value={item.value}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
}

export default About;