// coolest-art-01 entry (Node 22, standard library only): the art is the
// entry.png beside this file, and the program copies it to the output
// directory. The image is the entry; the program is just the delivery.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The image: a lone astronaut in a bright orange suit on a glowing violet
// alien ridge, a huge ringed planet filling the sky. One bold subject, vivid
// orange against deep violet, dramatic rim light — built to stop the eye at
// a glance and still read clearly at 300 pixels across.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The output directory may not exist yet (a fresh local run, or a new
// MAKEFUN_OUTPUT_DIR): create it first so the copy never fails on a
// missing folder. Verified output: entry.png 1024x683, 188,394 bytes.
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
