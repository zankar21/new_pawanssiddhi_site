import type { Metadata } from "next";
import IndustryLayout from "../_components/IndustryLayout";
import { FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Chemical & Fertilizers | Pawanssiddhi",
  description:
    "Critical supplies and automation for reliable chemical and fertilizer operations.",
  alternates: { canonical: "https://pawanssiddhi.in/industries/chemical-fertilizers" },
  openGraph: { url: "https://pawanssiddhi.in/industries/chemical-fertilizers" },
};

export default function Page() {
  return (
    <IndustryLayout
      title="Chemical & Fertilizers"
      subtitle="Process reliability, safety compliance, and emission control."
      Icon={FlaskConical}
      heroPoints={["Corrosion-resistant materials", "Precise metering & control"]}
      offerings={[
        "Process instrumentation: pressure, flow, level, pH, ORP, conductivity",
        "Dosing skids & chemical transfer packages",
        "Valve automation, actuators, positioners & control valves",
        "ESD/SIS panels and hazardous-area solutions",
      ]}
      products={[
        "PTFE/FRP lined pipes, valves & fittings",
        "Metering pumps, flowmeters, analyzers",
        "Gas detection, flame & smoke systems",
        "Field junction boxes, cables, glands",
      ]}
    />
  );
}
