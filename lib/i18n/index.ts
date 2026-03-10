import es from "./es";
import en from "./en";

export type Translations = typeof es;

const translations = { es, en } satisfies Record<string, Translations>;

export type Locale = keyof typeof translations;

export default translations;
