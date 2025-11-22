
import { cn } from "@/lib/utils";

type VinylRecordProps = {
  className?: string;
};

export function VinylRecord({ className }: VinylRecordProps) {
  return (
    <div className={cn("relative aspect-square", className)}>
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full animate-[spin_8s_linear_infinite]"
        style={{ animationPlayState: "running" }}
      >
        <defs>
          <radialGradient id="vinylGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: "#333", stopOpacity: 1 }} />
            <stop offset="60%" style={{ stopColor: "#1a1a1a", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#000", stopOpacity: 1 }} />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="198" fill="url(#vinylGradient)" stroke="#111" strokeWidth="2" />
        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={50 + i * 3.7}
            fill="none"
            stroke="rgba(100, 100, 100, 0.1)"
            strokeWidth="0.75"
          />
        ))}
        <circle cx="200" cy="200" r="48" fill="hsl(var(--primary))" />
        <circle cx="200" cy="200" r="46" fill="#1a1a1a" />
         <text
          x="200"
          y="200"
          fontFamily="sans-serif"
          fontSize="28"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          dy=".3em"
          transform="rotate(90 200,200)"
          className="uppercase"
        >
          3AMΣ
        </text>
        <circle cx="200" cy="200" r="10" fill="hsl(var(--background))" />
      </svg>
    </div>
  );
}
