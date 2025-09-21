import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8">
          <CheckCircle size={64} className="text-green-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Děkujeme za vaši zprávu!</h2>
          <p className="text-gray-600 mb-6">
            Ozveme se vám co nejdříve.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-blue-900 hover:text-amber-600 transition-colors"
          >
            Odeslat další zprávu
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Kontakt</h1>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Kontaktní údaje</h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex items-start space-x-4">
                    <MapPin size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Sídlo</h3>
                      <p className="text-gray-700">ORCINUS s.r.o.</p>
                      <p className="text-gray-700">Kubelíkova 1224/42, Žižkov</p>
                      <p className="text-gray-700">130 00 Praha</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">IČ</h3>
                      <p className="text-gray-700">25953265</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">DIČ</h3>
                      <p className="text-gray-700">CZ25953265</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Phone size={24} className="text-blue-900" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefon</h3>
                      <a
                        href="tel:+420228226013"
                        className="text-blue-900 hover:text-amber-600 transition-colors"
                      >
                        +420 228 226 013
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail size={24} className="text-blue-900" />
                    <div>
                      <h3 className="font-semibold text-gray-900">E-mail</h3>
                      <a
                        href="mailto:orcinus@orcinus.cz"
                        className="text-blue-900 hover:text-amber-600 transition-colors"
                      >
                        orcinus@orcinus.cz
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Rychlý formulář</h2>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Zpráva *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors resize-none"
                    ></textarea>
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
                    Odeslat zprávu
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Mapa s trasou k našemu sídlu
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Kubelíkova 1224/42, Praha 3 - Žižkov
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;