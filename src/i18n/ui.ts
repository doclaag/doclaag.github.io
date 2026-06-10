export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

const en = {
  'site.title': 'Luis Alonzo — Full Stack Developer',
  'site.description':
    'Full stack developer from Guatemala building web products with TypeScript, React, Astro, Laravel and Python.',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.blog': 'Blog',
  'nav.contact': 'Contact',
  'nav.skipToContent': 'Skip to content',
  'nav.toggleTheme': 'Toggle color theme',
  'nav.switchLang': 'Cambiar a español',
  'hero.greeting': 'whoami',
  'hero.role': 'Full Stack Developer',
  'hero.location': 'Guatemala',
  'hero.tagline':
    'I build web products end to end — typed APIs, fast frontends, and the infrastructure in between.',
  'hero.ctaProjects': 'View projects',
  'hero.ctaContact': 'Get in touch',
  'about.title': 'About',
  'about.p1':
    'I am a web developer from Guatemala with experience across the stack: TypeScript and React on the front, Laravel, Node.js and Python on the back. I care about shipping software that is fast, typed, and maintainable.',
  'about.p2':
    'Most of my recent work is full-stack product development — clinic management, point-of-sale systems, and internal tools — usually as paired TypeScript frontend and backend services.',
  'stack.title': 'Tech Stack',
  'stack.frontend': 'Frontend',
  'stack.backend': 'Backend',
  'stack.databases': 'Databases',
  'stack.tools': 'Tools',
  'projects.title': 'Projects',
  'projects.intro': 'Selected work from my GitHub — full products, built end to end.',
  'projects.updated': 'Updated',
  'projects.viewAll': 'All repositories',
  'experience.title': 'Experience',
  'experience.placeholder': 'Sample data',
  'experience.placeholderNote': 'This section shows placeholder entries until real data is added.',
  'experience.present': 'Present',
  'certs.title': 'Certifications',
  'blog.title': 'Blog',
  'blog.description': 'Notes on web development, TypeScript, and building things.',
  'blog.preview': 'Latest posts',
  'blog.readMore': 'Read post',
  'blog.viewAll': 'All posts',
  'blog.minutesRead': 'min read',
  'blog.backToBlog': 'Back to blog',
  'stats.title': 'GitHub Activity',
  'stats.repos': 'Public repositories',
  'stats.followers': 'Followers',
  'stats.languages': 'Most used languages',
  'stats.note': 'Fetched from the GitHub API at build time.',
  'contact.title': 'Contact',
  'contact.intro':
    'Currently open to new opportunities and interesting projects. The fastest way to reach me is email.',
  'contact.emailCta': 'Say hello',
  'footer.rights': 'Built with Astro. Source on',
  'notFound.title': 'Page not found',
  'notFound.body': 'The page you are looking for does not exist or was moved.',
  'notFound.back': 'Back to home',
} as const;

export type UIKey = keyof typeof en;

const es: Record<UIKey, string> = {
  'site.title': 'Luis Alonzo — Desarrollador Full Stack',
  'site.description':
    'Desarrollador full stack de Guatemala que construye productos web con TypeScript, React, Astro, Laravel y Python.',
  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.blog': 'Blog',
  'nav.contact': 'Contacto',
  'nav.skipToContent': 'Saltar al contenido',
  'nav.toggleTheme': 'Cambiar tema de color',
  'nav.switchLang': 'Switch to English',
  'hero.greeting': 'whoami',
  'hero.role': 'Desarrollador Full Stack',
  'hero.location': 'Guatemala',
  'hero.tagline':
    'Construyo productos web de extremo a extremo: APIs tipadas, frontends rápidos y la infraestructura intermedia.',
  'hero.ctaProjects': 'Ver proyectos',
  'hero.ctaContact': 'Contáctame',
  'about.title': 'Sobre mí',
  'about.p1':
    'Soy un desarrollador web de Guatemala con experiencia en todo el stack: TypeScript y React en el frontend; Laravel, Node.js y Python en el backend. Me importa entregar software rápido, tipado y mantenible.',
  'about.p2':
    'Mi trabajo reciente es desarrollo de producto full-stack — gestión de clínicas, puntos de venta y herramientas internas — normalmente como servicios TypeScript de frontend y backend en pareja.',
  'stack.title': 'Tecnologías',
  'stack.frontend': 'Frontend',
  'stack.backend': 'Backend',
  'stack.databases': 'Bases de datos',
  'stack.tools': 'Herramientas',
  'projects.title': 'Proyectos',
  'projects.intro': 'Trabajo seleccionado de mi GitHub: productos completos, construidos de extremo a extremo.',
  'projects.updated': 'Actualizado',
  'projects.viewAll': 'Todos los repositorios',
  'experience.title': 'Experiencia',
  'experience.placeholder': 'Datos de ejemplo',
  'experience.placeholderNote':
    'Esta sección muestra entradas de ejemplo hasta que se agreguen datos reales.',
  'experience.present': 'Actualidad',
  'certs.title': 'Certificaciones',
  'blog.title': 'Blog',
  'blog.description': 'Notas sobre desarrollo web, TypeScript y construir cosas.',
  'blog.preview': 'Últimas publicaciones',
  'blog.readMore': 'Leer publicación',
  'blog.viewAll': 'Todas las publicaciones',
  'blog.minutesRead': 'min de lectura',
  'blog.backToBlog': 'Volver al blog',
  'stats.title': 'Actividad en GitHub',
  'stats.repos': 'Repositorios públicos',
  'stats.followers': 'Seguidores',
  'stats.languages': 'Lenguajes más usados',
  'stats.note': 'Obtenido de la API de GitHub al momento del build.',
  'contact.title': 'Contacto',
  'contact.intro':
    'Actualmente abierto a nuevas oportunidades y proyectos interesantes. La forma más rápida de contactarme es por correo.',
  'contact.emailCta': 'Escríbeme',
  'footer.rights': 'Construido con Astro. Código en',
  'notFound.title': 'Página no encontrada',
  'notFound.body': 'La página que buscas no existe o fue movida.',
  'notFound.back': 'Volver al inicio',
};

export const ui = { en, es } as const;
