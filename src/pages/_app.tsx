import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react'
import { FC, useEffect } from 'react';

import 'tailwindcss/tailwind.css';
import '@styles/globals.css';

const Main: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <>
      <Analytics />
      <AnyComponent {...pageProps} />
    </>
  )
}

export default Main