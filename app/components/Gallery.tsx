import Image from 'next/image';
import { Container } from './ui/Container';

const images = [
  { url: '/images/ganadores.jpg', alt: 'Ganadores 2024' },
  { url: '/images/samuelillo.jpg', alt: 'Samuelillo 2024' },
  { url: '/images/todos.jpg', alt: 'Todos 2024' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 relative">
      <div className="gradient-blur opacity-30 left-1/3 top-1/2" />
      
      <Container>
        <h2 className="text-3xl font-bold text-center mb-4">Galería 2024</h2>
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
          Revive los mejores momentos de nuestra primera edición
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/3] overflow-hidden rounded-xl glow-effect"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}