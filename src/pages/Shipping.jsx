import shippingImage1 from "../images/shippingImage1.webp";
import shippingImage2 from "../images/shippingImage2.jpeg";
export default function Shipping() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[320px] w-full">
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80"
          alt="Premium delivery"
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
              Shipping Info
            </h1>
            <p className="text-gray-200 mt-3 max-w-2xl leading-7">
              Safe packaging, careful handling, and reliable delivery.
            </p>
          </div>
        </div>
      </div>

      <div className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="bg-white shadow-xl rounded-2xl p-10">
            <Section title="Delivery Areas">
              We deliver to major cities and selected locations nationwide.
            </Section>

            <Section title="Processing Time">
              Standard orders: 2–5 working days. Custom furniture: 7–14 days.
            </Section>

            <Section title="Delivery Time">
              Major cities: 3–5 days. Other areas: 5–8 days.
            </Section>

            <Section title="Shipping Charges">
              Charges depend on product size, destination, and order quantity.
              Final cost is shared at checkout or confirmation.
            </Section>

            <Section title="Damaged Items">
              If your item arrives damaged, contact us within 24 hours with
              photos for quick support.
            </Section>

            <Section title="Support">
              Email: <span className="font-medium">support@solvexia.com</span>
            </Section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={shippingImage1}
                alt="Packaging"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-sm text-gray-600 leading-6">
                  Secure packaging for premium furniture delivery.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={shippingImage2}
                alt="Modern interior"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-sm text-gray-600 leading-6">
                  Luxury interiors, delivered with care.
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
