import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Survey from './components/Survey';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Gallery />
        <Survey />
      </main>
      <footer className="py-8 border-t border-white/10">
        <p className="text-center text-sm text-white/50">
          © 2024 Manin Awards. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}