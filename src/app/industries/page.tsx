export default function IndustriesPage() {
  const industries = [
    {
      name: "Thermal Power Plants",
      icon: "🌡️",
      description: "Specialized services, products, and maintenance for coal, gas, and combined cycle power plants."
    },
    {
      name: "Cement Plants",
      icon: "🏭",
      description: "Turnkey supply of mechanical, electrical, and process solutions to enhance production and efficiency."
    },
    {
      name: "Steel & Metallurgy",
      icon: "🔩",
      description: "Engineered products and solutions for steel making, rolling mills, and allied metallurgical industries."
    },
    {
      name: "Chemical & Fertilizers",
      icon: "⚗️",
      description: "Critical supplies and automation for process reliability in chemical, fertilizer, and allied plants."
    },
    {
      name: "Automotive & Engineering",
      icon: "🚗",
      description: "Supply of precision hardware, maintenance products, and modernization solutions for auto factories."
    },
    {
      name: "Paper & Pulp",
      icon: "📄",
      description: "Equipment, spares, and optimization for paper mills—improving output and reducing downtime."
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-8 text-center">
        Industries We Serve
      </h1>
      <p className="text-steel font-body text-lg mb-12 text-center">
        End-to-end support for India’s largest and most demanding plants.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map(industry => (
          <div
            key={industry.name}
            className="bg-offwhite rounded-xl shadow-md p-8 flex flex-col items-center hover:scale-105 transition"
          >
            <div className="text-4xl mb-4">{industry.icon}</div>
            <h2 className="text-xl font-heading font-bold text-primary mb-2 text-center">{industry.name}</h2>
            <p className="text-base text-steel text-center font-body">{industry.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="bg-accent hover:bg-primary text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition"
        >
          Discuss Your Project
        </a>
      </div>
    </section>
  );
}
