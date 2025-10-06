export default function ProductsPage() {
  const products = [
    {
      name: "Boiler & Power Plant Equipment",
      description: "High-performance tubes, ESPs, BFPs, fans, and energy-efficient spares for thermal plants.",
      icon: "⚙️",
    },
    {
      name: "Cement Plant Solutions",
      description: "Kiln drives, filtration systems, and monitoring devices for cement sector innovation.",
      icon: "🏗️",
    },
    {
      name: "Process Sensors & IoT Devices",
      description: "Smart field sensors, transmitters, PLC hardware, and remote monitoring for factories.",
      icon: "🖥️",
    },
    {
      name: "Industrial Pumps & Valves",
      description: "Durable pumps, valves, and critical flow control components for rough environments.",
      icon: "🔧",
    },
    {
      name: "Electrical Panels & Automation",
      description: "Custom PLC, MCC, PCC panels; VFDs and automation systems for process optimization.",
      icon: "💡",
    },
    {
      name: "Safety & Environment Systems",
      description: "Gas detectors, industrial alarms, fire safety panels, and emission control devices.",
      icon: "🛑",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-8 text-center">
        Our Products
      </h1>
      <p className="text-steel font-body text-lg mb-12 text-center">
        Globally sourced, India-ready: factory supplies and technology built for the future of manufacturing.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.name} className="bg-offwhite rounded-xl shadow-md p-8 flex flex-col items-center hover:scale-105 transition">
            <div className="text-4xl mb-4">{product.icon}</div>
            <h2 className="text-xl font-heading font-bold text-primary mb-2 text-center">{product.name}</h2>
            <p className="text-base text-steel text-center font-body">{product.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a href="/contact" className="bg-accent hover:bg-primary text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition">
          Enquire Now
        </a>
      </div>
    </section>
  );
}
