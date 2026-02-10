import WhatsAppButton from '../components/WhatsAppButton';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary-900 to-primary-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Soluciones Digitales que
            <span className="text-primary-200"> Impulsan tu Negocio</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
            Desarrollo web, sistemas personalizados y automatización para pequeñas empresas en Uruguay.
            <br />
            <span className="text-lg md:text-xl">Rápido, confiable y profesional.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              message="Hola, me interesa conocer más sobre los servicios de NexoDigital."
              className="text-lg px-8 py-4"
            />
            <a
              href="#servicios"
              className="inline-flex items-center text-white border-2 border-white hover:bg-white hover:text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Ver Servicios
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-200 mb-2">Rápido</div>
              <p className="text-primary-100">Entregas en tiempo récord</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-200 mb-2">Confiable</div>
              <p className="text-primary-100">Sistemas estables y seguros</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-200 mb-2">Profesional</div>
              <p className="text-primary-100">Calidad empresarial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

