import React from "react";

export default function TheSolvexiaTeam() {
  const devs = [
    {
      name: "Malik Zeeshan Aziz",
      role: "Frontend Developer",
      img: "/developers/ali.jpg",
      tags: ["React", "Tailwind", "UI Motion"],
    },
    {
      name: "Zain Raza",
      role: "Full-Stack Developer",
      img: "/developers/hamza.jpg",
      tags: ["Node", "APIs", "Database"],
    },
    {
      name: "Sara Malik",
      role: "UI/UX Designer",
      img: "/developers/sara.jpg",
      tags: ["Design System", "Figma", "Luxury UI"],
    },
    {
      name: "Hamza Asghar",
      role: "QA & Performance",
      img: "/developers/usman.jpg",
      tags: ["Testing", "Speed", "SEO"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Luxury background image from your design style */}
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80"
            alt="Luxury background"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-white" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
          <p className="text-amber-300 tracking-[0.28em] uppercase text-xs md:text-sm">
            Solvexia Team
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold mt-3">
            Meet Our Developers
          </h1>
          <p className="text-white/80 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            A premium team focused on luxury design, performance, and a smooth
            shopping experience — built with care for Solvexia.
          </p>

          {/* mini stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 max-w-3xl">
            {[
              { label: "Luxury UI", value: "Premium" },
              { label: "Performance", value: "Fast" },
              { label: "Responsive", value: "All Devices" },
              { label: "Support", value: "Reliable" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md p-4"
              >
                <div className="text-white font-semibold">{s.value}</div>
                <div className="text-white/70 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers grid */}
      <section className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Crafting Solvexia with Excellence
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Each developer contributes to a luxury experience — clean UI,
              stable code, and high speed.
            </p>
          </div>

          <div className="flex gap-2">
            <span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 px-4 py-2 text-xs font-medium">
              Premium UI
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-4 py-2 text-xs font-medium">
              Secure & Clean
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {devs.map((d) => (
            <div
              key={d.name}
              className="group rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56">
                <img
                  src={d.img}
                  alt={d.name}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // fallback if image missing
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1520975958225-4d4016dfe38f?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-semibold text-lg">
                    {d.name}
                  </div>
                  <div className="text-white/80 text-sm">{d.role}</div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full bg-gray-100 text-gray-700 px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  Focused on building a luxury, smooth, and modern user
                  experience for your brand.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Luxury content section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-600 uppercase tracking-[0.24em] text-xs font-semibold">
              How We Work
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              Luxury Look + Professional Engineering
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              We design premium layouts, optimize performance, and keep the code
              clean — so your customers feel the quality of Solvexia in every
              scroll and click.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                Elegant animations without slowing the site
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                Mobile-first layouts for perfect viewing
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                Clean structure for easy future updates
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
            ].map((img) => (
              <div
                key={img}
                className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm"
              >
                <img
                  src={img}
                  alt="Team work"
                  className="h-40 md:h-44 w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
