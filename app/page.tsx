import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { instagram } from '@/components/SiteChrome';
import './home.css';

const destinations = [
  { slug: 'stay', title: 'Stay', description: 'An apartment to settle into. Space to pause, unwind, and feel at home.', image: '/images/stay.jpg', alt: 'Warm apartment interior — illustrative photograph' },
  { slug: 'cafe', title: 'Cafe', description: 'Food, coffee, and room to create. Bring your sketchbook and take your time.', image: '/images/cafe.jpg', alt: 'Cafe interior — illustrative photograph' },
  { slug: 'walks', title: 'Walks', description: 'Sketchwalks, stories, and new perspectives on the places around us.', image: '/images/walks.jpg', alt: 'Green landscape — illustrative photograph' },
];

export default function Home() {
  return (
    <main id="main" className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <h1 id="home-title">A place to stay.<br />A space to create.</h1>
          <p>Art, hospitality, and everyday discovery.<br />Welcome to ArtNestWorld.</p>
          <Link className="button primary" href="#explore">Explore the nest <ArrowUpRight size={19} /></Link>
        </div>
        <div className="home-hero-image">
          {/* Placeholder photo: replace this file with the client's approved homepage image. */}
          <img src="/images/home-placeholder.jpg" alt="Sunlit interior with natural materials — placeholder for the ArtNestWorld homepage photograph" fetchPriority="high" />
        </div>
      </section>

      <section id="explore" className="home-experiences" aria-labelledby="experiences-title">
        <h2 id="experiences-title">Discover ArtNestWorld.</h2>
        <div className="home-destinations">
          {destinations.map(destination => (
            <Link href={`/${destination.slug}`} className="home-destination" key={destination.slug}>
              <div className="home-destination-image"><img src={destination.image} alt={destination.alt} loading="lazy" /></div>
              <div className="home-destination-title"><h3>{destination.title}</h3><ArrowUpRight size={24} aria-hidden="true" /></div>
              <p>{destination.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="our-story" className="home-story" aria-labelledby="story-title">
        <h2 id="story-title">Art at the heart<br />of everyday life.</h2>
        <div>
          <p>Inspired by artist and architect Sandeepa Vithanage, ArtNestWorld brings together welcoming spaces, shared tables, and a curiosity for the world around us.</p>
          <p>Stay for a while, spend an afternoon creating, or discover somewhere new. There’s room for your own way of seeing.</p>
          <a className="text-link" href={instagram} target="_blank" rel="noreferrer">Meet the artist <ArrowUpRight size={19} /></a>
        </div>
      </section>
    </main>
  );
}
