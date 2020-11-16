import miniget from "miniget";

const URL_DEFINE = "https://api.urbandictionary.com/v0/define";
const URL_RANDOM = "https://api.urbandictionary.com/v0/random";

const buildUrl = (term?: string | null): string =>
  term != null
    ? `${URL_DEFINE}?term=${encodeURIComponent(term)}`
    : `${URL_RANDOM}`;

export interface ResponseDefinition {
  defid: number;
  word: string;
  definition: string;
  example: string;
  permalink: string;
  thumbs_down: number;
  thumbs_up: number;
  author: string;
}

interface Response {
  list: ResponseDefinition[];
}

export const defineTerm = async (
  term?: string | null
): Promise<ResponseDefinition[]> => {
  const json: Response = JSON.parse(await miniget(buildUrl(term)).text());
  return json.list;
};
