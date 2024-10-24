import React, { useState } from 'react';
import './Instagram.css';

const posts = [
  { id: 16, image: '/images/post_16.png', fullImage: '/images/post_16_full.png', caption: 'One of PediaBright’s missions is to improve health literacy in the pediatric population. Stories have the power to do this and bridge communication...' },
  { id: 15, image: '/images/post_15.png', fullImage: '/images/post_15_full.png', caption: 'It is extremely important for kids living with CKD and special kidneys to focus on their diet to make sure they are doing their part to help their kidneys back for all they do. Book 3 of...' },
  { id: 14, image: '/images/post_14.png', fullImage: '/images/post_14_full.png', caption: 'TEAM MEMBER SPOTLIGHT: Nawal Cheema Nawal is the chief technology officer of Pediabright and co-illustrator of our first trilogy on chronic kidney disease. She also joined the team at...' },
  { id: 13, image: '/images/post_13.png', fullImage: '/images/post_13_full.png', caption: 'If you haven’t already, make sure to check out our CKD series on our Amazon Storefront and give us a follow right here on Instagram and our LinkedIn. And while you’re at it, why not...' },
  { id: 12, image: '/images/post_12.png', fullImage: '/images/post_12_full.png', caption: 'Book 3 of the CKD series follows Andrew through a day at school and also introduces a new friend, Riah! Click the link in the bio to reach our Amazon storefront!' },
  { id: 11, image: '/images/post_6.png', fullImage: '/images/post_6_full.png', caption: 'PediaBright is rooting for Suni Lee, a US Olympic Gymnast, as she takes the mat in Paris! Did you know that Suni has been diagnosed with CKD? Read more of her story at the link...' },
  { id: 10, image: '/images/post_11.png', fullImage: '/images/post_11_full.png', caption: 'TEAM MEMBER SPOTLIGHT: Aakash Nagarapu Aakash Nagarapu is the chief scientific officer of PediaBright and collects the research and clinical science...' },
  { id: 9, image: '/images/post_10.png', fullImage: '/images/post_10_full.png', caption: 'Book 2 of the CKD series focuses on the care team that a child with CKD might interact with on a day-to-day basis. Meet nephrologists, nurses, phlebotomists, an...' },
  { id: 8, image: '/images/post_9.png', fullImage: '/images/post_9_full.png', caption: 'TEAM MEMBER SPOTLIGHT: Lexi Kayser Lexi Kayser is the chief creative officer of PediaBright and author of our first trilogy on chronic kidney disease. She met the rest o...' },
  { id: 7, image: '/images/post_8.png', fullImage: '/images/post_8_full.png', caption: 'PediaBright was founded with a vision in mind to bridge communication gaps in pediatric healthcare between physicians, patients, and of course, kids! Help...' },
  { id: 6, image: '/images/post_7.png', fullImage: '/images/post_7_full.png', caption: 'They’re finally here! All three books are up for sale in print and E-book on Amazon! Click the link in our bio to go directly to our Amazon Storefront...' },
  { id: 5, image: '/images/post_5.png', fullImage: '/images/post_5_full.png', caption: 'Discussing some final touches over a cup of coffee. We’re so excited to share these with you guys soon! . . . Thank @kaldis_coffee for having us!...' },
  { id: 4, image: '/images/post_4.png', fullImage: '/images/post_4_full.png', caption: 'We had a great team meeting last night finalizing designs for our first series! We’re so excited to share it with all of you real soon! Swipe for a sneak peek of book 1!' },
  { id: 3, image: '/images/post_3.png', fullImage: '/images/post_3_full.png', caption: 'Wishing our CEO @mweihmuller a very happy birthday 🥳 get to know Meghan below . PediaBright’s CEO, Meghan founded PediaBright with a mission to...' },
  { id: 2, image: '/images/post_2.png', fullImage: '/images/post_2_full.png', caption: 'pediabright.com is live everyone! Only a short wait until our first series on CKD hits the shelves! To anyone wondering why we founded PediaBright, please read our mission...' },
  { id: 1, image: '/images/post_1.png', fullImage: '/images/post_1_full.png', caption: 'Welcome to PediaBright’s insta!!! We are super excited to help children all over the world with our upcoming books. Our first series, the chronic kidney disease...' },
];

function Instagram() {
    const [visiblePosts, setVisiblePosts] = useState(6); // Load the first 6 posts initially
    const [selectedPost, setSelectedPost] = useState(null);

    const loadMorePosts = () => {
      setVisiblePosts(prev => Math.min(prev + 6, posts.length)); // Load more posts in increments of 6
    };

    const openPost = (post) => {
      setSelectedPost(post);
    };

    const closePost = () => {
      setSelectedPost(null);
    };

    const goToNextPost = () => {
      const currentIndex = posts.findIndex(post => post.id === selectedPost.id);
      if (currentIndex < posts.length - 1) {
        setSelectedPost(posts[currentIndex + 1]);
      }
    };

    const goToPreviousPost = () => {
      const currentIndex = posts.findIndex(post => post.id === selectedPost.id);
      if (currentIndex > 0) {
        setSelectedPost(posts[currentIndex - 1]);
      }
    };

    // Close the modal when clicking outside of the modal content
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('post-modal')) {
        closePost();
      }
    };

    return (
      <div className="instagram-feed">
        <div className="profile-info">
          <img className="profile-picture" src="/images/instagram_profile_picture.png" alt="Profile" />
          <div className="profile-details">
            <h2>pedia.bright</h2>
            <h4>16 Posts • 92 Followers • 4 Following</h4>
            <h4>Bridging communication gaps in pediatric healthcare</h4>
            <a href="https://www.amazon.com/PediaBright-Chronic-Kidney-Disease-3-book-series/dp/B0CQS1KHSF" target="_blank" rel="noopener noreferrer">
              PediaBright CKD Series on Amazon
            </a>
          </div>
          <a href="https://www.instagram.com/pedia.bright" target="_blank" rel="noopener noreferrer" className="follow-button">
            <i className='fab fa-instagram' /> Follow
          </a>
        </div>

        <div className="posts-grid">
          {posts.slice(0, visiblePosts).map(post => (
            <div key={post.id} className="post" onClick={() => openPost(post)}>
              <img src={post.image} alt={`Post ${post.id}`} />
              <div className="hover-overlay">
                <p>{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {visiblePosts < posts.length && (
          <button className="load-more" onClick={loadMorePosts}>Load More</button>
        )}

        {selectedPost && (
          <div className="post-modal" onClick={handleOutsideClick}>
            <div className="modal-content">
              <img src={selectedPost.fullImage} alt={`Full Post ${selectedPost.id}`} />
              <div className="modal-navigation">
                <button className="left-arrow" onClick={goToPreviousPost} disabled={selectedPost.id === posts[0].id}>&#8249;</button>
                <button className="right-arrow" onClick={goToNextPost} disabled={selectedPost.id === posts[posts.length - 1].id}>&#8250;</button>
              </div>
            </div>
            <button className="close-modal" onClick={closePost}>X</button>
          </div>
        )}
      </div>
    );
  }

  export default Instagram;
