import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Star } from "lucide-react";

const fetchLatestTips = async () => {
  const { data, error } = await supabase
    .from('tips')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) throw error;
  return data;
};

export const TipsSection = () => {
  const { data: tips, isLoading } = useQuery({
    queryKey: ['latest-tips'],
    queryFn: fetchLatestTips,
  });

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-outfit font-semibold text-3xl md:text-4xl mb-8 text-center">
          Le Saviez-Vous ?
        </h2>
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-48 bg-neutral-100 animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tips?.map((tip) => (
              <div key={tip.id} className="bg-cream/50 p-6 rounded-lg relative">
                <Star className="absolute top-4 right-4 h-6 w-6 text-neutral opacity-20" />
                <h3 className="font-medium text-xl mb-3">{tip.title}</h3>
                <p className="text-neutral-600">{tip.content}</p>
                {tip.image && (
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="mt-4 rounded-lg w-full h-32 object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};