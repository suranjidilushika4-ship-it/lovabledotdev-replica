import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Videos = () => {
  const allVideos = [
    {
      title: 'Parkettverlegung Schritt für Schritt',
      subtitle: 'Sehen Sie, wie professionell Parkett verlegt wird',
      category: 'Parkett',
      duration: '3:45',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Vinyl Bodenbelag Installation',
      subtitle: 'Moderne Techniken für Vinyl-Verlegung',
      category: 'Vinyl',
      duration: '2:30',
      thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Keramikplatten Verlegung',
      subtitle: 'Präzise Arbeit mit Stein- und Keramikplatten',
      category: 'Keramik',
      duration: '4:20',
      thumbnail: 'https://images.unsplash.com/photo-1582977999383-9c96cd049d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Teppichverlegung im Büro',
      subtitle: 'Professionelle Teppichverlegung für Geschäftsräume',
      category: 'Teppich',
      duration: '2:15',
      thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Laminat Installation Tipps',
      subtitle: 'Professionelle Techniken für perfekte Laminatverlegung',
      category: 'Laminat',
      duration: '5:10',
      thumbnail: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Kork Bodenbelag Montage',
      subtitle: 'Nachhaltige Lösungen mit natürlichem Kork',
      category: 'Kork',
      duration: '3:20',
      thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Linoleum Verarbeitung',
      subtitle: 'Hochwertige Linoleum-Installation von A bis Z',
      category: 'Linoleum',
      duration: '4:45',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Abdichtungsarbeiten',
      subtitle: 'Professionelle Silikon- und Abdichtungstechniken',
      category: 'Abdichtung',
      duration: '2:55',
      thumbnail: 'https://images.unsplash.com/photo-1582977999383-9c96cd049d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Wandschutz Systeme',
      subtitle: 'Innovative Lösungen für Wandschutz in Gewerberäumen',
      category: 'Wandschutz',
      duration: '3:30',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Reparatur Techniken',
      subtitle: 'Fachgerechte Reparatur von Bodenbelägen',
      category: 'Reparatur',
      duration: '4:15',
      thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sockel Installation',
      subtitle: 'Präzise Montage von Sockelleisten',
      category: 'Installation',
      duration: '2:40',
      thumbnail: 'https://images.unsplash.com/photo-1582977999383-9c96cd049d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Qualitätskontrolle',
      subtitle: 'Unser Prozess für perfekte Ergebnisse',
      category: 'Qualität',
      duration: '3:05',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    // Additional professional videos
    {
      title: 'Designvinyl Installation',
      subtitle: 'Moderne Designvinyl-Verlegung Schritt für Schritt',
      category: 'Vinyl',
      duration: '4:30',
      thumbnail: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Terrazzo Schleifarbeiten',
      subtitle: 'Professionelle Terrazzo-Sanierung und Politur',
      category: 'Terrazzo',
      duration: '5:45',
      thumbnail: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Naturstein Verarbeitung',
      subtitle: 'Edle Naturstein-Installation für exklusive Bereiche',
      category: 'Naturstein',
      duration: '6:20',
      thumbnail: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Epoxidharz Beschichtung',
      subtitle: 'Moderne Epoxidharz-Böden für Gewerbe und Industrie',
      category: 'Epoxid',
      duration: '4:15',
      thumbnail: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Barrierefreie Installation',
      subtitle: 'Spezielle Techniken für barrierefreie Zugänge',
      category: 'Barrierefrei',
      duration: '3:40',
      thumbnail: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Großprojekt Hotel',
      subtitle: 'Komplette Bodenbelag-Renovierung eines Hotels',
      category: 'Großprojekt',
      duration: '8:30',
      thumbnail: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sportboden Installation',
      subtitle: 'Spezielle Sportböden für Turnhallen und Fitnessstudios',
      category: 'Sport',
      duration: '5:10',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Restaurierung Altbau',
      subtitle: 'Denkmalgerechte Restaurierung historischer Böden',
      category: 'Restaurierung',
      duration: '7:25',
      thumbnail: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Wellness Bereich',
      subtitle: 'Feuchtigkeitsresistente Beläge für Spa und Wellness',
      category: 'Wellness',
      duration: '4:05',
      thumbnail: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Industrieboden Sanierung',
      subtitle: 'Komplette Sanierung von Industrieböden',
      category: 'Industrie',
      duration: '6:45',
      thumbnail: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Kundentestimonials',
      subtitle: 'Zufriedene Kunden sprechen über unsere Arbeit',
      category: 'Testimonials',
      duration: '3:15',
      thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Hauptseite
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-primary">Video Galerie</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Erleben Sie unsere professionelle Arbeit in über 24 Videos. Von der Vorbereitung bis zur finalen Verlegung - 
              sehen Sie selbst, wie Qualität und Handwerkskunst in verschiedensten Projekten entstehen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allVideos.map((video, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <Button 
                      size="lg" 
                      className="bg-gold hover:bg-gold-dark text-white rounded-full p-4"
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold text-white px-2 py-1 text-xs rounded font-medium">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/70 text-white px-2 py-1 text-xs rounded">
                      {video.duration}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-2 text-sm">{video.title}</h3>
                  <p className="text-xs text-muted-foreground">{video.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Videos;