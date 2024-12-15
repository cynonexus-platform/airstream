import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environmentMatchGlobs: [
            ['**\/*.node.test.ts', 'node'],
            ['**\/*.node.test.tsx', 'node'],
            ['**\/*.node.test.js', 'node'],
            ['**\/*.node.test.jsx', 'node'],
            ['**\/*.dom.test.ts', 'happy-dom'],
            ['**\/*.dom.test.tsx', 'happy-dom'],
            ['**\/*.dom.test.js', 'happy-dom'],
            ['**\/*.dom.test.jsx', 'happy-dom'],
        ],
        globals: true
    }
})