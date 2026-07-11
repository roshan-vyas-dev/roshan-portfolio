import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import ContactCard from "../components/ContactCard";
import contactData from "../data/contactData";

function Contact() {
    return (
        <section id="contact" className="py-24">
            <Container>
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Let's Connect
                </p>

                <SectionHeading>
                    Get In Touch
                </SectionHeading>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                    I'm currently looking for opportunities as a Full Stack Developer. If
                    you'd like to discuss a project, collaboration, or job opportunity,
                    feel free to reach out.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {contactData.map((item) => (
                        <ContactCard
                            key={item.title}
                            title={item.title}
                            value={item.value}
                            link={item.link}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
}

export default Contact;