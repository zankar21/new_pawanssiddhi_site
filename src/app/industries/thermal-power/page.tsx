import type { Metadata } from "next";
import IndustryLayout from "../_components/IndustryLayout";
import { Thermometer } from "lucide-react";

export const metadata: Metadata = {
  title: "Thermal Power Plants | Pawanssiddhi",
  description:
    "Maintenance services, spares, and modernization for coal, gas and combined-cycle power plants.",
  alternates: { canonical: "https://pawanssiddhi.in/industries/thermal-power" },
  openGraph: { url: "https://pawanssiddhi.in/industries/thermal-power" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Thermal Power Plant Services",
            areaServed: "IN",
            serviceType: "Maintenance & Modernization",
          }),
        }}
      />
      <IndustryLayout
        title="Thermal Power Plants"
        subtitle="Higher availability, safer operations, and optimized O&M cost."
        Icon={Thermometer}
        heroPoints={[
          "Boiler, turbine & balance-of-plant support",
          "Predictive maintenance & reliability upgrades",
        ]}
        offerings={[
          "Outage planning, condition monitoring, vibration & thermography",
          "Retrofits: pumps, valves, fans, ESP, ash handling",
          "Energy audits and heat-rate improvement",
          "Spares planning & inventory optimization",
        ]}
        products={[
          "Boiler tubes, soot blowers, burners & nozzles",
          "Ash disposal pipeline thickness monitoring (PPMS)",
          "Pump/valve assemblies, seals, gearboxes, couplings",
          "Sensors, transmitters, panels, MCC/PLC upgrades",
        ]}
      />
    </>
  );
}
