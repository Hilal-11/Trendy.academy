import { useState, useRef, useCallback } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
};

function useParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const idRef = useRef(0);

  const burst = useCallback((originX: number, originY: number) => {
    const colors = ["#fb923c", "#fbbf24", "#f97316", "#fff7ed", "#fdba74"];
    const newParticles: Particle[] = Array.from({ length: 18 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.5 + Math.random() * 4;
      return {
        id: idRef.current++,
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 5,
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });
    setParticles((p) => [...p, ...newParticles]);

    let frame = 0;
    const animate = () => {
      frame++;
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.18,
            opacity: p.opacity - 0.035,
          }))
          .filter((p) => p.opacity > 0)
      );
      if (frame < 40) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return { particles, burst };
}

export default function TrendyButton({ buttonContent, buttonLink }: { buttonContent?: string; buttonLink?: string }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [shimmer, setShimmer] = useState(false);
  const [magnetOffset, setMagnetOffset] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);
  const { particles, burst } = useParticles();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = btnRef.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.18;
    const dy = (e.clientY - cy) * 0.22;
    setMagnetOffset({ x: dx, y: dy });
  };

  const handleMouseEnter = () => {
    setHovered(true);
    setShimmer(true);
    setTimeout(() => setShimmer(false), 700);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setPressed(false);
    setMagnetOffset({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = btnRef.current!.getBoundingClientRect();
    burst(e.clientX - rect.left, e.clientY - rect.top);
    setPressed(true);
    setTimeout(() => setPressed(false), 150);
  };

  const transform = [
    `translate(${magnetOffset.x}px, ${magnetOffset.y}px)`,
    pressed ? "scale(0.95)" : hovered ? "scale(1.0)" : "scale(1)",
  ].join(" ");

  return (
    <div className="relative -top-10"
      style={{
        minHeight: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        borderRadius: "16px",
        padding: "3rem 2rem",
        fontFamily: "'Sora', 'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600&display=swap');

        @keyframes shimmer-sweep {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(250%) skewX(-15deg); }
        }
        @keyframes ring-pulse {
          0% { opacity: 0.7; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.55); }
        }
        @keyframes icon-slide {
          0% { transform: translateX(0); opacity: 1; }
          40% { transform: translateX(6px); opacity: 0; }
          41% { transform: translateX(-6px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .shimmer-active {
          animation: shimmer-sweep 0.65s ease forwards;
        }
        .ring-anim {
          animation: ring-pulse 0.9s ease-out forwards;
        }
        .btn-icon-hovered {
          animation: icon-slide 0.55s ease forwards;
        }
      `}</style>

      {/* Particle layer */}
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        {/* Glow halo */}
        <div
          style={{
            position: "absolute",
            inset: "-8px",
            borderRadius: "999px",
            background: hovered
              ? "radial-gradient(ellipse at center, rgba(251,146,60,0.35) 0%, transparent 70%)"
              : "transparent",
            transition: "background 0.4s ease",
            pointerEvents: "none",
            filter: "blur(8px)",
          }}
        />

        <button
          ref={btnRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 32px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            outline: "none",
            overflow: "hidden",
            background: hovered
              ? "linear-gradient(135deg, #E8480A 0%, #fb923c 50%, #E8480A 100%)"
              : "linear-gradient(135deg, #ea6c10 0%, #E8480A 60%, #E8480A 100%)",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "0.025em",
            fontFamily: "'Sora', sans-serif",
            transform,
            transition:
              "transform 0.2s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease, box-shadow 0.3s ease",
            boxShadow: hovered
              ? "0 8px 32px rgba(249,115,22,0.55), 0 2px 8px rgba(249,115,22,0.3)"
              : "0 4px 16px rgba(249,115,22,0.3)",
            WebkitFontSmoothing: "antialiased",
          }}
        >

          {/* Inner gloss */}
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "50%",
              borderRadius: "999px 999px 0 0",
              background: "rgba(255,255,255,0.12)",
              pointerEvents: "none",
            }}
          />

          <span style={{ position: "relative", zIndex: 1 }}>
            { buttonContent || "Explore Courses"}
          </span>

          {/* Arrow icon */}
          <span
            className={hovered ? "btn-icon-hovered" : ""}
            style={{
              position: "relative",
              zIndex: 1,
              display: "inline-flex",
              alignItems: "center",
              fontSize: "18px",
              transition: "transform 0.3s ease",
            }}
          >
            →
          </span>

          {/* Particle canvas */}
          {particles.map((p) => (
            <span
              key={p.id}
              style={{
                position: "absolute",
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                background: p.color,
                opacity: p.opacity,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 10,
              }}
            />
          ))}
        </button>
      </div>
    </div>
  );
}