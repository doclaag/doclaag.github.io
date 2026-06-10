import type { Lang } from '../i18n/ui';

export interface CuratedProject {
  title: string;
  description: Record<Lang, string>;
  /** GitHub repo names under github.com/doclaag, in display order. */
  repos: string[];
  tech: string[];
}

/**
 * Hand-curated featured projects. Frontend/backend pairs of the same
 * product are one card with multiple repo links. Live metadata (language,
 * last push) is merged in at build time by src/lib/github.ts.
 */
export const curatedProjects: CuratedProject[] = [
  {
    title: 'DICRI — Evidence Management',
    description: {
      en: 'Evidence management system for criminal investigation workflows: registration, chain of custody, and reporting. Separate frontend, backend, and a scripted deployment setup.',
      es: 'Sistema de gestión de evidencias para procesos de investigación criminal: registro, cadena de custodia y reportes. Frontend y backend separados, con instalación automatizada.',
    },
    repos: ['dicri-frontend', 'dicri-backend', 'dicri-deploy'],
    tech: ['TypeScript', 'JavaScript', 'REST API'],
  },
  {
    title: 'The Valley Medical Clinic',
    description: {
      en: 'Full-stack platform for a medical clinic — patient and appointment management built as paired TypeScript frontend and backend services.',
      es: 'Plataforma full-stack para una clínica médica: gestión de pacientes y citas, construida como servicios TypeScript de frontend y backend.',
    },
    repos: ['the-valley-medical-clinic-frontend', 'the-valley-medical-clinic-backend'],
    tech: ['TypeScript', 'Full Stack'],
  },
  {
    title: 'DebtFlow',
    description: {
      en: 'Debt tracking and management application: record debts and payments and keep balances in sync, with a typed API backing the UI.',
      es: 'Aplicación de registro y gestión de deudas: registra deudas y pagos y mantiene los saldos al día, con una API tipada detrás de la interfaz.',
    },
    repos: ['debtflow-frontend', 'debtflow-backend'],
    tech: ['TypeScript', 'Full Stack'],
  },
  {
    title: 'MiSuper — Point of Sale',
    description: {
      en: 'Point-of-sale and store management suite. Started as a PHP POS and evolved into a modern TypeScript frontend/backend stack.',
      es: 'Suite de punto de venta y gestión de tienda. Comenzó como un POS en PHP y evolucionó a un stack moderno de frontend/backend en TypeScript.',
    },
    repos: ['misuper-frontend', 'misuper-backend', 'misuper-pos-php'],
    tech: ['TypeScript', 'PHP'],
  },
  {
    title: 'MediCalc',
    description: {
      en: 'Medical calculator utilities for clinical use — quick, typed implementations of common formulas.',
      es: 'Utilidades de cálculo médico para uso clínico: implementaciones rápidas y tipadas de fórmulas comunes.',
    },
    repos: ['MediCalc'],
    tech: ['TypeScript'],
  },
  {
    title: 'Secret Santa',
    description: {
      en: 'Gift-exchange organizer: create a group, draw names, and notify participants. TypeScript on both ends.',
      es: 'Organizador de intercambio de regalos: crea un grupo, sortea nombres y notifica a los participantes. TypeScript en ambos extremos.',
    },
    repos: ['secret-santa-frontend', 'secret-santa-backend'],
    tech: ['TypeScript', 'Full Stack'],
  },
];
