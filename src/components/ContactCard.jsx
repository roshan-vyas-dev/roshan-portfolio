function ContactCard({ title, value, link }) {
  return (
    <a
      href={link}
      className="block rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {value}
      </p>
    </a>
  );
}

export default ContactCard;