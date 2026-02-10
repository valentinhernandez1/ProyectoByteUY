const Differentiation = () => {
  const points = [
    {
      title: 'Enfoque en Resultados',
      description: 'No solo entregamos código, entregamos soluciones que generan valor real para tu negocio.',
      icon: '🎯'
    },
    {
      title: 'Comunicación Clara',
      description: 'Hablamos tu idioma. Sin tecnicismos innecesarios, explicamos todo de forma simple y directa.',
      icon: '💬'
    },
    {
      title: 'Precios Transparentes',
      description: 'Sin sorpresas. Presupuestos claros desde el inicio, sin costos ocultos ni facturas inesperadas.',
      icon: '💰'
    },
    {
      title: 'Soporte Continuo',
      description: 'Estamos contigo después del lanzamiento. Mantenimiento, actualizaciones y soporte cuando lo necesites.',
      icon: '🤝'
    },
    {
      title: 'Experiencia Local',
      description: 'Conocemos el mercado uruguayo. Entendemos las necesidades de las pequeñas empresas locales.',
      icon: '🇺🇾'
    },
    {
      title: 'Tecnología Moderna',
      description: 'Usamos las mejores herramientas y prácticas actuales, sin depender de tecnologías obsoletas.',
      icon: '⚡'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por Qué NexoDigital?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No somos solo otra agencia. Somos tu socio estratégico en el crecimiento digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;

