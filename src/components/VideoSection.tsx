import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  const videos = [
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
    }
  ];

  return (
    <section id="videos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Video Galerie</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Erleben Sie unsere professionelle Arbeit in Aktion. Von der Vorbereitung bis zur finalen Verlegung - sehen Sie selbst, wie Qualität entsteht.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
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
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </Button>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-gold text-white px-2 py-1 text-xs rounded font-medium">
                    {video.category}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="bg-black/70 text-white px-2 py-1 text-xs rounded">
                    {video.duration}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-white mr-4"
            asChild
          >
            <a href="/videos">Alle Videos anzeigen (24+ Videos)</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            asChild
          >
            <a href="#contact">Persönliche Beratung vereinbaren</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;