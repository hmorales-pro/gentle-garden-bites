import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-cream/50 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-outfit font-medium text-lg mb-4">Navigation</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-neutral-600 hover:text-neutral-800">Accueil</Link>
              <Link to="/recettes" className="block text-neutral-600 hover:text-neutral-800">Recettes</Link>
              <Link to="/about" className="block text-neutral-600 hover:text-neutral-800">À Propos</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-outfit font-medium text-lg mb-4">Contact</h3>
            <p className="text-neutral-600">contact@lesrecettesdejade.fr</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-800">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-800">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-800">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-outfit font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-neutral-600 mb-4">
              Recevez mes dernières recettes et astuces directement dans votre boîte mail !
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              />
              <button
                type="submit"
                className="w-full bg-neutral text-white px-4 py-2 rounded-lg hover:bg-neutral/90 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-200 text-center text-neutral-600">
          <p>&copy; 2024 Les Recettes de Jade. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};