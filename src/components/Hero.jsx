import { motion } from "framer-motion";

export default function Hero({ mode }) {
  const title = "WIZARDING REALMS - GENESIS";

  const bgByMode = {
    golden:
      "from-amber-900 via-slate-900 to-slate-950 bg-[url('https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=2000&auto=format&fit=crop')]",
    night:
      "from-indigo-900 via-slate-950 to-black bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop')]",
    rain:
      "from-slate-800 via-slate-900 to-black bg-[url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000&auto=format&fit=crop')]",
    empty:
      "from-slate-900 via-slate-900 to-slate-950 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.08),_transparent_60%)]",
    full:
      "from-amber-900 via-slate-900 to-black bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop')]",
    world:
      "from-slate-900 via-slate-800 to-black bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop')]",
  };

  return (
    <div
      className={`relative min-h-[70vh] lg:min-h-[78vh] bg-cover bg-center bg-no-repeat ${bgByMode[mode]}`}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-amber-300/70 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -30 - Math.random() * 40],
              x: [0, (Math.random() - 0.5) * 60],
              scale: [0.5, 1, 0.5],
            }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: `${20 + Math.random() * 60}%`, left: `${10 + Math.random() * 80}%` }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 drop-shadow-[0_0_25px_rgba(251,191,36,0.35)]"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-amber-100/80 max-w-3xl mx-auto"
        >
          A cinematic, playful dashboard inspired by Pawtato Land — rethemed in dark academia magic.
        </motion.p>
      </div>

      {/* Floating castle shards */}
      <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-16 bg-amber-200/10 border border-amber-400/20 rounded-md rotate-[-6deg] backdrop-blur-sm"
            style={{ left: `${5 + i * 12}%`, bottom: `${10 + (i % 3) * 8}%` }}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3 + (i % 5), repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}
