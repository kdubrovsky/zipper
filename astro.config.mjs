import { defineConfig } from 'astro/config';
import { svgSpritemap } from 'vite-plugin-svg-spritemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        plugins: [
            svgSpritemap({
                pattern: 'src/images/icons/**/*.svg',
                prefix: 'icon',
            })
        ]
    }
});