import type { Metadata } from "next";
import IndustryLayout from "../_components/IndustryLayout";
import { Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Automotive & Engineering | Pawanssiddhi",
  description:
    "Precision hardware, maintenance products and modernization solutions for auto factories.",
  alternates: {
    canonical: "https://pawanssiddhi.in/industries/automotive-engineering",
  },
  openGraph: { url: "https://pawanssiddhi.in/industries/automotive-engineering" },
};

export default function Page() {
  return (
    <IndustryLayout
      title="Automotive & Engineering"
      subtitle="Lean, reliable, and digitized shop floors."
      Icon={Car}
      heroPoints={["TPM/Kaizen support", "Digital maintenance (PPMS)"]}
      offerings={[
        "Assembly line upgrades, conveyors, jigs & fixtures",
        "Compressed air, chillers, cooling towers & utilities",
        "Predictive maintenance kits and CM dashboards",
        "ESD & tool management, torque control solutions",
      ]}
      products={[
        "Bearings, belts, couplings, fasteners",
        "Sensors, barcode/RFID, HMI/PLCs, VFDs",
        "Sealants, adhesives, lubricants & chemicals",
        "IIoT gateways and condition monitoring nodes",
      ]}
    />
  );
}
