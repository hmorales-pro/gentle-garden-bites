import { Menu, X, ChefHat } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-2xl font-outfit font-semibold text-neutral-800">
              <ChefHat className="h-8 w-8 text-neutral-800" />
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
            <div className="fixed inset-0 bg-sage/95 backdrop-blur-sm z-40 md:hidden">
              <div className="relative h-full">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 p-2"
                  aria-label="Fermer le menu"
                >
                  <X className="h-6 w-6 text-neutral-800" />
                </button>
                <div className="flex flex-col justify-center h-full px-4">
                  <nav className="flex flex-col space-y-8">
                    <Link 
                      to="/" 
                      className="text-2xl text-neutral-800 hover:text-neutral-600 transition-colors text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Accueil
                    </Link>
                    <Link 
                      to="/recettes" 
                      className="text-2xl text-neutral-800 hover:text-neutral-600 transition-colors text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Recettes
                    </Link>
                    <Link 
                      to="/about" 
                      className="text-2xl text-neutral-800 hover:text-neutral-600 transition-colors text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      À Propos
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="h-16"></div>
    </>
  );
};