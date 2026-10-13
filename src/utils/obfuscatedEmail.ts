const reverse = (text: string): string => [...text].reverse().join("");

/**
 * Reverses then base64-encodes an address so it never appears as `name@domain` in source,
 * the built bundle, or the DOM. Not encryption: it only defeats pattern-matching scrapers.
 */
export const encodeEmail = (email: string): string => btoa(reverse(email));

export const decodeEmail = (encoded: string): string => reverse(atob(encoded));
