const Services = () => {
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes. Diseño responsive y SEO-friendly.',
      icon: '🌐',
      features: ['Diseño responsive', 'Optimización SEO', 'Alta velocidad', 'Fácil de mantener']
    },
    {
      title: 'Sistemas Personalizados',
      description: 'Software a medida para gestionar tu negocio. Desde inventarios hasta sistemas de facturación.',
      icon: '💼',
      features: ['A medida', 'Escalable', 'Integración fácil', 'Soporte continuo']
    },
    {
      title: 'Automatización',
      description: 'Automatiza procesos repetitivos y ahorra tiempo. Integraciones entre sistemas y flujos de trabajo inteligentes.',
      icon: '⚙️',
      features: ['Ahorro de tiempo', 'Menos errores', 'Integraciones', 'Monitoreo']
    },
    {
      title: 'Seguridad',
      description: 'Protege tu negocio digital. Auditorías, backups automáticos y protección contra amenazas.',
      icon: '🔒',
      features: ['Backups automáticos', 'Protección de datos', 'Monitoreo 24/7', 'Actualizaciones']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones completas para hacer crecer tu negocio en el mundo digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

