import { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import Scene from './components/Scene';
import BottomToolbar from './components/BottomToolbar';
import Mascots from './components/Mascots';

function App() {
  const [mode, setMode] = useState('golden'); // golden | night | rain | empty | full | world

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <HeaderNav mode={mode} setMode={setMode} />
      <main className="pt-24">
        <Hero mode={mode} />
        <Scene mode={mode} />
      </main>
      <Mascots />
      <BottomToolbar />
    </div>
  )
}

export default App