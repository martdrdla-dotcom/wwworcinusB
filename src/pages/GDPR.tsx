import React from 'react';

const GDPR = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Ochrana osobních údajů</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Správce osobních údajů</h2>
            <p className="text-gray-700">
              <strong>ORCINUS s.r.o.</strong><br />
              Kubelíkova 1224/42, Žižkov<br />
              130 00 Praha<br />
              IČ: 25953265
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Účel zpracování</h2>
              <p className="text-gray-700 mb-4">
                Osobní údaje zpracováváme pouze za účelem vyřízení Vašeho dotazu / nabídky spolupráce 
                a následné komunikace.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Právní základ</h2>
              <p className="text-gray-700 mb-4">
                Zpracování osobních údajů je založeno na oprávněném zájmu správce nebo plnění smlouvy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Doba uchování</h2>
              <p className="text-gray-700 mb-4">
                Osobní údaje uchováváme po dobu nezbytnou k vyřízení Vašeho požadavku, 
                maximálně po dobu zákonných lhůt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vaše práva</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Právo na přístup k osobním údajům</li>
                <li>Právo na opravu nepřesných údajů</li>
                <li>Právo na výmaz osobních údajů</li>
                <li>Právo na omezení zpracování</li>
                <li>Právo vznést námitku proti zpracování</li>
                <li>Právo podat stížnost u Úřadu pro ochranu osobních údajů</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
              <p className="text-gray-700">
                Pro uplatnění svých práv nebo dotazy týkající se zpracování osobních údajů 
                nás kontaktujte na e-mailu:{' '}
                <a href="mailto:orcinus@orcinus.cz" className="text-blue-900 hover:text-amber-600 transition-colors">
                  orcinus@orcinus.cz
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPR;