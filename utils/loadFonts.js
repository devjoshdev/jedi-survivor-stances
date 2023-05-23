import { Fira_Code } from "next/font/google";
import { Poller_One } from "next/font/google";
const fira = Fira_Code({
    subsets: ['latin'],
    weight: ['300'],
    display: 'swap',
  });

const poller = Poller_One({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400']
});


export {fira, poller}