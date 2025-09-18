import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import all gallery images
import musterkollektion from '@/assets/musterkollektion.png';
import wandgestaltung from '@/assets/wandgestaltung.png';
import partnerLieferanten from '@/assets/partner-lieferanten.png';
import laminatMusterfaecher from '@/assets/laminat-musterfaecher.png';
import parkettKollektion from '@/assets/parkett-kollektion.png';
import farbMusterfaecher from '@/assets/farb-musterfaecher.png';

const GallerySection = () => {
  const galleryItems = [
    {
      title: 'Bodenbelag Musterkollektion',
      description: 'Umfangreiche Auswahl an verschiedenen Bodenbelägen und Mustern',
      category: 'Muster',
      image: musterkollektion
    },
    {
      title: 'Wandgestaltung Projekt',
      description: 'Professionelle Wandverkleidung mit floralem Design',
      category: 'Wandbelag',
      image: wandgestaltung
    },
    {
      title: 'Partner & Lieferanten',
      description: 'Unsere hochwertigen Markenpartner und Lieferanten',
      category: 'Partner',
      image: partnerLieferanten
    },
    {
      title: 'Laminat Musterfächer',
      description: 'Vielfältige Laminat-Auswahl in verschiedenen Farbtönen',
      category: 'Laminat',
      image: laminatMusterfaecher
    },
    {
      title: 'Parkett Kollektion',
      description: 'Hochwertige Parkett-Muster verschiedener Holzarten',
      category: 'Parkett',
      image: parkettKollektion
    },
    {
      title: 'Farb-Musterfächer',
      description: 'Umfangreiche Farbpalette für Ihre perfekte Auswahl',
      category: 'Farben',
      image: farbMusterfaecher
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
          {galleryItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
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
            <a href="/gallery">Alle Bilder anzeigen ({18 - 6} weitere)</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;