import { Quote } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section className="bg-sage/20 py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-outfit font-semibold text-3xl md:text-4xl mb-12 text-center">
          Ce que vous en pensez
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-cream/50 p-6 rounded-xl relative">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-neutral opacity-20" />
            <p className="text-neutral-600 mb-4">
              "Les recettes de Jade m'ont fait découvrir que la cuisine végane pouvait être simple et délicieuse. Un vrai changement dans ma façon de cuisiner !"
            </p>
            <p className="font-medium">Marie L.</p>
          </div>
          <div className="bg-cream/50 p-6 rounded-xl relative">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-neutral opacity-20" />
            <p className="text-neutral-600 mb-4">
              "Grâce à ce blog, j'ai appris à cuisiner végane sans me prendre la tête. Les recettes sont faciles à suivre et les résultats toujours au top !"
            </p>
            <p className="font-medium">Thomas R.</p>
          </div>
        </div>
      </div>
    </section>
  );
};