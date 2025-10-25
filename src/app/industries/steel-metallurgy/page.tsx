import type { Metadata } from "next";
import IndustryLayout from "../_components/IndustryLayout";
import { Cog } from "lucide-react";

export const metadata: Metadata = {
  title: "Steel & Metallurgy | Pawanssiddhi",
  description:
    "Engineered products and solutions for steel making and rolling mills.",
  alternates: { canonical: "https://pawanssiddhi.in/industries/steel-metallurgy" },
  openGraph: { url: "https://pawanssiddhi.in/industries/steel-metallurgy" },
};

export default function Page() {
  return (
    <IndustryLayout
      title="Steel & Metallurgy"
      subtitle="From melt shop to finishing—reliability where it matters."
      Icon={Cog}
      heroPoints={[
        "Hot/cold rolling line support",
        "Water/oil hydraulics and drives",
      ]}
      offerings={[
        "Revamps for run-out tables, coilers, shears & straighteners",
        "Hydraulic power packs, seals, cylinders & filtration",
        "Cooling water systems, scale pits, pumps & valves",
        "Automation upgrades: PLC/SCADA, drives, encoders",
      ]}
      products={[
        "Rolls, bearings, guides, pinch rolls, quick-change couplings",
        "Hydraulic components, hoses, manifolds, accumulators",
        "Temperature/IR sensors, encoders, proximity switches",
        "Lubricants, MQL systems, spray nozzles",
      ]}
    />
  );
}
