// Contact configuration and links used by Contact section and elsewhere.
// Import social links from profile.js to avoid duplication
import { profile } from './profile';

export const contact = {
  heading: "Contact Me",
  subheading: "Get In Touch",
  intro: "Feel free to contact me for any work or suggestions below.",
  // Use social links from profile.js instead of duplicating
  email: profile.social.email,
  linkedin: profile.social.linkedin,
  github: profile.social.github,
  // Endpoint for form submissions (FormSubmit, API Gateway, etc.)
  formEndpoint: "https://formsubmit.co/iswarchandrarana17@gmail.com",
  // UI copy
  successMessage: "Thank you for your message! I will get back to you soon.",
  errorMessage: "Sorry, there was an error sending your message. Please try again later.",
};
