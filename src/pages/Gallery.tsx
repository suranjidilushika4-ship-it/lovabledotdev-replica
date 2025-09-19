import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import all original gallery images
import heroBackground from '@/assets/hero-background.jpg';
import kautschukBodenbelag from '@/assets/kautschuk-bodenbelag.jpg';
import korkBodenbelag from '@/assets/kork-bodenbelag.jpg';
import laminatKork from '@/assets/laminat-kork.jpg';
import laminatMusterfaecher from '@/assets/laminat-musterfaecher.png';
import linoleumBodenbelag from '@/assets/linoleum-bodenbelag.jpg';
import musterkollektion from '@/assets/musterkollektion.png';
import parkettKollektion from '@/assets/parkett-kollektion.png';
import parkettVerlegen from '@/assets/parkett-verlegen.jpg';
import partnerLieferanten from '@/assets/partner-lieferanten.png';
import reparaturen from '@/assets/reparaturen.jpg';
import silikonAbdichtung from '@/assets/silikon-abdichtung.jpg';
import sockelInstallation from '@/assets/sockel-installation.jpg';
import steinKeramik from '@/assets/stein-keramik.jpg';
import teppichKautschuk from '@/assets/teppich-kautschuk.jpg';
import vinylLinoleum from '@/assets/vinyl-linoleum.jpg';
import wandgestaltung from '@/assets/wandgestaltung.png';
import wandschutz from '@/assets/wandschutz.jpg';
import farbMusterfaecher from '@/assets/farb-musterfaecher.png';

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
      title: 'Hero Background',
      description: 'Professionelle Bodenbelagsarbeiten in verschiedenen Umgebungen',
      category: 'Projekte',
      image: heroBackground
    },
    {
      title: 'Kautschuk Bodenbelag',
      description: 'Hochwertige Kautschuk-Bodenbeläge für verschiedene Anwendungen',
      category: 'Kautschuk',
      image: kautschukBodenbelag
    },
    {
      title: 'Kork Bodenbelag',
      description: 'Natürliche Kork-Bodenbeläge für nachhaltiges Wohnen',
      category: 'Kork',
      image: korkBodenbelag
    },
    {
      title: 'Laminat & Kork Kombination',
      description: 'Innovative Kombination aus Laminat und Kork-Materialien',
      category: 'Laminat',
      image: laminatKork
    },
    {
      title: 'Linoleum Bodenbelag',
      description: 'Klassische Linoleum-Böden in modernen Designs',
      category: 'Linoleum',
      image: linoleumBodenbelag
    },
    {
      title: 'Parkett Verlegung',
      description: 'Professionelle Parkett-Verlegung mit präziser Handwerkskunst',
      category: 'Parkett',
      image: parkettVerlegen
    },
    {
      title: 'Reparaturen',
      description: 'Fachgerechte Reparaturen und Restaurierung von Bodenbelägen',
      category: 'Service',
      image: reparaturen
    },
    {
      title: 'Silikon Abdichtung',
      description: 'Präzise Silikon-Abdichtungsarbeiten für perfekte Abschlüsse',
      category: 'Service',
      image: silikonAbdichtung
    },
    {
      title: 'Sockel Installation',
      description: 'Fachgerechte Installation von Sockeln und Abschlussleisten',
      category: 'Service',
      image: sockelInstallation
    },
    {
      title: 'Stein & Keramik',
      description: 'Hochwertige Stein- und Keramikbeläge für anspruchsvolle Projekte',
      category: 'Stein',
      image: steinKeramik
    },
    {
      title: 'Teppich & Kautschuk',
      description: 'Spezielle Teppich- und Kautschuk-Lösungen für verschiedene Bereiche',
      category: 'Teppich',
      image: teppichKautschuk
    },
    {
      title: 'Vinyl & Linoleum',
      description: 'Moderne Vinyl- und Linoleum-Böden für jeden Wohnbereich',
      category: 'Vinyl',
      image: vinylLinoleum
    },
    {
      title: 'Wandschutz',
      description: 'Professioneller Wandschutz und Wandverkleidungen',
      category: 'Wandbelag',
      image: wandschutz
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
              Entdecken Sie unsere Sammlung von 19 originalen Arbeiten, Materialien und Projekten. 
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