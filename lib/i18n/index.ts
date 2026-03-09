import es from "./es";

export type Translations = typeof es;

const translations = { es } satisfies Record<string, Translations>;

export type Locale = keyof typeof translations;

export default translations;
