export const PDF_XOR_KEY = new Uint8Array([0x67, 0x42, 0x58, 0x11, 0x84, 0xA5, 0x1F]);

export function xorChunk(
    input: Uint8Array,
    partIndex: number
): Uint8Array<ArrayBuffer> {
    const output = new Uint8Array(input.length);
    const keyLen = PDF_XOR_KEY.length;

    for (let i = 0; i < input.length; i++) {
        output[i] = input[i] ^ PDF_XOR_KEY[(i + partIndex) % keyLen];
    }

    return output;
}