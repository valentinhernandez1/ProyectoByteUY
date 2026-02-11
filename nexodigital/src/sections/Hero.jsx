import WhatsAppButton from '../components/WhatsAppButton';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary-900 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(15,23,42,0.97),rgba(15,23,42,0.9)),url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-100" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-300">
            Agencia digital · Uruguay
          </p>
          <h1 className="font-display text-display font-bold tracking-tight text-white">
            Web, sistemas y automatización para empresas que quieren crecer
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-200 sm:text-xl">
            Desarrollamos y mantenemos lo que tu negocio necesita: sitios que venden, herramientas que ordenan el día a día y procesos que no dependen de una sola persona.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppButton
              message="Hola, me interesa conocer más sobre los servicios de Byte UY."
              className="text-base"
            />
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-200 hover:text-white transition-colors"
            >
              Ver qué hacemos
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-sm text-primary-400">
            Respuesta en menos de 24 horas · Primera consulta sin cargo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
