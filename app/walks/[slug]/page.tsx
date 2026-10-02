import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { articles } from '@/lib/articles';
import { instagram } from '@/components/SiteChrome';
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:articles.find(a=>a.slug===slug)?.title || 'Story'};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=articles.find(a=>a.slug===slug);if(!article)notFound();return <main id="main" className="article-page"><Link className="back-link" href="/walks"><ArrowLeft size={16}/> Back to Walks</Link><span className="eyebrow">{article.category} · {article.readTime}</span><h1>{article.title}</h1><p className="article-lead">{article.description}</p><div className="article-body">{article.paragraphs.map(p=><p key={p}>{p}</p>)}</div><a className="text-link" href={instagram} target="_blank" rel="noreferrer">Connect about a sketchwalk <ArrowUpRight size={18}/></a></main>}
