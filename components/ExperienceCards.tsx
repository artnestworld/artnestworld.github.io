import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
export const experiences = [
 {slug:'stay',number:'01',name:'Stay',tag:'MAKE YOURSELF AT HOME',title:'A slower kind of stay.',description:'Settle into a cosy apartment where art lives on the walls and quiet moments feel like home.',image:'/images/stay.jpg',alt:'Sunlit room with warm natural textures',color:'peach',link:'Find your little escape'},
 {slug:'cafe',number:'02',name:'Cafe',tag:'SIP. SKETCH. STAY A WHILE.',title:'Good coffee. Open canvas.',description:'Something delicious, a fresh page, and no rush. A cafe where everyone is welcome to draw.',image:'/images/cafe.jpg',alt:'Coffee and pastries on a cafe table',color:'yellow',link:'Pull up a chair'},
 {slug:'walks',number:'03',name:'Walks',tag:'TAKE THE SCENIC ROUTE',title:'Wander with wonder.',description:'Explore familiar streets with fresh eyes. Sketchwalks, little discoveries, and stories along the way.',image:'/images/walks.jpg',alt:'Green hills and a landscape inviting exploration',color:'green',link:'Follow your curiosity'}
] as const;
export function ExperienceCards(){return <div className="experience-grid">{experiences.map(e=><Link href={`/${e.slug}`} className={`experience-card ${e.color}`} key={e.slug}><div className="card-image"><img src={e.image} alt={e.alt}/><span className="card-number">{e.number} /</span><span className="card-tag">{e.name}</span></div><div className="card-body"><span className="eyebrow">{e.tag}</span><h3>{e.title}</h3><p>{e.description}</p><div className="card-link">{e.link}<ArrowUpRight size={22}/></div></div></Link>)}</div>}

