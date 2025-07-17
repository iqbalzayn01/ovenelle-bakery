import { Quattrocento, Quattrocento_Sans } from 'next/font/google';

const quattrocento = Quattrocento({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quattrocento',
});
const quattrocento_sans = Quattrocento_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quattrocento-sans',
});

export { quattrocento, quattrocento_sans };
