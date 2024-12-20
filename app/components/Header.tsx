import { Container } from './ui/Container';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold">
            Manin Awards
            <span className="text-[#8B4513]">25</span>
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space¶-x-8">
              <li><a href="#inicio" className="text-sm text-white/70 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#galeria" className="text-sm text-white/70 hover:text-white transition-colors">Galería</a></li>
              <li><a href="#propuestas" className="text-sm text-white/70 hover:text-white transition-colors">Propuestas</a></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}