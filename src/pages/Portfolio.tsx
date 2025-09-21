import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      name: 'Lékárna Živá',
      description: 'Projekt v oblasti lékárenství a péče o zdraví.',
      url: 'www.lekarnaziva.cz',
      category: 'Healthcare'
    },
    {
      name: 'PekoKarton',
      description: 'Projekt v oblasti obalů a zpracování kartonu.',
      url: 'www.pekokarton.cz',
      category: 'Manufacturing'
    },
    {
      name: 'PayTech',
      description: 'Projekt v oblasti platebních a fintech řešení.',
      url: 'www.paytech.cz',
      category: 'Fintech'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Healthcare':
        return 'bg-green-100 text-green-800';
      case 'Manufacturing':
        return 'bg-blue-100 text-blue-800';
      case 'Fintech':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Portfolio</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              Spolupracujeme s projekty, které přinášejí hodnotu svým zákazníkům a mají zdravé základy pro 
              dlouhodobý rozvoj. Níže uvádíme výběr.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-900 hover:text-amber-600 transition-colors font-semibold group"
                  >
                    {project.url}
                    <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                <div className="px-8 pb-8">
                  <div className="h-1 bg-gradient-to-r from-blue-900 to-amber-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats or Additional Info Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Aktivní spolupráce</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Každý projekt v našem portfoliu je pro nás dlouhodobým partnerstvím. Poskytujeme nejen kapitál, 
            ale také strategickou podporu, provozní know-how a přístup k naší síti kontaktů.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;