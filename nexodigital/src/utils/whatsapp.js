import { CONFIG } from '../config/constants';

// Utilidad para generar enlaces de WhatsApp con mensaje pre-llenado
export const generateWhatsAppLink = (message = '') => {
  const defaultMessage = `Hola, me interesa conocer más sobre los servicios de ${CONFIG.COMPANY_NAME}.`;
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const openWhatsApp = (message = '') => {
  window.open(generateWhatsAppLink(message), '_blank');
};

