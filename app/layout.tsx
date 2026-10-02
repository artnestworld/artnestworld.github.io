import type { Metadata } from 'next';
import { Header, Footer } from '@/components/SiteChrome';
import './globals.css';
export const metadata: Metadata = { title: { default: 'ArtNestWorld — Stay. Sip. Wander.', template: '%s | ArtNestWorld' }, description: 'A little world of art, slow living and shared experiences. Discover ArtNestWorld Stay, Cafe and Walks.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /></body></html>; }
