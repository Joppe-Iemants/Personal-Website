export const site = {
  name: 'Joppe Iemants',
  url: 'https://joppeiemants.be',
  description: 'Joppe Iemants is an Applied Computer Science student at Howest in Belgium, specializing in Artificial Intelligence. Explore his projects, experiments, and writing.',
  // Add verified public contact details here. Empty values are never rendered.
  github: 'https://github.com/Joppe-Iemants',
  linkedin: 'https://www.linkedin.com/in/joppe-iemants-8285442b1',
  email: 'joppe.iemants@gmail.com',
};

export const profiles = [
  { label: 'GitHub', url: site.github },
  { label: 'LinkedIn', url: site.linkedin },
  { label: 'Email', url: site.email ? `mailto:${site.email}` : '' },
].filter((profile) => profile.url);
