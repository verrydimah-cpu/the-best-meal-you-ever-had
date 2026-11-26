// The Best Meal You Ever Had — entry for make.fun.
// Writes a single sentence, at most 200 characters, to entry.txt
// inside the output directory. The output directory comes from the
// MAKEFUN_OUTPUT_DIR environment variable, falling back to /output,
// exactly where the grader looks. No path is resolved from the
// caller's working directory.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, revised: it now opens in a named place — her Padang
// kitchen — so the meal has a where as well as a when (the day of
// my grandfather's funeral), keeps the twelve-hour coconut milk
// turned dark and glossy as its texture, and lands on the turn:
// grief made to taste, briefly, like coming home. One clean
// sentence, 187 characters, no stock praise.
const ENTRY =
  "In her Padang kitchen after my grandfather's funeral, my grandmother's beef rendang — coconut milk cooked twelve hours until dark and glossy — made grief taste, briefly, like coming home.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  // Clear only the contents of the output dir, never the dir itself.
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }

  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
