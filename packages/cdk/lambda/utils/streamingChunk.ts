import { StreamingChunk } from 'generative-ai-use-cases-jp';

// JSONL Format
export const streamingChunk = (chunk: StreamingChunk): string => {
  return JSON.stringify(chunk) + '\n';
};
