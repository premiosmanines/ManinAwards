'use client';
import { useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export default function Survey() {
  const [category, setCategory] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: category }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al enviar la propuesta');
      }

      setSubmitted(true);
      setCategory('');
      setError('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section id="propuestas" className="py-20 relative">
      <div className="gradient-blur opacity-30 right-1/3 top-1/2" />
      <Container className="max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-4">Propón Categorías</h2>
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
          Ayúdanos a hacer la segunda edición aún más especial
        </p>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm text-center border border-white/10">
            <h3 className="text-xl font-semibold mb-2">¡Gracias por tu propuesta!</h3>
            <p className="text-white/70">Tu idea nos ayudará a hacer los premios aún mejores.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative glow-effect p-[1px] rounded-xl">
              <textarea
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#8B4513] min-h-[150px] text-white"
                placeholder="Describe tu idea para una nueva categoría..."
                required
              />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <Button type="submit" className="w-full">
              Enviar Propuesta
            </Button>
          </form>
        )}
      </Container>
    </section>
  );
}
