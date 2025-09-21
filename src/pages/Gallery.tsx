import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import gallery placeholder images
import novilonPlaceholder from '@/assets/gallery/novilon-placeholder.jpg';
import treppenPlaceholder from '@/assets/gallery/treppen-placeholder.jpg';
import parkettMusterPlaceholder from '@/assets/gallery/parkett-muster-placeholder.jpg';
import beforeAfterPlaceholder from '@/assets/gallery/before-after-placeholder.jpg';
import vinylMusterPlaceholder from '@/assets/gallery/vinyl-muster-placeholder.jpg';
import schleifenPlaceholder from '@/assets/gallery/schleifen-placeholder.jpg';
import nivellierenPlaceholder from '@/assets/gallery/nivellieren-placeholder.jpg';
import linoleumPlaceholder from '@/assets/gallery/linoleum-placeholder.jpg';
import pvcIndustriePlaceholder from '@/assets/gallery/pvc-industrie-placeholder.jpg';
import wandverkleidungPlaceholder from '@/assets/gallery/wandverkleidung-placeholder.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Generate placeholder images for each category
  const generatePlaceholderImages = (baseName: string, count: number, image: string) => {
    return Array.from({ length: count }, (_, index) => ({
      title: `${baseName} ${index + 1}`,
      description: `Professionelle ${baseName.toLowerCase()} - Bild ${index + 1}`,
      category: baseName,
      image: image,
      placeholder: true
    }));
  };

  const categories = [
    {
      name: 'Novilon (Elastische Beläge)',
      count: 13,
      image: novilonPlaceholder,
      images: generatePlaceholderImages('Novilon', 13, novilonPlaceholder)
    },
    {
      name: 'Treppenverkleidung mit Parkett',
      count: 10,
      image: treppenPlaceholder,
      images: generatePlaceholderImages('Treppenverkleidung', 10, treppenPlaceholder)
    },
    {
      name: 'Parkett Muster',
      count: 8,
      image: parkettMusterPlaceholder,
      images: generatePlaceholderImages('Parkett Muster', 8, parkettMusterPlaceholder)
    },
    {
      name: 'Before / After',
      count: 11,
      image: beforeAfterPlaceholder,
      images: generatePlaceholderImages('Before/After', 11, beforeAfterPlaceholder)
    },
    {
      name: 'Vinyl Muster',
      count: 5,
      image: vinylMusterPlaceholder,
      images: generatePlaceholderImages('Vinyl Muster', 5, vinylMusterPlaceholder)
    },
    {
      name: 'Parkett Schleifen Versiegeln / Ölen',
      count: 16,
      image: schleifenPlaceholder,
      images: generatePlaceholderImages('Parkett Schleifen', 16, schleifenPlaceholder)
    },
    {
      name: 'Boden Nivellieren',
      count: 8,
      image: nivellierenPlaceholder,
      images: generatePlaceholderImages('Boden Nivellieren', 8, nivellierenPlaceholder)
    },
    {
      name: 'Linoleum',
      count: 2,
      image: linoleumPlaceholder,
      images: generatePlaceholderImages('Linoleum', 2, linoleumPlaceholder)
    },
    {
      name: 'PVC (industrie Beläge)',
      count: 4,
      image: pvcIndustriePlaceholder,
      images: generatePlaceholderImages('PVC Industrie', 4, pvcIndustriePlaceholder)
    },
    {
      name: 'Wandverkleidung',
      count: 7,
      image: wandverkleidungPlaceholder,
      images: generatePlaceholderImages('Wandverkleidung', 7, wandverkleidungPlaceholder)
    }
  ];

  const totalImages = categories.reduce((sum, cat) => sum + cat.count, 0);

  const selectedCategoryData = categories.find(cat => cat.name === selectedCategory);

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
            {selectedCategory && (
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={() => setSelectedCategory(null)}
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück zu Kategorien
              </Button>
            )}
          </div>
          
          {!selectedCategory ? (
            <>
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 text-primary">Bildergalerie Kategorien</h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  Entdecken Sie unsere {totalImages} Bilder aufgeteilt in 10 verschiedene Kategorien.
                  Klicken Sie auf eine Kategorie, um alle Bilder dieser Kategorie zu sehen.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                      <div className="absolute top-4 right-4 bg-gold text-white px-3 py-2 rounded-full font-medium">
                        {category.count} Bilder
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">{category.name}</h3>
                      <p className="text-muted-foreground">
                        Klicken Sie hier, um alle {category.count} Bilder dieser Kategorie anzuzeigen
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 text-primary">{selectedCategory}</h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  {selectedCategoryData?.count} Bilder in dieser Kategorie
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Platzhalter-Bilder - Sie können diese später durch Ihre eigenen Bilder ersetzen
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedCategoryData?.images.map((item, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="aspect-square overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                      {item.placeholder && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                          Platzhalter
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-primary mb-1 text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Gallery;