'use client';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 relative hero-gradient">
      <div className="gradient-blur left-1/4 top-1/4" />
      <div className="gradient-blur right-1/4 bottom-1/4" />
      
      <Container className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          Manin Awards 2025
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
          Volvemos con más fuerza tras el éxito de nuestra primera edición.
          Una celebración única de talento, creatividad y amistad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => scrollToSection('galeria')}>
            Ver Galería 2024
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => scrollToSection('propuestas')}
          >
            Proponer Categoría
          </Button>
        </div>
      </Container>
    </section>
  );
}