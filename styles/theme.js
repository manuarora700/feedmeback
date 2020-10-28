import React from 'react';
import { theme as chakraTheme } from '@chakra-ui/core';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700

  },
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <path
          d="M270.352 157.496c-1.493-4.238-5.489-7.89-9.973-7.89h-41.77l35.618-33.97c3.078-3.003 4.03-8.093 2.41-12.085-1.621-3.992-5.496-7.117-9.793-7.117h-72.219c-3.305 0-6.418 2.476-8.418 5.105l-60.344 79.914c-2.433 3.2-2.84 7.254-1.058 10.863 1.785 3.606 5.457 5.63 9.476 5.63h40.75c.137 0 .285.96.438 1.187L119.94 262.5c-2.488 4.43-1.492 10.125 2.38 13.41 1.968 1.668 4.402 2.57 6.835 2.57 2.356 0 4.703-.75 6.64-2.324l131.231-106.492c3.485-2.824 4.817-7.937 3.325-12.168zm0 0"
          fill="currentColor"
        />
      ),
      viewBox: '0 0 375 375'
    }

  }
};

export default theme;
