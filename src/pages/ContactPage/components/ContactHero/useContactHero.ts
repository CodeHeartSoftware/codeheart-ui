import { ENCODED_CONTACT_EMAIL } from "@/constants/contact";
import { ContactStrings } from "@/constants/strings";
import { buildMailtoHref, openMailClient } from "@/utils/mailto";
import { decodeEmail } from "@/utils/obfuscatedEmail";

/** Decodes the contact address only on click, so it never appears in the page itself. */
export function useContactHero() {
  const emailUs = () =>
    openMailClient(buildMailtoHref(decodeEmail(ENCODED_CONTACT_EMAIL), ContactStrings.hero.EMAIL_SUBJECT));

  return { emailUs };
}
