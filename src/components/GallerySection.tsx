import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import gallery images
import img6926 from '@/assets/img-6926.jpg';
import img6581 from '@/assets/img-6581.jpg';
import img6579 from '@/assets/img-6579.jpg';
import img6576 from '@/assets/img-6576.jpg';
import img6577 from '@/assets/img-6577.jpg';
import img4891 from '@/assets/img-4891.jpg';
import img6573 from '@/assets/img-6573.jpg';
import img5649 from '@/assets/img-5649.jpg';
import img5643 from '@/assets/img-5643.jpg';
import img9785 from '@/assets/img-9785.jpg';
import img7505 from '@/assets/img-7505.jpg';
import img5075 from '@/assets/img-5075.jpg';
import img0217 from '@/assets/img-0217.jpg';
import img5029 from '@/assets/img-5029.jpg';
import img4879 from '@/assets/img-4879.jpg';
import img4872 from '@/assets/img-4872.jpg';
import img4884 from '@/assets/img-4884.jpg';
import img4977 from '@/assets/img-4977.jpg';
import img8320 from '@/assets/img-8320.jpg';
import img1356 from '@/assets/img-1356.jpg';

const GallerySection = () => {
  const galleryItems = [
    {
      title: 'Farbmusterfächer',
      description: 'Umfangreiche Farbpalette für Ihre perfekte Auswahl',
      category: 'Farben',
      image: img6926
    },
    {
      title: 'Parkett Musterfächer',
      description: 'Hochwertige Parkett-Muster verschiedener Holzarten',
      category: 'Parkett',
      image: img6581
    },
    {
      title: 'Laminat Kollektion',
      description: 'Vielfältige Laminat-Auswahl in verschiedenen Farbtönen',
      category: 'Laminat',
      image: img6579
    },
    {
      title: 'Wandverkleidung Musterfächer',
      description: 'Professionelle Wandverkleidungsmuster und Designs',
      category: 'Wandbelag',
      image: img6576
    },
    {
      title: 'Bodenbelag Musterkollektion',
      description: 'Umfangreiche Auswahl an verschiedenen Bodenbelägen',
      category: 'Muster',
      image: img6577
    },
    {
      title: 'Fertig verlegter Parkettboden',
      description: 'Professionell verlegter Parkettboden mit Fischgrätmuster',
      category: 'Projekte',
      image: img4891
    },
    {
      title: 'Profi-Werkzeug Set',
      description: 'Hochwertiges Werkzeug für professionelle Bodenverlegung',
      category: 'Werkzeug',
      image: img7505
    },
    {
      title: 'Fredy\'s Visitenkarte',
      description: 'Professionelle Darstellung unserer Dienstleistungen',
      category: 'Service',
      image: img5075
    },
    {
      title: 'Fredy\'s Arbeitskleidung',
      description: 'Professionelle Arbeitskleidung mit Firmenlogo',
      category: 'Team',
      image: img0217
    },
    {
      title: 'Laminat Musterfächer',
      description: 'Große Auswahl an Laminat-Mustern in verschiedenen Farben',
      category: 'Laminat',
      image: img5029
    },
    {
      title: 'Parkettverlegung Wohnzimmer',
      description: 'Modernes Parkettmuster in einem hellen Wohnbereich',
      category: 'Projekte',
      image: img4879
    },
    {
      title: 'Fischgrat Parkett',
      description: 'Elegante Fischgrat-Verlegung in einem Schlafzimmer',
      category: 'Parkett',
      image: img4872
    },
    {
      title: 'Parkett am Kamin',
      description: 'Professionelle Parkettverlegung rund um den Kaminbereich',
      category: 'Projekte',
      image: img4884
    },
    {
      title: 'Fredy\'s Werkzeug',
      description: 'Spezialisierte Werkzeuge für die Bodenverlegung',
      category: 'Werkzeug',
      image: img4977
    },
    {
      title: 'Holzmuster mit Logo',
      description: 'Hochwertige Holzmuster mit Fredy\'s Branding',
      category: 'Muster',
      image: img8320
    },
    {
      title: 'Küchenboden Installation',
      description: 'Professionelle Bodenverlegung in der Küche',
      category: 'Projekte',
      image: img1356
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Unsere Arbeiten & Materialien</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie unsere umfangreiche Materialauswahl und professionellen Arbeiten. Von hochwertigen Musterkollektionen bis hin zu fertigen Installationen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.slice(0, 4).map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gold text-white px-3 py-1 text-xs rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-white"
            asChild
          >
            <a href="/gallery">Alle Bilder anzeigen (24 Bilder)</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;