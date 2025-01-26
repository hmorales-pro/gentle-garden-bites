import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-outfit font-semibold text-neutral-800">
              Les Recettes de Jade
            </Link>
            
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6 text-neutral-800" />
            </button>

            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-neutral-600 hover:text-neutral-800 transition-colors">
                Accueil
              </Link>
              <Link to="/recettes" className="text-neutral-600 hover:text-neutral-800 transition-colors">
                Recettes
              </Link>
              <Link to="/about" className="text-neutral-600 hover:text-neutral-800 transition-colors">
                À Propos
              </Link>
            </nav>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link 
                  to="/recettes" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Recettes
                </Link>
                <Link 
                  to="/about" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  À Propos
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* Spacer div to prevent content from being hidden under fixed header */}
      <div className="h-16"></div>
    </>
  );
};