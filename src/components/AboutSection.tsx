import React from 'react';
import fredyPortrait from '@/assets/fredy-portrait.png';

const AboutSection = () => {
  const partners = [
    'Cabana AG',
    'Belcolor AG', 
    'Bauwerk AG',
    'Enia AG',
    'HGC AG',
    'Fabromont AG'
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <h2 className="text-4xl font-bold mb-8 text-primary">Über mich</h2>
            
            <div className="space-y-6 text-lg">
              <p>
                <strong className="text-gold">Hallo, ich bin Fredy</strong> – Ihr Spezialist für hochwertige Bodenbeläge und Innenraumlösungen.
              </p>
              
              <p>
                Mit über <strong>20 Jahren praktischer Erfahrung</strong> hatte ich das Privileg, unzähligen Kunden dabei zu helfen, ihre Räume in etwas ganz Besonderes zu verwandeln.
              </p>
              
              <p>
                Von Parkett, Vinyl & Linoleum, Laminat & Kork, Teppich & Kautschuk bis hin zu Stein- & Keramikplatten biete ich das komplette Spektrum an Bodenbelagsarbeiten. Doch meine Arbeit endet nicht beim Boden – ich kümmere mich auch um Wandschutz, Sockel- & Silikonarbeiten sowie zuverlässige Reparaturen, damit jedes Projekt bis ins kleinste Detail perfekt abgeschlossen ist.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Was macht meinen Ansatz besonders?</h3>
              <p className="text-lg mb-6">
                Ich bin überzeugt: <strong>Jedes Projekt ist persönlich.</strong> Deshalb nehme ich mir die Zeit, Ihre Wünsche, Ihren Lebensstil und Ihre Bedürfnisse genau zu verstehen. Durch die Kombination von traditionellem Handwerk und modernen Techniken entstehen Ergebnisse, die nicht nur langlebig, sondern auch stilvoll und individuell auf Sie zugeschnitten sind.
              </p>
              
              <p className="text-lg">
                Für mich geht es um mehr als nur um das Verlegen von Böden – es geht darum, Wohn- und Arbeitsräume zu schaffen, die komfortabel, funktional und ästhetisch ansprechend sind und an denen Sie viele Jahre Freude haben werden.
              </p>
            </div>
          </div>
          
          <div className="text-center lg:order-1">
            <img 
              src={fredyPortrait} 
              alt="Fredy - Ihr Spezialist für Bodenbeläge" 
              className="w-full max-w-md mx-auto rounded-lg shadow-xl border-4 border-gold/20"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Qualität durch starke Partnerschaften</h3>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Wir arbeiten mit großen Lieferanten in der Schweiz zusammen und verwenden ausschließlich hochwertige Materialien von renommierten Unternehmen:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="bg-card p-4 rounded-lg text-center font-medium text-primary border">
                {partner}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl font-semibold text-primary mb-4">
              Wenn Sie nach Erfahrung, Präzision und einem Partner suchen, dem das Ergebnis wirklich am Herzen liegt, dann sind Sie hier genau richtig.
            </p>
            <p className="text-lg text-gold font-medium">
              Lassen Sie uns Ihr Projekt gemeinsam verwirklichen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;