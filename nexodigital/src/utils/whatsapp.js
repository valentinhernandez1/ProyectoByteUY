import { CONFIG } from '../config/constants';

// Utilidad para generar enlaces de WhatsApp con mensaje pre-llenado
export const generateWhatsAppLink = (message = '') => {
  const encodedMessage = encodeURIComponent(message || 'Hola, me interesa conocer más sobre sus servicios.');
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const openWhatsApp = (message = '') => {
  window.open(generateWhatsAppLink(message), '_blank');
};

