import { motion } from "framer-motion";

function Plot({ x, y, scale = 1, glow = false }) {
  return (
    <motion.div
      className={`absolute rounded-xl bg-amber-300/15 border border-amber-400/30 shadow-2xl ${
        glow ? "shadow-[0_0_30px_rgba(251,191,36,0.5)]" : ""
      }`}
      style={{ left: `${x}%`, top: `${y}%`, width: 90 * scale, height: 60 * scale }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -6, 0], opacity: 1 }}
      transition={{ duration: 2.8 + Math.random(), repeat: Infinity }}
    />
  );
}

export default function Scene({ mode }) {
  const empty = mode === "empty";
  const full = mode === "full" || mode === "world";

  return (
    <div className="relative max-w-7xl mx-auto px-4 pt-6 pb-28">
      {/* Board card */}
      <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.08),_transparent_60%)]" />
        <div className="relative h-[480px] sm:h-[560px]">
          {/* Empty hint */}
          {empty && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-slate-200">
                <div className="text-2xl font-semibold mb-2">Empty Board</div>
                <div className="text-slate-300/80">Select your first Enchanted Plot to place it.</div>
              </div>
            </div>
          )}

          {/* Plots */}
          {!empty && (
            <>
              {Array.from({ length: full ? 120 : 18 }).map((_, i) => (
                <Plot
                  key={i}
                  x={6 + (i * 7) % 86}
                  y={8 + ((i * 9) % 70)}
                  scale={full ? 0.7 : 1}
                  glow={i % 10 === 0}
                />
              ))}
            </>
          )}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        {["Mana", "Essence", "Relics", "Owls"].map((stat, idx) => (
          <div key={stat} className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
            <div className="text-slate-300 text-xs">{stat}</div>
            <div className="text-amber-200 text-xl font-semibold">{Math.floor(1000 + idx * 37)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
