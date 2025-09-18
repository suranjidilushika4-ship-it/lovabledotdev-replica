import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import all gallery images
import musterkollektion from '@/assets/musterkollektion.png';
import wandgestaltung from '@/assets/wandgestaltung.png';
import partnerLieferanten from '@/assets/partner-lieferanten.png';
import laminatMusterfaecher from '@/assets/laminat-musterfaecher.png';
import parkettKollektion from '@/assets/parkett-kollektion.png';
import farbMusterfaecher from '@/assets/farb-musterfaecher.png';
import parkettVerlegen from '@/assets/parkett-verlegen.jpg';
import linoleumBodenbelag from '@/assets/linoleum-bodenbelag.jpg';
import korkBodenbelag from '@/assets/kork-bodenbelag.jpg';
import vinylLinoleum from '@/assets/vinyl-linoleum.jpg';
import laminatKork from '@/assets/laminat-kork.jpg';
import kautschukBodenbelag from '@/assets/kautschuk-bodenbelag.jpg';
import teppichKautschuk from '@/assets/teppich-kautschuk.jpg';
import wandschutz from '@/assets/wandschutz.jpg';
import steinKeramik from '@/assets/stein-keramik.jpg';
import sockelInstallation from '@/assets/sockel-installation.jpg';
import silikonAbdichtung from '@/assets/silikon-abdichtung.jpg';
import reparaturen from '@/assets/reparaturen.jpg';

const Gallery = () => {
  const allImages = [
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
    },
    {
      title: 'Parkett Verlegung',
      description: 'Professionelle Parkettverlegung in Wohnräumen',
      category: 'Installation',
      image: parkettVerlegen
    },
    {
      title: 'Linoleum Bodenbelag',
      description: 'Hochwertige Linoleum-Installation',
      category: 'Linoleum',
      image: linoleumBodenbelag
    },
    {
      title: 'Kork Bodenbelag',
      description: 'Natürlicher und nachhaltiger Kork-Bodenbelag',
      category: 'Kork',
      image: korkBodenbelag
    },
    {
      title: 'Vinyl & Linoleum',
      description: 'Moderne Vinyl- und Linoleum-Lösungen',
      category: 'Vinyl',
      image: vinylLinoleum
    },
    {
      title: 'Laminat & Kork Kombination',
      description: 'Innovative Kombinationen aus Laminat und Kork',
      category: 'Kombination',
      image: laminatKork
    },
    {
      title: 'Kautschuk Bodenbelag',
      description: 'Strapazierfähiger Kautschuk für gewerbliche Räume',
      category: 'Kautschuk',
      image: kautschukBodenbelag
    },
    {
      title: 'Teppich & Kautschuk',
      description: 'Kombination aus Teppich und Kautschuk-Elementen',
      category: 'Teppich',
      image: teppichKautschuk
    },
    {
      title: 'Wandschutz Installation',
      description: 'Professionelle Wandschutz-Systeme',
      category: 'Wandschutz',
      image: wandschutz
    },
    {
      title: 'Stein & Keramik',
      description: 'Hochwertige Stein- und Keramikverlegung',
      category: 'Keramik',
      image: steinKeramik
    },
    {
      title: 'Sockel Installation',
      description: 'Präzise Sockel- und Leisteninstallation',
      category: 'Installation',
      image: sockelInstallation
    },
    {
      title: 'Silikon Abdichtung',
      description: 'Professionelle Abdichtungsarbeiten',
      category: 'Abdichtung',
      image: silikonAbdichtung
    },
    {
      title: 'Reparaturen',
      description: 'Fachgerechte Reparatur- und Renovierungsarbeiten',
      category: 'Reparatur',
      image: reparaturen
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
              Entdecken Sie unsere vollständige Sammlung von Arbeiten, Materialien und Projekten. 
              Von der ersten Beratung bis zur finalen Installation - sehen Sie die Qualität unserer Arbeit.
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