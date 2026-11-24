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
  },
  {
  id: 3,
  title: 'What Does a Licensed Paralegal Do for Landlord and Tenant Disputes?',
  excerpt: 'Learn what a landlord and tenant paralegal handles, when you need one, and how to find licensed paralegal services near you in Ontario.',
  date: 'October 15, 2026',
  image: '/images/posts/post-3.png',
  path: '/what-does-a-licensed-paralegal-do-for-landlord-and-tenant-disputes'
},
{
  id: 4,
  title: "What's the Process for Disputing a Traffic Ticket in Ontario?",
  excerpt: "Learn how to fight a traffic ticket in Ontario, when to hire a traffic ticket paralegal, and where to find public notary services for related paperwork.",
  date: "October 20, 2026",
  image: "/images/posts/post-4.png",
  path: "/whats-the-process-for-disputing-a-traffic-ticket-in-ontario"
},
{
  id: 5,
  title: "Small Claims Court Paralegal & Traffic Ticket Paralegal: When Do You Need Representation?",
  excerpt: "You may need legal representation when a Small Claims Court dispute becomes difficult to manage alone. A licensed paralegal can provide advice and representation for eligible matters.",
  date: "October 21, 2026",
  image: "/images/posts/post-5.jpeg",
  path: "/small-claims-court-paralegal-and-traffic-ticket-paralegal-when-do-you-need-representation"
},
{
  id: 6,
  title: "Need Public Notary Services or an Affordable Paralegal in Toronto?",
  excerpt: "You can get help from a public notary for your document needs or from a licensed paralegal for certain legal matters. In Ontario, notaries can certify true copies, witness document signings, and handle affidavits.",
  date: "October 21, 2026",
  image: "/images/posts/post-6.jpeg",
  path: "/need-public-notary-services-or-an-affordable-paralegal-in-toronto"
},
{
  id: 7,
  title: "What Can a Paralegal Handle for You in Toronto and Brampton?",
  excerpt: "A licensed paralegal Toronto residents hire can handle traffic tickets, Landlord and Tenant Board disputes, and eligible Small Claims Court cases. Ontario paralegals are regulated by the Law Society of Ontario.",
  date: "November 25, 2026",
  image: "/images/posts/post-7.jpeg",
  path: "/what-can-a-paralegal-handle-for-you-in-toronto-and-brampton"
},
{
  id: 10,
  title: "Do You Need a Notary, a Paralegal, or Both?",
  excerpt: "You need a notary public when a document must be certified, witnessed, or sworn. You need a paralegal when you face a dispute, a hearing, or a court claim. Many licensed paralegals in Ontario are also appointed notaries.",
  date: "November 25, 2026",
  image: "/images/posts/post-10.jpeg",
  path: "/do-you-need-a-notary-a-paralegal-or-both"
},
{
  id: 11,
  title: "What Should You Expect From a Free Paralegal Consultation?",
  excerpt: "A free consultation lets you explain your problem, learn your options, and understand costs before you commit. You leave knowing whether a paralegal can handle your matter and what happens next.",
  date: "November 25, 2026",
  image: "/images/posts/post-11.jpeg",
  path: "/what-should-you-expect-from-a-free-paralegal-consultation"
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