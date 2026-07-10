import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";

function Projects() {
    return (
        <section id="projects" className="py-24">
            <Container>
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    My Work
                </p>

                <SectionHeading>
                    Featured Projects
                </SectionHeading>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                    Here are some of the projects I've built to strengthen my full-stack
                    development skills and solve real-world problems.
                </p>

                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            techStack={project.techStack}
                            github={project.github}
                            liveDemo={project.liveDemo}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Projects;