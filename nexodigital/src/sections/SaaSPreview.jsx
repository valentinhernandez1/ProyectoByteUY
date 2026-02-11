import WhatsAppButton from '../components/WhatsAppButton';

const SaaSPreview = () => {
  return (
    <section id="plataforma" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block bg-primary-100 text-primary-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Próximamente
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Micro-SaaS Premium
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos desarrollando una plataforma SaaS diseñada específicamente para pequeñas empresas en Uruguay.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Qué es?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Una solución todo-en-uno que combina gestión de clientes, inventario, facturación y más, 
                todo en una plataforma simple y accesible desde cualquier dispositivo.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Para quién?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pequeñas empresas que necesitan gestionar su negocio de forma profesional sin la complejidad 
                y el costo de sistemas empresariales tradicionales.
              </p>
            </div>
          </div>
          
          <div className="bg-primary-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Características Principales:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Gestión de clientes y contactos</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Control de inventario</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Facturación electrónica</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Reportes y análisis</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Acceso desde móvil y web</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Soporte en español</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 mb-6">
              ¿Quieres ser notificado cuando esté disponible o participar en el programa beta?
            </p>
            <WhatsAppButton 
              message="Hola, me interesa conocer más sobre el Micro-SaaS que están desarrollando."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSPreview;

