import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Users, TrendingUp, FileText, Handshake } from 'lucide-react';

const InvestmentApproach = () => {
  const criteria = [
    'Jasná hodnota pro zákazníka a opakované tržby.',
    'Jednoduchý, škálovatelný model s kontrolou nad klíčovými vstupy.',
    'Orientace na kvalitu a dlouhodobé vztahy.',
    'Tým, který je ochotný transparentně spolupracovat.'
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Seznámení s projektem',
      description: 'Stručná prezentace, finanční rámec, NDA.'
    },
    {
      icon: FileText,
      title: 'Předběžná analýza',
      description: 'Ověření trhu, jednotkové ekonomiky a týmu.'
    },
    {
      icon: Handshake,
      title: 'Term‑sheet',
      description: 'Rámcové podmínky investice a milníky.'
    },
    {
      icon: CheckCircle,
      title: 'Due diligence',
      description: 'Finanční, právní a provozní prověrka.'
    },
    {
      icon: TrendingUp,
      title: 'Uzavření transakce a vstup',
      description: 'Dohoda akcionářů, governance.'
    },
    {
      icon: Clock,
      title: 'Společná exekuce',
      description: 'Růstové iniciativy, reporting, pravidelné review.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Investiční přístup</h1>
        </div>
      </section>

      {/* Investment Thesis Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Investiční teze</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              Hledáme srozumitelné byznysy s reálnou poptávkou, zdravou ekonomikou a vedením, které zná své zákazníky. 
              Preferujeme projekty, kde má smysl přinést nejen kapitál, ale i provozní podporu a zkušenost z řízení.
            </p>
          </div>
        </div>
      </section>

      {/* What We Look For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Co typicky hledáme</h2>
          
          <div className="space-y-6">
            {criteria.map((criterion, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-gray-50">
                <div className="flex-shrink-0">
                  <CheckCircle size={24} className="text-green-600 mt-1" />
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">{criterion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Parameters Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Investiční parametry</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vstup</h3>
              <p className="text-gray-700">Menšinový i většinový dle dohody.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Horizont držby</h3>
              <p className="text-gray-700">Dlouhodobý, s důrazem na organický růst.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Role po vstupu</h3>
              <p className="text-gray-700">Aktivní podpora strategických a provozních témat.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Struktura transakce</h3>
              <p className="text-gray-700">Flexibilní (navýšení kapitálu, odkup podílu apod.).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Proces spolupráce – kroky</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <IconComponent size={32} className="text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Máte zajímavý projekt?</h2>
          <Link
            to="/pro-partnery"
            className="bg-amber-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors inline-flex items-center justify-center"
          >
            Nabídněte nám projekt
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InvestmentApproach;