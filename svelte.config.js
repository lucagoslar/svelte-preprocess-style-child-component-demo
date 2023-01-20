import adapter from '@sveltejs/adapter-auto';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { styleChildComponent } from 'svelte-preprocess-style-child-component';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: seqPreprocessor([vitePreprocess(), styleChildComponent()]),

	kit: {
		adapter: adapter()
	}
};

export default config;
