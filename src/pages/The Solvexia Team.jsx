import React from "react";
import FullStack_Developer from "../images/zainRaza.jfif";
import Frontend_Devloper from "../images/MalikZeeshan.jfif";
import UI_UX_Designer from "../images/SidraUiUx.jpg";
import QA_Performance from "../images/HamzaAsghar.jfif"; // <-- make sure this image exists

export default function TheSolvexiaTeam() {
  const devs = [
    {
      name: "Malik Zeeshan Aziz",
      role: "Frontend Developer",
      img: Frontend_Devloper,
      tags: ["React", "Tailwind", "UI Motion"],
    },
    {
      name: "Zain Raza",
      role: "Full-Stack Developer",
      img: FullStack_Developer,
      tags: ["Node", "APIs", "Database"],
    },
    {
      name: "Sidra Khan",
      role: "UI/UX Designer",
      img: UI_UX_Designer,
      tags: ["Design System", "Figma", "Luxury UI"],
    },
    {
      name: "Hamza Asghar",
      role: "QA & Performance",
      img: QA_Performance,
      tags: ["Testing", "Speed", "SEO"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80"
            alt="Luxury background"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-white" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <p className="text-amber-300 tracking-[0.28em] uppercase text-xs">
            Solvexia Team
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-3">
            Meet Our Developers
          </h1>
          <p className="text-white/80 max-w-2xl mt-4 leading-relaxed">
            A premium team focused on luxury design, performance, and a smooth
            shopping experience — built with care for Solvexia.
          </p>
        </div>
      </section>

      {/* Developers Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Crafting Solvexia with Excellence
          </h2>
          <p className="text-gray-600 mt-3">
            Clean UI, stable code, and high performance — luxury experience in
            every detail.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {devs.map((d) => (
            <div
              key={d.name}
              className="group rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE FIXED SECTION */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  className="absolute inset-0 w-full h-full object-cover object-top 
                             group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1520975958225-4d4016dfe38f?auto=format&fit=crop&w=1200&q=80";
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Name & Role */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {d.name}
                  </h3>
                  <p className="text-white/80 text-sm">{d.role}</p>
                </div>
              </div>

              {/* Tags + Description */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full bg-gray-100 text-gray-700 px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Focused on building a smooth, premium and high-performance
                  experience for your brand.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      {/* Premium Values Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-amber-600 uppercase tracking-[0.3em] text-xs font-semibold">
            Why Solvexia Team
          </p>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Excellence. Precision. Performance.
          </h3>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            At Solvexia, we combine luxury aesthetics with professional
            engineering. Every line of code, every interaction, and every detail
            is crafted with precision to deliver a seamless and premium
            experience.
          </p>

          {/* 3 Premium Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-amber-600 text-3xl font-bold">01</div>
              <h4 className="text-lg font-semibold mt-4 text-gray-900">
                Luxury UI Experience
              </h4>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Premium layouts, elegant typography, and smooth transitions that
                reflect a high-end digital presence.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-amber-600 text-3xl font-bold">02</div>
              <h4 className="text-lg font-semibold mt-4 text-gray-900">
                Clean & Scalable Code
              </h4>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Structured architecture and maintainable systems designed for
                long-term growth and performance.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-amber-600 text-3xl font-bold">03</div>
              <h4 className="text-lg font-semibold mt-4 text-gray-900">
                Speed & Optimization
              </h4>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                High-performance delivery ensuring fast load times and smooth
                interactions across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
