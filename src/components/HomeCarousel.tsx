import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fetchCarouselImages = async () => {
  const { data, error } = await supabase
    .from('carousel_images')
    .select('*')
    .order('order_index', { ascending: true });

  if (error) throw error;
  return data;
};

export const HomeCarousel = () => {
  const { data: images, isLoading } = useQuery({
    queryKey: ['carousel-images'],
    queryFn: fetchCarouselImages,
  });

  if (isLoading) return <div className="h-[400px] bg-neutral-100 animate-pulse rounded-lg" />;

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {images?.map((image) => (
              <CarouselItem key={image.id}>
                <div className="relative aspect-[16/9]">
                  {image.image_url && (
                    <img
                      src={image.image_url.startsWith('http') ? image.image_url : `${image.image_url}`}
                      alt={image.title || 'Carousel image'}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                  {(image.title || image.description) && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white rounded-b-lg">
                      {image.title && <h3 className="text-xl font-medium">{image.title}</h3>}
                      {image.description && (
                        <p className="mt-2 text-sm">{image.description}</p>
                      )}
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};