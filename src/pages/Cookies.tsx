import React from 'react';

const Cookies = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Cookies</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Co jsou cookies?</h2>
            <p className="text-gray-700">
              Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče při návštěvě webových stránek. 
              Pomáhají nám zajistit správné fungování webu a zlepšovat vaše uživatelské zkušenosti.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Jak používáme cookies</h2>
              <p className="text-gray-700 mb-4">
                Naše webové stránky mohou používat technické cookies pro správné fungování. 
                Analytické a marketingové cookies používáme pouze s Vaším souhlasem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Typy cookies</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-900 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Nezbytné cookies</h3>
                  <p className="text-gray-700">
                    Tyto cookies jsou nezbytné pro základní funkčnost webu a nelze je vypnout. 
                    Obvykle se nastavují pouze v reakci na akce, které provedete.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytické cookies</h3>
                  <p className="text-gray-700">
                    Pomáhají nám pochopit, jak návštěvníci používají náš web. 
                    Všechny informace jsou anonymní a používáme je ke zlepšení našich služeb.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketingové cookies</h3>
                  <p className="text-gray-700">
                    Používají se k zobrazování relevantních reklam a měření jejich účinnosti. 
                    Mohou být nastaveny našimi reklamními partnery.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Správa cookies</h2>
              <p className="text-gray-700 mb-4">
                Nastavení cookies můžete kdykoli změnit v liště cookies, která se zobrazí při první návštěvě webu. 
                Můžete také upravit nastavení přímo ve vašem prohlížeči.
              </p>
              <p className="text-gray-700">
                Upozorňujeme, že vypnutí některých cookies může ovlivnit funkčnost našeho webu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
              <p className="text-gray-700">
                Máte-li dotazy týkající se používání cookies, kontaktujte nás na:{' '}
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

export default Cookies;