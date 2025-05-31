import React, { useState } from 'react';
import './Portfolio.css';

const categories = [
  'All',
  'Branding',
  'T-shirt',
  'Package',
  'Poster'
];

const works = [
  {
    title: 'Modern Branding',
    category: 'Branding',
    img: 'images/branding.jpg',
  },
  {
    title: 'T-shirt Art',
    category: 'T-shirt',
    img: 'images/tshirt.jpg',
  },
  {
    title: 'Package Design',
    category: 'Package',
    img: 'images/package.jpg',
  },
  {
    title: 'Creative Poster',
    category: 'Poster',
    img: 'images/poster.jpg',
  },
  {
    title: 'Brand Identity',
    category: 'Branding',
    img: 'images/branding1.jpg',
  },
  {
    title: 'Minimal Package',
    category: 'Package',
    img: 'images/ecom.jpg',
  },
  {
    title: 'Event T-shirt',
    category: 'T-shirt',
    img: 'images/t-shirt.jpg',
  },
  {
    title: 'Poster Art',
    category: 'Poster',
    img: 'images/ecom3.jpg',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [show, setShow] = useState(6);

  const filtered = active === 'All' ? works : works.filter(w => w.category === active);

  return (
    <section className="portfolio-section py-5">
      <div className="container">
        <h2 className="portfolio-title text-center mb-2">Portfolio</h2>
        <div className="portfolio-filters d-flex justify-content-center mb-4 gap-3 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              className={`portfolio-filter-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filtered.slice(0, show).map((work, idx) => (
            <div className="portfolio-card" key={work.title + idx}>
              <div className="portfolio-img-wrapper">
                <img src={work.img} alt={work.title} className="portfolio-img" loading="lazy" />
                <div className="portfolio-overlay">
                  <span className="portfolio-img-title">{work.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {show < filtered.length && (
          <div className="d-flex justify-content-center mt-4">
            <button className="portfolio-loadmore-btn" onClick={() => setShow(show + 3)}>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
