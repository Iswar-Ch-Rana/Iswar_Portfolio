// Footer content and settings
// Import navigation from site.js to avoid duplication
import { site } from './site';

export const footer = {
  owner: "Iswar Chandra Rana",
  blurb:
    "Software Engineer specializing in Spring Boot and Node.js microservices, scalable backend systems, and cloud-native development.",
  // Use navigation items from site.js instead of duplicating
  quickLinks: site.navItems,
};