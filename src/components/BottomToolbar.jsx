import { Wand2, FlaskConical, Broom, Castle, Trophy, Mail, Sword, Shield, ScrollText } from "lucide-react";

const tools = [
  { label: "Spells", icon: Wand2 },
  { label: "Potions", icon: FlaskConical },
  { label: "Brooms", icon: Broom },
  { label: "Manors", icon: Castle },
  { label: "Trophies", icon: Trophy },
  { label: "Owl Post", icon: Mail },
  { label: "Sword", icon: Sword },
  { label: "Shield", icon: Shield },
  { label: "Quests", icon: ScrollText },
];

export default function BottomToolbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 pb-5">
        <div className="mx-auto bg-slate-900/70 backdrop-blur border border-white/10 rounded-2xl shadow-2xl flex items-center justify-between px-3 sm:px-6 py-2">
          {tools.map(({ label, icon: Icon }) => (
            <button key={label} className="group flex flex-col items-center gap-1 py-2 px-2 sm:px-3 text-slate-200 hover:text-amber-200 transition-colors">
              <div className="relative">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow" />
                <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 bg-amber-400/30 transition-opacity" />
              </div>
              <span className="text-[10px] sm:text-xs opacity-80">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
