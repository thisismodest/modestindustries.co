import localFont from 'next/font/local';

export const osFont = localFont({
  variable: "--font-os",
  src: [
    {
      path: '../local-fonts/OS/OS-400.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../local-fonts/OS/OS-600.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../local-fonts/OS/OS-700.woff',
      weight: '700',
      style: 'normal',
    },
  ],
})