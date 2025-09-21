import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Target, Shield, ExternalLink } from 'lucide-react';

const Home = () => {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'Dlouhodobost',
      description: 'Podporujeme udržitelné byznysy s perspektivou.'
    },
    {
      icon: Users,
      title: 'Partnerství',
      description: 'Stavíme na otevřené komunikaci a sdílených cílech.'
    },
    {
      icon: Target,
      title: 'Pragmatismus',
      description: 'Rozhodujeme se na základě dat a praxe.'
    },
    {
      icon: Shield,
      title: 'Odpovědnost',
      description: 'Respekt k lidem, zdrojům a závazkům.'
    }
  ];

  const portfolioProjects = [
    {
      name: 'Lékárna Živá',
      description: 'projekt v oblasti lékárenství a péče o zdraví',
      url: 'www.lekarnaziva.cz'
    },
    {
      name: 'PekoKarton',
      description: 'projekt v oblasti obalů a zpracování kartonu',
      url: 'www.pekokarton.cz'
    },
    {
      name: 'PayTech',
      description: 'projekt v oblasti platebních a fintech řešení',
      url: 'www.paytech.cz'
    }
  ];

  const processSteps = [
    'Úvodní rozhovor a NDA',
    'Předběžná analýza a rámcové podmínky',
    'Due diligence',
    'Investiční rozhodnutí a vstup',
    'Společná realizace a rozvoj'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investujeme do smysluplných projektů
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Kapitál a know‑how pro firmy, které chtějí růst a zanechat stopu.
            </p>
            <p className="text-lg md:text-xl mb-10 text-blue-200 leading-relaxed">
              ORCINUS s.r.o. je investiční společnost zaměřená na projekty s jasnou hodnotovou nabídkou a reálným dopadem. 
              Kombinujeme kapitál, podnikatelskou zkušenost a dlouhodobou správu vlastního majetku. Partnerům přinášíme 
              férové podmínky, pragmatickou spolupráci a důraz na výsledky.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pro-partnery"
                className="bg-amber-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors inline-flex items-center justify-center"
              >
                Nabídněte nám projekt
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Prohlédnout portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <IconComponent size={32} className="text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio – výběr</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-900 hover:text-amber-600 transition-colors font-medium"
                >
                  {project.url}
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Jak spolupracujeme</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Máte projekt?</h2>
          <p className="text-lg mb-8">
            Napište nám na{' '}
            <a href="mailto:orcinus@orcinus.cz" className="text-amber-400 hover:text-amber-300 transition-colors">
              orcinus@orcinus.cz
            </a>
            {' '}nebo volejte{' '}
            <a href="tel:+420228226013" className="text-amber-400 hover:text-amber-300 transition-colors">
              +420 228 226 013
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;