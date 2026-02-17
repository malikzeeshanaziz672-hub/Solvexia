import termImage1 from "../images/termImage1.png";
import termImage2 from "../images/termImage2.webp";
export default function Terms() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[320px] w-full">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2400&q=80"
          alt="Luxury living"
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
              Terms of Service
            </h1>
            <p className="text-gray-200 mt-3 max-w-2xl leading-7">
              Clear terms for a smooth, premium shopping experience.
            </p>
          </div>
        </div>
      </div>

      <div className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="bg-white shadow-xl rounded-2xl p-10">
            <Section title="Use of Website">
              Use the site responsibly and provide accurate details when placing
              orders.
            </Section>

            <Section title="Product Information">
              Slight variations in color or texture may occur due to lighting,
              fabrication, and screen differences.
            </Section>

            <Section title="Orders & Payments">
              Orders are confirmed after payment verification. We may cancel an
              order if pricing or stock information is incorrect.
            </Section>

            <Section title="Intellectual Property">
              All images, designs, descriptions and branding are owned by
              Solvexia and cannot be reused without permission.
            </Section>

            <Section title="Limitation of Liability">
              We’re not responsible for courier delays or minor variations that
              do not affect the product’s use.
            </Section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={termImage1}
                alt="Premium room"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-sm text-gray-600 leading-6">
                  Built for long-term comfort and trust.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={termImage2}
                alt="Minimal luxury"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-sm text-gray-600 leading-6">
                  Timeless design, crafted with care.
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
