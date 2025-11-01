"use client";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface HeroSectionProps {
  imageUrl: string;
}

export function HeroSection({ imageUrl }: HeroSectionProps) {
  return (
    <section className="section section--white section--sm">
      <div className="container">
        <div className="layout-split">
          {/* Image */}
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <ImageWithFallback
              src={imageUrl}
              alt="Halloween, c'est pas pour les petits"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-4xl font-poppins text-[#222222]">
              Halloween, c'est pas pour les petits
            </h2>
            <p className="text-[#555555] font-open-sans leading-relaxed">
              Si la fête d'Halloween plaît beaucoup aux enfants, elle peut aussi 
              être source d'angoisse pour les plus jeunes. Voici quelques conseils 
              pour adapter cette célébration aux tout-petits et préserver leur bien-être.
            </p>
            <Button className="bg-[#5CC370] text-white hover:bg-[#4fb360] rounded-lg px-8 font-poppins">
              Lire la suite
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
