export function removeLocaleFromPathname(pathname: string, locale: string): string {
  const localePattern = new RegExp(`^\\/${locale}(\\\/|$)`) // Matches /locale or /locale/ at the start of the string
  return pathname.replace(localePattern, '/')
}
