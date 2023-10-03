/* eslint-disable no-useless-catch */
import emailjs from '@emailjs/browser';

export const sendEmail = async (form, serviceId, templateId, publicKey) => {
  try {
    const response = await emailjs.sendForm(
      serviceId,
      templateId,
      form,
      publicKey
    );
    return response;
  } catch (error) {
    throw error;
  }
};
