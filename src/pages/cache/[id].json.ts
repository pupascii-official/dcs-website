import type {APIRoute, GetStaticPaths} from "astro";
import fs from "node:fs/promises";
import {xorChunk} from "../../lib/pdfConfig";
import {
    DOCS,
    PDF_CHUNK_SIZE,
    getChunkCount,
    getChunkId,
    getDocRef,
    getPdfPath,
} from "../../lib/pdfs.server";

type RouteProps =
    | { kind: "manifest"; shards: string[] }
    | { kind: "shard"; slug: string; part: number; shardId: string };

export const getStaticPaths: GetStaticPaths = () => {
    const paths: Array<{ params: { id: string }; props: RouteProps }> = [];

    for (const slug of Object.keys(DOCS)) {
        const count = getChunkCount(slug);
        const shards: string[] = [];

        for (let part = 0; part < count; part++) {
            const shardId = getChunkId(slug, part);
            shards.push(shardId);
            paths.push({
                params: {id: shardId},
                props: {kind: "shard", slug, part, shardId},
            });
        }

        const docRef = getDocRef(slug)!;
        paths.push({
            params: {id: docRef},
            props: {kind: "manifest", shards},
        });
    }

    return paths;
};

export const GET: APIRoute<RouteProps> = async ({props}) => {
    if (props.kind === "manifest") {
        return Response.json({
            v: 1,
            status: "ok",
            shards: props.shards,
        });
    }

    const filePath = getPdfPath(props.slug);
    if (!filePath) {
        return new Response("Not found", {status: 404});
    }

    const raw = await fs.readFile(filePath);
    const start = props.part * PDF_CHUNK_SIZE;
    const slice = raw.subarray(start, start + PDF_CHUNK_SIZE);
    const scrambled = xorChunk(slice, props.part);

    return Response.json({
        v: 1,
        checksum: props.shardId,
        payload: Buffer.from(scrambled).toString("base64"),
    });
};