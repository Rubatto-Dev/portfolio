const translations = {
  pt: {
    nav_about:    'Sobre',
    nav_projects: 'Projetos',
    nav_contact:  'Contato',

    hero_cta_projects: 'Ver Projetos',
    hero_cta_contact:  'Contato',
    hero_role:   'Desenvolvedor Python Pleno · Jr Web/Front & Automações',

    about_title:        'Sobre',
    about_whoami_output: 'Desenvolvedor Python Pleno | Jr Web/Front & Automações',
    about_bio:          'Desenvolvedor com foco em backend Python e automações com n8n. Construo APIs, pipelines de dados e integrações que funcionam de verdade — sem over-engineering.',

    projects_title: 'Projetos',
    proj1_name: 'Agendamento Barbearia',
    proj1_desc: 'Sistema de agendamento para barbearias com gestão de clientes e horários.',
    proj2_name: 'Bot de Notificações',
    proj2_desc: 'Automação de notificações via webhook com integrações de mensageria.',
    proj3_name: 'Dashboard de Métricas',
    proj3_desc: 'Pipeline de dados com visualização em tempo real.',

    btn_github: 'GitHub',

    contact_title: 'contato --open',

    footer_text: 'Feito com HTML, CSS & JS · Guilherme Rubatto © 2026',
  },
  en: {
    nav_about:    'About',
    nav_projects: 'Projects',
    nav_contact:  'Contact',

    hero_cta_projects: 'View Projects',
    hero_cta_contact:  'Contact',
    hero_role:     'Python Mid-level Developer · Jr Web/Front & Automation',

    about_title:        'About',
    about_whoami_output: 'Python Mid-level Developer | Jr Web/Front & Automation',
    about_bio:          'Developer focused on Python backend and n8n automations. I build APIs, data pipelines, and integrations that actually work — no over-engineering.',

    projects_title: 'Projects',
    proj1_name: 'Barbershop Scheduling',
    proj1_desc: 'Scheduling system for barbershops with client and appointment management.',
    proj2_name: 'Notification Bot',
    proj2_desc: 'Notification automation via webhooks with messaging platform integrations.',
    proj3_name: 'Metrics Dashboard',
    proj3_desc: 'Data pipeline with real-time visualization.',

    btn_github: 'GitHub',

    contact_title: 'contact --open',

    footer_text: 'Built with HTML, CSS & JS · Guilherme Rubatto © 2026',
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('lang', lang);
}

function initI18n() {
  const saved = localStorage.getItem('lang') || 'pt';
  applyLanguage(saved);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}
