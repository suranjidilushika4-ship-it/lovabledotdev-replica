import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import new gallery images
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

const Gallery = () => {
  const allImages = [
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
      title: 'Laminat Kollektion mit Katalog',
      description: 'Vielfältige Laminat-Auswahl in verschiedenen Farbtönen mit Produktkatalog',
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
      title: 'Materialsammlung Bodenbeläge',
      description: 'Verschiedene Materialproben für Bodenbelagsauswahl',
      category: 'Muster',
      image: img6573
    },
    {
      title: 'Parkett Musterfächer Set',
      description: 'Komplette Parkett-Mustersammlung für die perfekte Auswahl',
      category: 'Parkett',
      image: img5649
    },
    {
      title: 'Holzmuster Kollektion',
      description: 'Vielfältige Holzmuster für verschiedene Anwendungsbereiche',
      category: 'Holz',
      image: img5643
    },
    {
      title: 'Parkettboden Installation',
      description: 'Professionelle Verlegung von Parkettböden in Winkelmuster',
      category: 'Installation',
      image: img9785
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
            <h1 className="text-5xl font-bold mb-6 text-primary">Komplette Bildergalerie</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Entdecken Sie unsere Sammlung von 10 hochwertigen Arbeiten, Materialien und Projekten. 
              Von der ersten Beratung bis zur finalen Installation - sehen Sie die Qualität und Vielfalt unserer Arbeit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allImages.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gold text-white px-2 py-1 text-xs rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-primary mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;