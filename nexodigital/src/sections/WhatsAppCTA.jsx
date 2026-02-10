import WhatsAppButton from '../components/WhatsAppButton';

const WhatsAppCTA = () => {
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para Hacer Crecer tu Negocio?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Habla con nosotros hoy mismo. Respondemos rápido y sin compromiso.
          <br />
          <span className="text-lg">La primera consulta es gratuita.</span>
        </p>
        <WhatsAppButton 
          message="Hola, me gustaría agendar una consulta gratuita para conocer cómo NexoDigital puede ayudar a mi negocio."
          className="text-lg px-10 py-5"
        />
        <p className="mt-6 text-primary-200 text-sm">
          📱 Respondemos en menos de 24 horas
        </p>
      </div>
    </section>
  );
};

export default WhatsAppCTA;

