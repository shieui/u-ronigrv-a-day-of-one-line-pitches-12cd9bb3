import { mkdirSync, writeFileSync } from "node:fs";

// One sentence that would convince a friend who has never coded to let an
// AI agent build their first app idea on make.fun. The text is a fixed
// constant and the program takes no input, reads no clock and makes no
// random choice, so every run writes byte-identical output.
const SENTENCE =
  "Just tell me your app idea in plain words and let an AI agent on make.fun build it for you — it costs nothing to try, you stay in charge of every change, and tonight you could be tapping an app that began as one sentence from you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
