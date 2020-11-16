import { defineTerm, ResponseDefinition } from "./api/define";

export interface Definition {
  term: string | null;
  id: string;
  word: string;
  definition: string;
}

const score = (e: ResponseDefinition) => e.thumbs_up - e.thumbs_down;
const byScoreDesc = (a: ResponseDefinition, b: ResponseDefinition): number =>
  score(b) - score(a);

export const define = async (
  term: string | null
): Promise<Definition | null> => {
  const [topResponse] = (await defineTerm(term)).sort(byScoreDesc);

  if (topResponse == null) {
    return null;
  }

  return {
    term,
    id: String(topResponse.defid),
    word: topResponse.word,
    definition: topResponse.definition,
  };
};
