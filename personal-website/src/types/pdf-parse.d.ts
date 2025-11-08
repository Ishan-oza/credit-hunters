declare module "pdf-parse" {
  export interface PdfParseResult {
    text: string;
    numpages?: number;
    info?: Record<string, unknown>;
    metadata?: unknown;
    version?: string;
  }

  type PdfInput = Buffer | Uint8Array | ArrayBuffer;

  function pdf(input: PdfInput, options?: Record<string, unknown>): Promise<PdfParseResult>;
  export default pdf;
}
