import privacyImage1 from "../images/privacyImage1.jpg";
import privacyImage2 from "../images/privacyImage2.jpeg";
export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[320px] w-full">
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80"
          alt="Luxury interior"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-amber-300 tracking-widest uppercase text-sm">
              Solvexia
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold mt-2">
              Privacy Policy
            </h1>
            <p className="text-gray-200 mt-3 max-w-2xl leading-7">
              Your privacy matters. Here’s how we collect, use, and protect your
              information with care.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="bg-white shadow-xl rounded-2xl p-10">
            <p className="text-gray-600 mb-8 leading-7">
              At <span className="font-semibold text-black">Solvexia</span>, we
              respect your privacy and handle your data responsibly.
            </p>

            <Section title="Information We Collect">
              Name, contact details, shipping address, order history, messages
              and basic website usage data (cookies).
            </Section>

            <Section title="How We Use Your Information">
              To process orders, deliver products, respond to support requests,
              and improve your shopping experience.
            </Section>

            <Section title="Data Protection">
              We use secure systems and trusted services to protect your
              information.
            </Section>

            <Section title="Cookies">
              Cookies help us improve performance and remember your preferences.
              You can disable cookies in your browser settings anytime.
            </Section>

            <Section title="Contact Us">
              Email: <span className="font-medium">support@solvexia.com</span>
            </Section>
          </div>

          {/* Luxury side visuals */}
          <aside className="space-y-6">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={privacyImage1}
                alt="Premium detail"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-sm text-gray-600 leading-6">
                  Crafted experiences. Clean design. Responsible data handling.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={privacyImage2}
                alt="Luxury texture"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-sm text-gray-600 leading-6">
                  Premium finishes inspired by modern interiors.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-7">
      <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
      <p className="text-gray-600 leading-7">{children}</p>
      <div className="mt-6 h-px bg-gray-100" />
    </div>
  );
}
