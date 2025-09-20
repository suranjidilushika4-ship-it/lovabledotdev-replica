import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
// New images (uploaded)
import img9792 from '@/assets/img-9792.jpg';
import img0071 from '@/assets/img-0071.jpg';
import img0146 from '@/assets/img-0146.jpg';
import img5655 from '@/assets/img-5655.jpg';
import img5661 from '@/assets/img-5661.jpg';
import img7053 from '@/assets/img-7053.jpg';
import img5651 from '@/assets/img-5651.jpg';
import img5658 from '@/assets/img-5658.jpg';
import img5660 from '@/assets/img-5660.jpg';
import logoFredys from '@/assets/fredys-bodenbelaege-logo.jpg';

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
    },
    {
      title: 'Firmenlogo Fredy\'s Bodenbeläge',
      description: 'Offizielles Logo – Branding und Wiedererkennung',
      category: 'Branding',
      image: logoFredys
    },
    {
      title: 'Vorbereitung Fischgrat',
      description: 'Fischgrat-Elemente vorbereitet – mobile Werkstatt',
      category: 'Installation',
      image: img9792
    },
    {
      title: 'Eichentreppe',
      description: 'Passgenau verkleidete Treppenstufen aus Eiche',
      category: 'Treppen',
      image: img0071
    },
    {
      title: 'Partner & Lieferanten',
      description: 'Starke Markenpartnerschaften für Top-Qualität',
      category: 'Partner',
      image: img0146
    },
    {
      title: 'Naturfaser-Teppichkollektion',
      description: 'Hochwertige Naturfasern für langlebige Teppichböden',
      category: 'Teppich',
      image: img5655
    },
    {
      title: 'Designbelag Musterfächer',
      description: 'Aktuelle Designbeläge in zahlreichen Farben',
      category: 'Beläge',
      image: img5661
    },
    {
      title: 'Vinyl Kollektion',
      description: 'Aktuelle Vinylsortimente – robust und pflegeleicht',
      category: 'Vinyl',
      image: img7053
    },
    {
      title: 'Schmutzfangmatten Muster',
      description: 'Effektive Eingangslösungen für saubere Böden',
      category: 'Muster',
      image: img5651
    },
    {
      title: 'Farbfächer Textilbeläge',
      description: 'Breites Farbspektrum für textile Bodenbeläge',
      category: 'Teppich',
      image: img5658
    },
    {
      title: 'Steinoptik Beläge',
      description: 'Moderne Steinoptik-Designs für elegante Räume',
      category: 'Beläge',
      image: img5660
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
              Entdecken Sie unsere Sammlung von 30 hochwertigen Arbeiten, Materialien und Projekten.
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
                    loading="lazy"
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