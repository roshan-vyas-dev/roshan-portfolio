

function ContactCard({ title, value, link, icon }) {


  return (
    <a
      href={link}
      target={title !== "Email" ? "_blank" : undefined}
      rel={title !== "Email" ? "noopener noreferrer" : undefined}
      className="block rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" >

      <div className="flex items-center gap-3">
        
        <img
          src={icon}
          alt={title}
          className="h-6 w-6"/>

        <div>

          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>

          <p className="mt-1 text-gray-600">
            {value}
          </p>

        </div>

      </div>

    </a>
  );
}

export default ContactCard;