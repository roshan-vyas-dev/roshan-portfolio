import Button from "./Button";


function ProjectCard({
    title,
    description,
    techStack,
    github,
    liveDemo,
    image,
}) {
    return (
        <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-6 flex h-56 items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 text-gray-500">
                Project Image
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
                {title}
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
                <Button href={github}>
                    GitHub
                </Button>

                <Button
                    href={liveDemo}
                    variant="secondary"
                >
                    Live Demo
                </Button>
            </div>


        </div>
    );
}

export default ProjectCard;