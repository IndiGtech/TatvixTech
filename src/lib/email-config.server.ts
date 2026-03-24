// This file should only be imported on the server-side
// The .server.ts suffix helps Next.js understand this is server-only

export function getEmailConfig() {
  // Use dynamic access to prevent bundling
  const env = process.env;
  
  return {
    host: env['SMTP_HOST'],
    user: env['SMTP_USER'],
    password: env['SMTP_PASSWORD'],
    port: env['SMTP_PORT'],
    contactEmail: env['CONTACT_EMAIL']
  };
}

export function validateEmailConfig() {
  const config = getEmailConfig();
  
  if (!config.host || !config.user || !config.password) {
    throw new Error('Missing required SMTP configuration');
  }
  
  return config;
}