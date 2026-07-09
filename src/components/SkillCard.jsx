function SkillCard({ category, skills }) {
    return (
        <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
                {category}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-900 hover:text-white"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillCard;