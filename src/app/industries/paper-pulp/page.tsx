import type { Metadata } from "next";
import IndustryLayout from "../_components/IndustryLayout";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Paper & Pulp | Pawanssiddhi",
  description:
    "Equipment, spares and optimization solutions for paper mills.",
  alternates: { canonical: "https://pawanssiddhi.in/industries/paper-pulp" },
  openGraph: { url: "https://pawanssiddhi.in/industries/paper-pulp" },
};

export default function Page() {
  return (
    <IndustryLayout
      title="Paper & Pulp"
      subtitle="Reduce breaks, improve quality, and cut energy consumption."
      Icon={FileText}
      heroPoints={["Wet end to winder coverage", "Downtime reduction"]}
      offerings={[
        "Stock preparation, approach flow & headbox tuning",
        "Vacuum systems, felt/press section upgrades",
        "Drives & controls modernization, machine safety",
        "Steam & condensate audits, heat recovery",
      ]}
      products={[
        "Felts, wires, doctor blades, guide rolls",
        "Vacuum pumps, seals, bearings",
        "Consistency, basis weight, moisture sensors",
        "Steam traps, control valves, condensate equipment",
      ]}
    />
  );
}
