import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css'; 

const blogListAr = [
  {
    id: 1,
    title: 'When Should You Hire a Paralegal for a Landlord and Tenant Dispute in Ontario?',
    excerpt: 'A paralegal can help if your landlord-tenant dispute involves things like notices, rent, lease issues, maintenance problems, or an LTB hearing.',
    date: 'September 28, 2026',
    image: '/images/posts/post-1.jpg',
    path: '/when-should-you-hire-a-paralegal-for-a-landlord-and-tenant-dispute-in-ontario'
  },
  {
    id: 2,
    title: 'How Can a Paralegal Help With Landlord and Tenant Issues in Toronto?',
    excerpt: 'A paralegal can help Toronto landlords and tenants understand rental disputes and prepare for LTB proceedings. Licensed paralegals can represent clients before the Landlord and Tenant Board.',
    date: 'September 29, 2026',
    image: '/images/posts/post-2.jpg',
    path: '/how-can-a-paralegal-help-with-landlord-and-tenant-issues-in-toronto'
  }
];

const BlogList = () => {
  return (
    <div className="custom-blog-container">
      <div className="blog-grid">
        {blogListAr.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-image-wrapper">
              <img 
                src={post.image} 
                alt={post.title} 
                className="blog-card-image"
              />
            </div>
            
            <div className="blog-card-content">
              <div>
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                </div>
                
                <h2 className="blog-card-title">
                  <Link to={post.path} className="blog-card-link">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="blog-card-excerpt">
                  {post.excerpt}
                </p>
              </div>

              <div className="blog-card-footer">
                <Link to={post.path} className="blog-card-readmore">
                  Read Article &rarr;
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;