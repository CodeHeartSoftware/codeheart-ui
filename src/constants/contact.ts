/**
 * The contact address, reversed and base64-encoded so it never appears as plain text in the
 * source, the bundle, or the initial page. Decode it with `decodeEmail` only in response to a
 * visitor's click. Never write the address in plain text anywhere in the repo.
 *
 * To change it, run:
 *   node -e 'console.log(Buffer.from([...process.argv[1]].reverse().join("")).toString("base64"))' you@example.com
 */
export const ENCODED_CONTACT_EMAIL = "dmVkLnJldnJhc21vdEBtb3Q=";
