import { Definition } from "./index";

const buildResult = (def: Definition) => `${def.word}: ${def.definition}`;

const buildError = (query: string | null) =>
  query ? `${query}: no results found` : `unable to get random definition`;

export const report = (query: string | null, def: Definition | null): void =>
  def ? console.log(buildResult(def)) : console.error(buildError(query));
