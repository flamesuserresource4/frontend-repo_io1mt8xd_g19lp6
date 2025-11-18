import { ChevronDown, Wallet, ExternalLink, Shield, Crown } from "lucide-react";
import { useMemo } from "react";

export default function HeaderNav({ mode, setMode }) {
  const wallet = useMemo(() => {
    // Fake short address for demo
    return "0xA9...7D3";
  }, []);

  const modes = [
    { key: "golden", label: "Golden Hour" },
    { key: "night", label: "Night" },
    { key: "rain", label: "Rainy" },
    { key: "empty", label: "Empty Board" },
    { key: "full", label: "Full Board" },
    { key: "world", label: "World Map" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      {/* Top banner */}
      <div className="w-full bg-amber-500/10 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-amber-400/20 text-amber-200 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-200/90">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-[11px] uppercase tracking-wider">Live</span>
            <span className="font-medium">REALM IS LIVE →</span>
            <a href="#" className="inline-flex items-center gap-1 hover:text-amber-100 transition-colors">
              Trade on Magic Eden <ExternalLink size={14} />
            </a>
          </div>
          <div className="flex items-center gap-3 text-amber-100/80">
            <span className="hidden sm:flex items-center gap-2 text-amber-200/90">
              <Shield size={16} className="opacity-80" />
              <span className="text-xs">House</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-400/30 text-xs">Ravencrest</span>
            </span>
            <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-400/30">
              <Wallet size={16} />
              <span className="text-xs font-mono">{wallet}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="w-full bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-amber-200">
              <Crown className="text-amber-400 drop-shadow" size={20} />
              <span className="text-sm font-semibold tracking-wide">WIZARDING REALMS</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-slate-200">
              <a className="hover:text-white transition-colors text-sm" href="#">PLAY</a>
              <a className="hover:text-white transition-colors text-sm" href="#">HERO MINT</a>
              <div className="relative group">
                <button className="inline-flex items-center gap-1 hover:text-white transition-colors text-sm">
                  LANDS <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-slate-800/90 border border-white/10 rounded-lg p-2 min-w-[180px]">
                  <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-white/5">My Plots</a>
                  <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-white/5">Buy Land</a>
                  <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-white/5">Auctions</a>
                </div>
              </div>
              <a className="hover:text-white transition-colors text-sm" href="#">ROADMAP</a>
              <a className="hover:text-white transition-colors text-sm" href="#">RESOURCE POOLS</a>
              <a className="hover:text-white transition-colors text-sm" href="#">MARKET</a>
              <a className="hover:text-white transition-colors text-sm" href="#">STATS</a>
            </nav>
          </div>

          {/* Mode switcher */}
          <div className="flex items-center gap-2">
            {modes.map((m) => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                className={`hidden lg:inline-flex items-center px-3 py-1.5 rounded-md text-xs border transition-all ${
                  mode === m.key
                    ? "bg-amber-500/20 text-amber-100 border-amber-400/40"
                    : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
