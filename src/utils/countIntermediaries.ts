/** People between the first and last stop of a relay chain: everyone except the two ends. */
export const countIntermediaries = (chain: readonly unknown[]): number => Math.max(chain.length - 2, 0);
