"use client";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Dossier {
  id: number;
  title: string;
  imageUrl: string;
}

interface DossiersSectionProps {
  dossiers: Dossier[];
}

export function DossiersSection({ dossiers }: DossiersSectionProps) {
  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-['Poppins'] text-[#222222] mb-8">
          Dossiers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {dossiers.map((dossier) => (
            <div
              key={dossier.id}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-lg overflow-hidden mb-3">
                <ImageWithFallback
                  src={dossier.imageUrl}
                  alt={dossier.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-center font-['Poppins'] text-[#222222] group-hover:text-[#5CC370] transition">
                {dossier.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
