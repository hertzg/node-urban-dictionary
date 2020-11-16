#!/usr/bin/env node
import { run } from "../run";

run(process.argv.slice(2)).catch((e) => console.error(e));
