import { Sparkles } from "lucide-react";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { box: "h-7 w-7", text: "text-base", icon: 14 },
    md: { box: "h-9 w-9", text: "text-lg", icon: 18 },
    lg: { box: "h-12 w-12", text: "text-2xl", icon: 24 },
  }[size];

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${sizes.box} relative grid place-items-center rounded-xl text-primary-foreground glow`}
        style={{ background: "var(--gradient-primary)" }}
      >
        <Sparkles size={sizes.icon} strokeWidth={2.5} />
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${sizes.text} font-semibold tracking-tight font-[var(--font-display)]`}>
          FaceFlow <span className="gradient-text">AI</span>
        </span>
      </div>
    </div>
  );
}
