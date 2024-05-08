import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

const prettyCodeOptions = {
  grid: false,
  langs: ['astro', 'html', 'css', 'js', 'jsx', 'ts', 'tsx', 'json', 'yaml', 'toml'],
  theme: 'dark-plus',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [
        {
          type: 'text',
          value: ' ',
        },
      ];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
  tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({ experimentalReactChildren: true }), mdx(), preact()],
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
  vite: {
    ssr: {
      noExternal: [/@astrojs/],
    },
  },
  renderers: ['@astrojs/renderer-solid'],
});
