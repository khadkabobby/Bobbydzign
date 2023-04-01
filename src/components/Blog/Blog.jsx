import React from "react";
import "./Blog.css";
import { blog1, blog2, blog3 } from "../../assets/index";

const Blog = () => {
  return (
    <section className="pink" id="blog">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>
        <div className="content-container">
          <div className="post">
            <div className="tag">DAW</div>
            <a href="#">
              <img src={blog1} alt="daw" />
            </a>
            <a href="#">
              <h3 className="post-title">
                How to use Drum Machine in Logic Pro X
              </h3>
            </a>
          </div>
          <div className="post">
            <div className="tag">Mixing</div>
            <a href="#">
              <img src={blog2} alt="daw" />
            </a>
            <a href="#">
              <h3 className="post-title">How to Mix Guitars Effectively</h3>
            </a>
          </div>
          <div className="post">
            <div className="tag">Vox</div>
            <a href="#">
              <img src={blog3} alt="daw" />
            </a>
            <a href="#">
              <h3 className="post-title">
                The Real Power of Harmonies in Music Production
              </h3>
            </a>
          </div>
        </div>
        <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
