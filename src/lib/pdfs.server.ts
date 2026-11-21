import fs from "node:fs";
import path from "node:path";
import {createHash} from "node:crypto";
import {PDF_XOR_KEY} from "./pdfConfig.ts";

export const PDF_CHUNK_SIZE = 64 * 1024; // 64 KB per .bin file

export const DOCS: Record<string, string> = {
    // For Planning and QA
    "curriculum-design": "curriculum-design.pdf",
    "syllabi-preparation": "syllabi-preparation.pdf",
    "instructional-materials": "instructional-materials.pdf",
    "test-administration": "test-administration.pdf",
    "classroom-management": "classroom-management.pdf",
    "internship-ojt": "internship-ojt.pdf",

    /*
    Put PDFs in /src/assets/pdfs!

    Add slugs and their corresponding PDFs here.

    For example:

    "curriculum-design": "curriculum-design.pdf",
    "syllabi-preparation": "syllabi-preparation.pdf",
    */
};

function makeHashId(seed: string): string {
    return createHash("sha256")
        .update(PDF_XOR_KEY)
        .update(seed)
        .digest("hex")
        .slice(0, 12);
}

export function getPdfPath(slug: string): string | undefined {
    const filename = DOCS[slug];
    return filename ? path.resolve("src/assets/pdfs", filename) : undefined;
}

export function getDocRef(slug: string): string | undefined {
    return DOCS[slug] ? makeHashId(`manifest:${slug}`) : undefined;
}

export function getChunkId(slug: string, part: number): string {
    return makeHashId(`shard:${slug}:${part}`);
}

export function getChunkCount(slug: string): number {
    const filePath = getPdfPath(slug);
    if (!filePath) return 0;
    const {size} = fs.statSync(filePath);
    return Math.ceil(size / PDF_CHUNK_SIZE);
}