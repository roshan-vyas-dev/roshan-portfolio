import Container from "../components/Container";

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Roshan Vyas
            </h3>

            <p className="text-gray-600">
              Full Stack Developer (MERN)
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              GitHub
            </a>

            <a href="#" className="text-gray-600 hover:text-gray-900">
              LinkedIn
            </a>

            <a
              href="mailto:your-email@example.com"
              className="text-gray-600 hover:text-gray-900"
            >
              Email
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          © 2026 Roshan Vyas. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;