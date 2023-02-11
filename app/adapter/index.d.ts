import { Adapter } from "@sveltejs/kit";

export interface AdapterOptions {
	pages?: string;
	assets?: string;
	fallback?: string;
	precompress?: boolean;
	strict?: boolean;
	policy?: string;
	viewport?: string;
	safearea?: boolean;
	platform?: string;
}

export default function plugin(options?: AdapterOptions): Adapter;
