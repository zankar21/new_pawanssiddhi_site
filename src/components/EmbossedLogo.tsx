import React from "react";

/**
 * Embossed/Pressed logo with alpha mask.
 * Use variant="pressed" + darkness=3 for ultra-dark engraved look.
 */
export default function EmbossedLogo({
  src = "/logo-psspl.svg",
  width = 220,
  height = 80,
  className = "h-10 md:h-11 w-auto",
  variant = "pressed",                 // debossed reads darker
  darkness = 3,                        // 1..3 (3 = darkest)
}: {
  src?: string;
  width?: number;
  height?: number;
  className?: string;
  variant?: "raised" | "pressed";
  darkness?: 1 | 2 | 3;
}) {
  const uid = Math.random().toString(36).slice(2);
  const maskId = `mask-alpha-${uid}`;
  const filterId = `emboss-${uid}`;
  const gradId = `grad-dark-${uid}`;

  // Light direction
  const light = variant === "pressed"
    ? { x: 150, y: 150, z: 110 }     // pressed: light bottom-right
    : { x: -120, y: -105, z: 120 };

  // Gradient + shading strength by darkness level
  const palettes = {
    1: ["#595959", "#353535", "#5f5f5f"],
    2: ["#4a4a4a", "#242424", "#505050"],
    3: ["#2f2f2f", "#111111", "#3a3a3a"], // darkest
  } as const;
  const [g0, g1, g2] = palettes[darkness];

  const innerShadowColor = darkness === 3 ? "rgba(0,0,0,0.9)" : darkness === 2 ? "rgba(0,0,0,0.82)" : "rgba(0,0,0,0.75)";
  const specularConstant = darkness === 3 ? 0.35 : darkness === 2 ? 0.45 : 0.55; // less shine = darker feel
  const specularExponent = darkness === 3 ? 18 : 20;
  const surfaceScale     = darkness === 3 ? 4.2 : 3.6;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Company logo"
    >
      <defs>
        {/* Alpha mask so black logos still work */}
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" } as React.CSSProperties}
        >
          <image href={src} x="0" y="0" width={width} height={height} preserveAspectRatio="xMinYMin meet" />
        </mask>

        {/* Dark metallic gradient */}
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor={g0} />
          <stop offset="45%" stopColor={g1} />
          <stop offset="85%" stopColor={g2} />
        </linearGradient>

        {/* Emboss / inner shadow */}
        <filter id={filterId} filterUnits="userSpaceOnUse">
          {/* smooth alpha for lighting */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.0" result="a_blur" />
          {/* subtle specular highlight */}
          <feSpecularLighting
            in="a_blur"
            surfaceScale={surfaceScale}
            specularConstant={specularConstant}
            specularExponent={specularExponent}
            lightingColor="#ffffff"
            result="spec"
          >
            <fePointLight x={light.x} y={light.y} z={light.z} />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
          {/* stronger inner shadow for depth */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.1" result="i_blur" />
          <feOffset dx={variant === "pressed" ? -1.1 : 1.1} dy={variant === "pressed" ? -1.1 : 1.1} result="i_off" />
          <feFlood floodColor={innerShadowColor} result="i_color" />
          <feComposite in="i_color" in2="i_off" operator="in" result="i_shadow" />
          <feMerge>
            <feMergeNode in="i_shadow" />
            <feMergeNode in="specOut" />
          </feMerge>
        </filter>
      </defs>

      {/* Colorized logo + emboss */}
      <g mask={`url(#${maskId})`} filter={`url(#${filterId})`}>
        <rect x="0" y="0" width={width} height={height} fill={`url(#${gradId})`} />
      </g>
    </svg>
  );
}
