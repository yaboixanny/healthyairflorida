/**
 * ONE WAY AIR — Form & Phone Registry
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all forms and tracking numbers on this site.
 *
 * To add a new form or phone: add an entry here FIRST, then reference it in
 * the page's frontmatter using formId / phoneId.
 *
 * When building a new page, you will be asked:
 *   1. Which form?  → choose a formId below
 *   2. Which phone? → choose a phoneId below
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const FORMS = [
  {
    id: 'contact-form-fort-lauderdale',
    label: 'Fort Lauderdale',
    description: 'All South Florida / Broward County pages',
  },
  {
    id: 'contact-form-tampa',
    label: 'Tampa',
    description: 'All Tampa Bay area pages',
  },
  {
    id: 'contact-form-fort-myers',
    label: 'Fort Myers',
    description: 'All Southwest Florida / Fort Myers pages',
  },
  {
    id: 'contact-form-orlando',
    label: 'Orlando',
    description: 'All Central Florida / Orlando area pages',
  },
] as const;

export const PHONES = [
  {
    id: 'fort-lauderdale-main',
    label: 'Fort Lauderdale WhatConverts',
    number: '(239) 270-0809',
    description: 'Primary Fort Lauderdale tracking number',
  },
  {
    id: 'tampa-main',
    label: 'Tampa WhatConverts',
    number: '(239) 270-0809',
    description: 'Tampa tracking number — replace with real WhatConverts number before launch',
  },
  {
    id: 'fort-myers-main',
    label: 'Fort Myers WhatConverts',
    number: '(239) 270-0809',
    description: 'Fort Myers tracking number — replace with real WhatConverts number before launch',
  },
  {
    id: 'orlando-main',
    label: 'Orlando WhatConverts',
    number: '(239) 270-0809',
    description: 'Orlando tracking number — replace with real WhatConverts number before launch',
  },
] as const;

// Derived types — used in config.ts for Zod enum validation
export type FormId = typeof FORMS[number]['id'];
export type PhoneId = typeof PHONES[number]['id'];

export const FORM_IDS = FORMS.map(f => f.id) as [FormId, ...FormId[]];
export const PHONE_IDS = PHONES.map(p => p.id) as [PhoneId, ...PhoneId[]];

// Lookup helpers
export const getForm = (id: FormId) => FORMS.find(f => f.id === id);
export const getPhone = (id: PhoneId) => PHONES.find(p => p.id === id);
