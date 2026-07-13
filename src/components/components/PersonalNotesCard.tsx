import { cva } from "class-variance-authority";

const PNCardVariants = cva();

export default async function PersonalNotesCard() {
  return <div>personalnotes display</div>;
}

/**
 * to much complexity flying over in my mind
 *
 * 1. I wonder what if this component used in many features in different
 *    card format
 * 2. the naming of PersonalNotesCard doesn't represent the structure and usage
 *    of the card.
 *
 * remember:
 * every class or function, should have one single job
 * if two class seems like same, you don't have to make it generics, because
 * in long run development, the two case might have separate way and it will
 * ruin the design of component
 * - over complicated in the long run to manage two functionality for single
 *   component.
 * - remember the concept of single responsibility principle.
 */
