import { Header } from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Quote } from "lucide-react";

const featuredRecipes = [
  {
    id: "1",
    title: "Bowl Buddha aux Légumes Rôtis",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3",
    prepTime: "30 min",
    description: "Un bowl nourrissant et coloré, rempli de légumes rôtis, de quinoa et d'une sauce tahini crémeuse."
  },
  {
    id: "2",
    title: "Curry de Pois Chiches",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-4.0.3",
    prepTime: "45 min",
    description: "Un curry réconfortant aux pois chiches et légumes, parfumé aux épices indiennes."
  },
  {
    id: "3",
    title: "Salade de Quinoa Printanière",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3",
    prepTime: "20 min",
    description: "Une salade fraîche et légère, parfaite pour les beaux jours."
  }
];

const testimonials = [
  {
    id: 1,
    content: "Grâce aux recettes de Jade, j'ai enfin osé me lancer dans la cuisine végane. Ses astuces et son humour rendent tout tellement plus simple !",
    author: "Marie L."
  },
  {
    id: 2,
    content: "Je ne pensais pas qu'on pouvait manger aussi bien en étant végan. Les recettes sont délicieuses et faciles à suivre.",
    author: "Thomas R."
  }
];

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Merci de m'avoir contactée. Je vous répondrai dès que possible.",
    });
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-sage/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-cream">
              <Avatar className="w-full h-full">
                <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="font-outfit font-semibold text-4xl md:text-5xl mb-4">
                Bienvenue dans ma cuisine végane !
              </h1>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Moi c'est Jade, 25 ans, cheffe passionnée et un brin maladroite ! 
                Née dans une famille de restaurateurs, j'ai grandi entre les fourneaux 
                de ma grand-mère et les herbes aromatiques de mon balcon-jungle urbain.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Aujourd'hui, je réinvente la cuisine traditionnelle en version végane, 
                avec une touche de créativité et beaucoup d'amour. Parce que oui, on peut 
                être végan et gourmand ! Même si parfois, ça ne se passe pas exactement 
                comme prévu... 😅
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-outfit font-medium text-2xl mb-4">Mon Histoire</h2>
          <p className="text-neutral-600 mb-6">
            De la cuisine traditionnelle française au véganisme, mon parcours a été guidé 
            par l'envie de cuisiner de façon plus responsable, sans jamais sacrifier le goût. 
            Je partage ici mes succès (et mes ratés !) pour vous montrer qu'une cuisine 
            éthique et savoureuse est à la portée de tous.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-cream/50 p-6 rounded-lg">
              <h3 className="font-outfit font-medium mb-2">Créativité</h3>
              <p className="text-sm text-neutral-600">Des recettes traditionnelles revisitées avec une touche d'originalité</p>
            </div>
            <div className="bg-cream/50 p-6 rounded-lg">
              <h3 className="font-outfit font-medium mb-2">Simplicité</h3>
              <p className="text-sm text-neutral-600">Des instructions claires et des astuces pour réussir à coup sûr</p>
            </div>
            <div className="bg-cream/50 p-6 rounded-lg">
              <h3 className="font-outfit font-medium mb-2">Authenticité</h3>
              <p className="text-sm text-neutral-600">Des expériences partagées en toute transparence, succès comme échecs</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="font-outfit font-medium text-2xl mb-6 text-center">Pourquoi la Cuisine Végane ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-outfit font-medium text-xl mb-3">Pour les Débutants</h3>
              <p className="text-neutral-600 mb-4">
                Vous pensez que la cuisine végane est compliquée ? Détrompez-vous ! 
                Je vous guide pas à pas avec des recettes simples et des ingrédients faciles à trouver.
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li>Des alternatives simples aux plats traditionnels</li>
                <li>Des astuces pour remplacer les produits animaux</li>
                <li>Des menus équilibrés et gourmands</li>
              </ul>
            </div>
            <div>
              <h3 className="font-outfit font-medium text-xl mb-3">Pour les Curieux</h3>
              <p className="text-neutral-600 mb-4">
                Envie de découvrir de nouvelles saveurs ? La cuisine végane ouvre un monde 
                de possibilités créatives et délicieuses !
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li>Des recettes du monde entier naturellement véganes</li>
                <li>Des associations surprenantes et savoureuses</li>
                <li>Des desserts gourmands sans produits animaux</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-outfit font-medium text-2xl mb-8 text-center">Mes Dernières Créations</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </section>

        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="font-outfit font-medium text-2xl mb-6 text-center">Petites Anecdotes de Cuisine</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg">
              <Quote className="h-8 w-8 text-sage mb-4" />
              <p className="text-neutral-600 mb-4">
                "Mon premier gâteau végan ? Un véritable désastre ! J'avais remplacé les œufs 
                par trop de compote de pommes... Résultat : un gâteau qui ressemblait plus à 
                une soupe ! Aujourd'hui, je maîtrise parfaitement les proportions, et je peux 
                vous dire que mes gâteaux font l'unanimité, même auprès des plus sceptiques !"
              </p>
              <p className="text-sm text-neutral-500 italic">- Une histoire de persévérance</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Quote className="h-8 w-8 text-sage mb-4" />
              <p className="text-neutral-600 mb-4">
                "Ma grand-mère était dubitative quand je lui ai dit que j'allais transformer 
                sa recette de blanquette en version végane. Mais quand elle a goûté ma version 
                aux champignons et protéines de soja, elle m'a demandé la recette ! C'est ma 
                plus belle victoire."
              </p>
              <p className="text-sm text-neutral-500 italic">- La conversion de Mamie</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="font-outfit font-medium text-2xl mb-6 text-center">Ce que vous en pensez</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-cream/30 p-6 rounded-lg">
                <p className="text-neutral-600 mb-4 italic">"{testimonial.content}"</p>
                <p className="text-sm text-neutral-500 font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-xl mx-auto">
          <h2 className="font-outfit font-medium text-2xl mb-6 text-center">Me Contacter</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-600 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-600 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message..."
                className="min-h-[150px]"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-neutral text-white hover:bg-neutral/90">
              Envoyer
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Index;
