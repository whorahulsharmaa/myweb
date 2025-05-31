import React, { useState } from 'react';
import './Blog.css';
import Navbar from './Navbar';
import Footer from './Footer';

const blogPosts = [
  {
    title: 'How to Build a Modern Portfolio in React',
    desc: 'Step-by-step guide to creating a visually stunning and responsive portfolio using React and Tailwind CSS.',
    img: 'images/branding.jpg',
    link: '#',
  },
  {
    title: 'UI/UX Trends for 2025',
    desc: 'Explore the latest design trends and best practices for creating engaging user experiences in 2025.',
    img: 'images/branding1.jpg',
    link: '#',
  },
  {
    title: 'Optimizing Web Performance',
    desc: 'Tips and techniques to make your web applications faster and more efficient.',
    img: 'images/package.jpg',
    link: '#',
  },
  {
    title: 'Branding for Startups',
    desc: 'Why branding matters and how to create a memorable brand identity for your startup.',
    img: 'images/poster.jpg',
    link: '#',
  },
  {
    title: 'Mastering CSS Grid & Flexbox',
    desc: 'A practical guide to mastering modern CSS layout techniques for responsive design.',
    img: 'images/ecom.jpg',
    link: '#',
  },
  {
    title: 'The Power of Minimalism in Design',
    desc: 'How minimalism can improve usability and aesthetics in your digital projects.',
    img: 'images/ecom2.jpg',
    link: '#',
  },
    {
    title: 'How to Build a Modern Portfolio in React',
    desc: 'Step-by-step guide to creating a visually stunning and responsive portfolio using React and Tailwind CSS.',
    img: 'images/branding.jpg',
    link: '#',
  },
  {
    title: 'UI/UX Trends for 2025',
    desc: 'Explore the latest design trends and best practices for creating engaging user experiences in 2025.',
    img: 'images/branding1.jpg',
    link: '#',
  },
  {
    title: 'Optimizing Web Performance',
    desc: 'Tips and techniques to make your web applications faster and more efficient.',
    img: 'images/package.jpg',
    link: '#',
  },
  {
    title: 'Branding for Startups',
    desc: 'Why branding matters and how to create a memorable brand identity for your startup.',
    img: 'images/poster.jpg',
    link: '#',
  },
  {
    title: 'Mastering CSS Grid & Flexbox',
    desc: 'A practical guide to mastering modern CSS layout techniques for responsive design.',
    img: 'images/ecom.jpg',
    link: '#',
  },
  {
    title: 'The Power of Minimalism in Design',
    desc: 'How minimalism can improve usability and aesthetics in your digital projects.',
    img: 'images/ecom2.jpg',
    link: '#',
  },
    {
    title: 'How to Build a Modern Portfolio in React',
    desc: 'Step-by-step guide to creating a visually stunning and responsive portfolio using React and Tailwind CSS.',
    img: 'images/branding.jpg',
    link: '#',
  },
  {
    title: 'UI/UX Trends for 2025',
    desc: 'Explore the latest design trends and best practices for creating engaging user experiences in 2025.',
    img: 'images/branding1.jpg',
    link: '#',
  },
  {
    title: 'Optimizing Web Performance',
    desc: 'Tips and techniques to make your web applications faster and more efficient.',
    img: 'images/package.jpg',
    link: '#',
  },
  {
    title: 'Branding for Startups',
    desc: 'Why branding matters and how to create a memorable brand identity for your startup.',
    img: 'images/poster.jpg',
    link: '#',
  },
  {
    title: 'Mastering CSS Grid & Flexbox',
    desc: 'A practical guide to mastering modern CSS layout techniques for responsive design.',
    img: 'images/ecom.jpg',
    link: '#',
  },
  {
    title: 'The Power of Minimalism in Design',
    desc: 'How minimalism can improve usability and aesthetics in your digital projects.',
    img: 'images/ecom2.jpg',
    link: '#',
  },
];

const POSTS_PER_PAGE = 6;
const MAX_PAGES = 10;

export default function Blog() {
  const [page, setPage] = useState(1);
  const totalPages = Math.min(Math.ceil(blogPosts.length / POSTS_PER_PAGE), MAX_PAGES);
  const paginatedPosts = blogPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <>
    <Navbar />
    <section className="blog-section-custom bg-white py-5">
      <div className="container">
        <nav className="blog-breadcrumb mb-4">
          <ol className="d-flex align-items-center list-unstyled mb-0 gap-2">
            <li><a href="/" className="blog-breadcrumb-link">Home</a></li>
            <li className="text-muted">/</li>
            <li className="blog-breadcrumb-current">Blog</li>
          </ol>
        </nav>
        <div className="text-center mb-5">
          <h1 className="blog-title mb-2">Our Blog</h1>
          <p className="blog-intro mb-0">Insights, tutorials, and stories on web development, design, and digital creativity. Stay inspired and keep building!</p>
        </div>
        <div className="row g-4">
          {paginatedPosts.map((post, idx) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={idx}>
              <div className="blog-card-custom flex-fill d-flex flex-column h-100">
                <img src={post.img} alt={post.title} className="blog-card-img" />
                <div className="p-4 d-flex flex-column flex-fill">
                  <h2 className="blog-card-title mb-2">{post.title}</h2>
                  <p className="blog-card-desc mb-3 flex-fill">{post.desc}</p>
                  <a href={post.link} className="blog-card-link mt-auto"><em>Read more &rarr;</em></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="blog-pagination d-flex justify-content-center align-items-center gap-2 mt-5">
            <button
              className="blog-pagination-btn"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              &laquo; Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`blog-pagination-btn${page === i + 1 ? ' active' : ''}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="blog-pagination-btn"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next &raquo;
            </button>
          </div>
        )}
      </div>
    </section>
    <Footer />
    </>
  );
}
