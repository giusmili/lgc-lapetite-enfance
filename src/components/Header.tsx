import { Search, User } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const navItems = [
    "Actus",
    "Petite Enfance",
    "Formation",
    "Réglementation",
    "Pratiques professionnels",
    "Parents",
    "Éveil",
    "Pédagogie",
  ];

  return (
    <header className="border-b">
      {/* Top bar */}
      <div className="bg-[#F7F7F7] px-4 py-2">
        <div className="max-w-7xl mx-auto flex gap-6 text-sm">
          <a href="#" className="text-[#555555] hover:text-[#5CC370] transition">
            Emploi
          </a>
          <a href="#" className="text-[#555555] hover:text-[#5CC370] transition">
            S'inscrire à la newsletter
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-['Poppins']">
              <span className="text-[#5CC370]">La grande classe</span>
              <span className="text-[#222222]"> la petite enfance</span>
            </h1>
          </div>

          {/* Right section */}
        
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-3 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <ul className="flex items-center gap-8 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[#555555] hover:text-[#5CC370] transition whitespace-nowrap font-['Open Sans']"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
