import path from 'node:path';
import type { RspressPlugin } from '@rspress/core';

export const pluginFontOpenSans = (): RspressPlugin => {
  return {
    name: 'plugin-font-open-sans',
    builderConfig: {
      source: {
        preEntry: [path.join(__dirname, '..', 'static', 'open-sans.css')],
      },
      performance: {
        // Preload fonts to avoid flickering caused by fonts swap
        preload: {
          type: 'all-chunks',
          include: [/open-sans\.\w+\.woff2/],
        },
      },
    },
  };
};
