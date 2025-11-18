import { motion } from "framer-motion";

export default function Mascots() {
  return (
    <div className="pointer-events-none fixed inset-y-20 left-2 right-2 sm:left-6 sm:right-6 z-30">
      {/* Hedwig */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-20 left-0"
      >
        <div className="bg-white/80 rounded-2xl shadow-xl border border-white/60 p-2">
          <img
            src="https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=400&auto=format&fit=crop"
            alt="Hedwig"
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div className="text-[10px] text-slate-700 text-center mt-1 font-semibold">Hedwig</div>
        </div>
      </motion.div>

      {/* Norbert */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-24 right-0"
      >
        <div className="bg-emerald-400/20 rounded-2xl shadow-xl border border-emerald-400/40 p-2 backdrop-blur">
          <img
            src="https://images.unsplash.com/photo-1618221263206-29bb8b87107f?q=80&w=400&auto=format&fit=crop"
            alt="Norbert"
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div className="text-[10px] text-emerald-100 text-center mt-1 font-semibold">Norbert</div>
        </div>
      </motion.div>
    </div>
  );
}
