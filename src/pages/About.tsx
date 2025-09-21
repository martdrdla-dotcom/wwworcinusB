import React from 'react';
import { Eye, Shield, Handshake, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Eye,
      title: 'Transparentnost',
      description: 'Otevřená komunikace a jasné podmínky.'
    },
    {
      icon: Shield,
      title: 'Odpovědné vlastnictví',
      description: 'Zvažujeme dopady rozhodnutí v celém životním cyklu firmy.'
    },
    {
      icon: Handshake,
      title: 'Spolupodnikání',
      description: 'Nejen kapitál, ale i čas, kontakty a know‑how.'
    },
    {
      icon: Target,
      title: 'Disciplína',
      description: 'Důraz na ekonomiku, cash‑flow a měřitelné cíle.'
    }
  ];

  const benefits = [
    'Kapitál pro růst a inovace.',
    'Podporu řízení a nastavení procesů.',
    'Pomoc s náborem klíčových lidí a rozvojem obchodu.',
    'Přístup k síti dodavatelů a expertů.'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Kdo jsme</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              Jsme podnikatelé‑investoři. Věříme ve férové dohody, poctivou práci a dlouhodobou spolupráci. 
              Soustředíme se na projekty, kterým rozumíme a ve kterých můžeme být užiteční — od strategického 
              směřování přes provozní zlepšení až po rozšiřování obchodních příležitostí.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naše hodnoty</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                        <IconComponent size={24} className="text-blue-900" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Bring Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Co přinášíme partnerům</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-gray-50">
                <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                <p className="text-gray-800 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;