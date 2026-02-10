import WhatsAppButton from './WhatsAppButton';
import { CONFIG } from '../config/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">NexoDigital</h3>
            <p className="text-gray-400 leading-relaxed">
              Agencia digital profesional en Uruguay. Soluciones rápidas, confiables y profesionales 
              para pequeñas empresas.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href={`mailto:${CONFIG.CONTACT_EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  📧 {CONFIG.CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span>📍 {CONFIG.COUNTRY}</span>
              </li>
              <li className="pt-2">
                <WhatsAppButton 
                  message="Hola, me gustaría contactar con NexoDigital."
                  className="text-sm px-4 py-2"
                />
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Sistemas Personalizados
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Automatización
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Seguridad
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} NexoDigital. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            Hecho con ❤️ en Uruguay
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

