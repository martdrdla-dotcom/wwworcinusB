import React from 'react';

const LegalNotice = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Právní upozornění</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Důležité upozornění</h2>
            <p className="text-gray-700">
              Tento web má informativní charakter a nepředstavuje investiční doporučení ani veřejnou nabídku 
              investičních nástrojů.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Charakter poskytovaných informací</h2>
              <p className="text-gray-700 mb-4">
                Všechny informace uvedené na těchto webových stránkách mají pouze informativní charakter. 
                Nejsou určeny jako investiční poradenství ani jako doporučení k investování.
              </p>
              <p className="text-gray-700 mb-4">
                ORCINUS s.r.o. nespravuje majetek veřejnosti a neposkytuje investiční služby široké veřejnosti 
                ve smyslu zákona o podnikání na kapitálovém trhu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Individuální spolupráce</h2>
              <p className="text-gray-700 mb-4">
                Veškeré spolupráce a investiční aktivity jsou sjednávány individuálně na základě konkrétních 
                podmínek a požadavků jednotlivých projektů.
              </p>
              <p className="text-gray-700 mb-4">
                Každá potenciální spolupráce podléhá důkladnému prověření a vyhodnocení v souladu s našimi 
                interními postupy a kritérii.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vyloučení odpovědnosti</h2>
              <p className="text-gray-700 mb-4">
                ORCINUS s.r.o. nenese odpovědnost za případné škody vzniklé v souvislosti s využitím 
                informací uvedených na těchto webových stránkách.
              </p>
              <p className="text-gray-700 mb-4">
                Před jakýmkoli investičním rozhodnutím doporučujeme konzultaci s kvalifikovaným finančním poradcem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Změny a aktualizace</h2>
              <p className="text-gray-700 mb-4">
                ORCINUS s.r.o. si vyhrazuje právo kdykoli změnit nebo aktualizovat obsah těchto webových stránek 
                bez předchozího upozornění.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
              <p className="text-gray-700">
                Pro právní dotazy nás kontaktujte na:{' '}
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

export default LegalNotice;