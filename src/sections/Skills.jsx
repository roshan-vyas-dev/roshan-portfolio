import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import skillsData from "../data/skillsData";


function Skills() {
    return (
        <section id="skills" className="py-24">
            <Container>
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    What I Use
                </p>

                <SectionHeading>
                    Skills
                </SectionHeading>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                    Here are the technologies and tools I use to build modern, responsive,
                    and scalable web applications.
                </p>


                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {skillsData.map((item) => (
                        <SkillCard
                            key={item.category}
                            category={item.category}
                            skills={item.skills}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Skills;