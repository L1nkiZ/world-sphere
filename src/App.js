import { useState } from "react";
import "./App.css";

function App() {
  const { isMenuOpen, setIsMenuOpen } = useState(false);

  return (
    <div className="relative bg-black min-h-screen text-white">
      <div className="top-[5%] md:top-[10%] left-[-10%] absolute bg-green-400/20 blur-[120px] rounded-full w-[60%] md:w-[40%] h-[40%] pointer-events-none ambient-light" />
      <div className="top-[20%] md:top-[30%] right-[10%] absolute bg-blue-400/20 blur-[100px] rounded-full w-[40%] md:w-[30%] h-[30%] pointer-events-none ambient-light" />
      <div className="bottom-[10%] md:bottom-[20%] left-[50%] md:left-[20%] absolute bg-purple-400/20 blur-[150px] rounded-full w-[35%] md:w-[25%] h-[25%] pointer-events-none ambient-light" />
    </div>
  );
}

export default App;
