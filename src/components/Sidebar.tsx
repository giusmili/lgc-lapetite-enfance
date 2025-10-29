import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Play } from 'lucide-react';
import { Button } from './ui/button';

interface NewsItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface AgendaItem {
  id: number;
  date: string;
  title: string;
}

interface PodcastItem {
  id: number;
  title: string;
}

interface SidebarProps {
  newsItems: NewsItem[];
  agendaItems: AgendaItem[];
  podcasts: PodcastItem[];
}

export function Sidebar({ newsItems, agendaItems, podcasts }: SidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Actualités */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-['Poppins'] text-[#222222] mb-4 border-b pb-2">
          Actualités
        </h3>
        <div className="space-y-4">
          {newsItems.map((item) => (
            <div key={item.id} className="flex gap-3 cursor-pointer group">
              <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <p className="text-sm font-['Open_Sans'] text-[#555555] group-hover:text-[#5CC370] transition line-clamp-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Revue de presse / Abonnement */}
      <div className="hidden">
        <h3 className="text-xl font-['Poppins'] text-[#222222] mb-3">
          Revue de presse
        </h3>
        <p className="text-[#222222] font-['Open_Sans'] mb-4 text-sm">
          Accédez à tous nos contenus premium
        </p>
        <Button className="bg-[#222222] text-white hover:bg-[#333333] w-full font-['Poppins']">
          Je m'abonne !
        </Button>
      </div>

      {/* Agenda */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-['Poppins'] text-[#222222] mb-4 border-b pb-2 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#5CC370]" />
          Agenda
        </h3>
        <div className="space-y-3">
          {agendaItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 items-start cursor-pointer group"
            >
              <div className="bg-[#5CC370] text-white rounded px-2 py-1 text-sm font-['Poppins'] flex-shrink-0">
                {item.date}
              </div>
              <p className="text-sm font-['Open_Sans'] text-[#555555] group-hover:text-[#5CC370] transition">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Podcasts */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-['Poppins'] text-[#222222] mb-4 border-b pb-2">
          Podcasts
        </h3>
        <div className="space-y-4">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="flex gap-3 items-center cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full bg-[#5CC370] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4fb360] transition">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
              <p className="text-sm font-['Open_Sans'] text-[#555555] group-hover:text-[#5CC370] transition">
                {podcast.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
