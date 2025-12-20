/** biome-ignore-all lint/style/useConsistentTypeDefinitions: needed for i18next */
import type es from "../../../public/locales/es-ES/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof es;
    };
  }
}
