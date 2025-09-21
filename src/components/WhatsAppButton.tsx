import React from 'react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const url = 'https://api.whatsapp.com/send?phone=%2B41798703420';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="bg-gold hover:bg-gold-dark text-white rounded-full shadow-lg"
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat mit Fredy"
        >
          WhatsApp
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
