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
    },
    // Additional professional floor images
    {
      title: 'Luxus Parkett Installation',
      description: 'Hochwertiges Eichenparkett in modernem Wohnbereich',
      category: 'Parkett',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Designvinyl Verlegung',
      description: 'Moderne Designvinyl-Lösung für Geschäftsräume',
      category: 'Vinyl',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Keramikfliesen Bad',
      description: 'Elegante Keramikverlegung im Badezimmer',
      category: 'Keramik',
      image: 'https://images.unsplash.com/photo-1582977999383-9c96cd049d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Büroteppich Verlegung',
      description: 'Professionelle Teppichverlegung für Büroräume',
      category: 'Teppich',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Laminat Wohnzimmer',
      description: 'Hochwertige Laminatverlegung mit perfekten Übergängen',
      category: 'Laminat',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Naturkork Küche',
      description: 'Umweltfreundlicher Kork-Bodenbelag in der Küche',
      category: 'Kork',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Linoleum Praxis',
      description: 'Hygienischer Linoleum-Belag für medizinische Praxis',
      category: 'Linoleum',
      image: 'https://images.unsplash.com/photo-1609803384763-9de0c4a97b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Industrieller Kautschuk',
      description: 'Robuster Kautschuk-Belag für Industrieanwendungen',
      category: 'Kautschuk',
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Moderne Wandverkleidung',
      description: 'Zeitgemäße Wandgestaltung mit hochwertigen Materialien',
      category: 'Wandbelag',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Präzise Sockelarbeiten',
      description: 'Perfekte Sockelleisten-Installation für saubere Abschlüsse',
      category: 'Installation',
      image: 'https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hochwertige Materialien',
      description: 'Erstklassige Bodenbelag-Materialien unserer Partner',
      category: 'Materialien',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Komplette Renovierung',
      description: 'Vollständige Boden- und Wandrenovierung eines Objekts',
      category: 'Renovierung',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Luxus Showroom',
      description: 'Unser Showroom mit exklusiven Bodenbelag-Kollektionen',
      category: 'Showroom',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Terrazzo Verlegung',
      description: 'Exklusive Terrazzo-Böden für besondere Ansprüche',
      category: 'Terrazzo',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Design Epoxidharz',
      description: 'Moderne Epoxidharz-Böden für Gewerbe und Industrie',
      category: 'Epoxid',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Naturstein Verlegung',
      description: 'Edle Naturstein-Installation für exklusive Bereiche',
      category: 'Naturstein',
      image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Outdoor Terrasse',
      description: 'Wetterfeste Beläge für Terrassen und Außenbereiche',
      category: 'Outdoor',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Barrierefreie Lösungen',
      description: 'Spezielle Bodenbeläge für barrierefreie Zugänge',
      category: 'Barrierefrei',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hotel Lobby',
      description: 'Repräsentative Bodenbeläge für Hotel- und Empfangsbereiche',
      category: 'Hotel',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Restaurant Boden',
      description: 'Pflegeleichte Beläge für Gastronomie und Restaurants',
      category: 'Gastronomie',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sportstätte Belag',
      description: 'Spezielle Sportböden für Turnhallen und Fitnessstudios',
      category: 'Sport',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Kinderzimmer Sicherheit',
      description: 'Kindersichere und schadstofffreie Bodenbeläge',
      category: 'Kinderzimmer',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Büro Modern',
      description: 'Zeitgemäße Bürobodenbeläge für produktive Arbeitsplätze',
      category: 'Büro',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Wellness Bereich',
      description: 'Feuchtigkeitsresistente Beläge für Spa und Wellness',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Vintage Stil',
      description: 'Authentische Vintage-Böden für besondere Atmosphäre',
      category: 'Vintage',
      image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Showroom Display',
      description: 'Professionelle Präsentation unserer Materialvielfalt',
      category: 'Display',
      image: 'https://images.unsplash.com/photo-1549482344-c4cc462be0de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
              Entdecken Sie unsere vollständige Sammlung von über 43 Arbeiten, Materialien und Projekten. 
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