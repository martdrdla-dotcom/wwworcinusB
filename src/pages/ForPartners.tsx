import React, { useState } from 'react';
import { Upload, CheckCircle, FileText } from 'lucide-react';

const ForPartners = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectName: '',
    description: '',
    consent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const expectations = [
    'Stručnou prezentaci projektu (problém, řešení, trh, tým, finance).',
    'Transparentní data a ochotu sdílet klíčové informace.',
    'Realistický plán a milníky na 12–24 měsíců.'
  ];

  const offers = [
    'Kapitál a know‑how pro další etapu růstu.',
    'Aktivní podporu managementu.',
    'Rychlou a věcnou komunikaci.'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8">
          <CheckCircle size={64} className="text-green-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Děkujeme za vaši nabídku!</h2>
          <p className="text-gray-600 mb-6">
            Vaše zpráva byla úspěšně odeslána. Ozveme se vám co nejdříve.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-blue-900 hover:text-amber-600 transition-colors"
          >
            Odeslat další projekt
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Hledáte investora nebo parťáka pro růst?
          </h1>
        </div>
      </section>

      {/* Expectations & Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What We Expect */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Co očekáváme</h2>
              <div className="space-y-4">
                {expectations.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-900 rounded-full mt-3"></div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Offer */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Co nabízíme</h2>
              <div className="space-y-4">
                {offers.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Nabídněte nám váš projekt</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Jméno *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-2">
                      Název projektu / firmy *
                    </label>
                    <input
                      type="text"
                      id="projectName"
                      name="projectName"
                      required
                      value={formData.projectName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Stručný popis *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={6}
                    required
                    maxLength={1500}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Max. 1500 znaků"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors resize-none"
                  ></textarea>
                  <div className="text-sm text-gray-500 mt-2">
                    {formData.description.length}/1500 znaků
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-600 mb-2">Nahrát pitch deck (PDF)</p>
                  <p className="text-sm text-gray-500">Max. 20 MB</p>
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                    Souhlasím se zpracováním osobních údajů pro účely kontaktování. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Odeslat nabídku projektu
                </button>
              </form>
            </div>

            {/* Direct Contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Kontakt napřímo</h2>
              
              <div className="bg-gray-50 rounded-lg p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
                  <a
                    href="mailto:orcinus@orcinus.cz"
                    className="text-blue-900 hover:text-amber-600 transition-colors"
                  >
                    orcinus@orcinus.cz
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                  <a
                    href="tel:+420228226013"
                    className="text-blue-900 hover:text-amber-600 transition-colors"
                  >
                    +420 228 226 013
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <FileText size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Šablona pitch decku</h3>
                    <p className="text-gray-600 mb-4">
                      Stáhněte si naši šablonu pro přípravu prezentace vašeho projektu.
                    </p>
                    <button className="text-blue-900 hover:text-amber-600 transition-colors font-medium">
                      Stáhnout šablonu (PDF)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForPartners;