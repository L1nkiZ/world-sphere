//TODO: test
import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.webp";
import { Menu, X } from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#", label: "Accueil" },
    { href: "#", label: "A propos" },
  ];

  return (
    <div className="relative bg-black min-h-screen text-white">
      <div className="top-[5%] md:top-[10%] left-[-10%] absolute bg-green-400/20 blur-[120px] rounded-full w-[60%] md:w-[40%] h-[40%] pointer-events-none ambient-light" />
      <div className="top-[20%] md:top-[30%] right-[10%] absolute bg-blue-400/20 blur-[100px] rounded-full w-[40%] md:w-[30%] h-[30%] pointer-events-none ambient-light" />
      <div className="bottom-[10%] md:bottom-[20%] left-[50%] md:left-[20%] absolute bg-purple-400/20 blur-[150px] rounded-full w-[35%] md:w-[25%] h-[25%] pointer-events-none ambient-light" />

      <nav className="relative z-50 p-4">
        <div className="flex justify-between items-center mx-auto container">
          <div className="z-50 font-bold logo">
            <img src={logo} alt="logo" className="w-[150px] md:w[200px]" />
          </div>
          <button
            className="z-50 md:hidden hover:bg-gray-800 rounded-lg p-2 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={`fixed inset-0 bg-black/95 backdrop-blur-lg md-hidden transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            <div className="flex flex-col justify-center items-center space-y-8 h-full text-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-green-400 nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:flex space-x-10 hidden font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-green-400 nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="mx-auto mt-8 md:mt-16 px-4 md:px-0 container">
        <div className="flex md-flex-row flex-col">{/* Left */}</div>
        <div className="mb-8 md-mb-0 w-èfull md:w1/2">
          <div className="flex flex-col justiofy-center">
            {/* <h1 className="relative mb-4 font-bold text-4xl md-text-5xl ">
              <span className="block title-line"> Révolutionnez votre </span>
              <span className="block title-line">
                {" "}
                <span className="text-green-400">entreprise </span>{" "}
              </span>
              <span className="block title-line">avec le pouvoir</span>
              <span className="block title-line">du</span>
              <span className="block title-line">
                {" "}
                <span className="text-green-400">cloud</span>.
              </span>
            </h1> */}
            <h1 className="relative mb-4 font-bold text-4xl md:text-5xl">
              {[
                "Révolutionnez votre",
                "entreprise",
                "avec le pouvoir",
                "du",
                "cloud",
              ].map((text, index) => (
                <span key={index} className="block title-line">
                  {index === 1 || index === 4 ? (
                    <span className="text-green-400">{text}</span>
                  ) : (
                    text
                  )}
                </span>
              ))}
            </h1>

            <p className="mb-8 w-full md:w-[90%] text-gray-300 text-lg md:text-xl description">
              Des solutions cloud intelligentes et évolutives pour vous aider à
              attendre de nouvreaux sommets
            </p>

            <div className="flex md-flex-row flex-col space-y-4 md-space-x-9 md-space-y-0">
              {/* faire un input pour faire une recherche par nom de pays //TODO */}
              <button className="relative bg-green-400 hover:bg-green-600 px-6 py-2 rounded-lg w-full md:w-[200px] font-medium text-xl transition-all duration-300">
                Commencer
              </button>
              {/* centrer le glob sur ta position (utiliser truc google) //TODO*/}
              <button className="relative border-2 border-green-400 hover:bg-green-600 px-6 py-2 rounded-lg w-full md:w-[200px] font-medium text-xl transition-all duration-300">
                Contact
              </button>
            </div>
            <div className="flex md-flex-row flex-col justify-arround items-center border-[#808080] border-2 bg-[#808080]/50 backdrop-blur-xl mx-4 mt-10 mx-md-0 p-4 md:p-2 rounded-lg instructions"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
