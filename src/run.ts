import { define } from "./lib";
import { report } from "./lib/report";

const runDefine = async (term: string | null): Promise<void> => {
  const def = await define(term);
  report(term, def);
};

export const run = async (args: string[]): Promise<void> =>
  args.length ? runDefine(args.join(" ")) : runDefine(null);
