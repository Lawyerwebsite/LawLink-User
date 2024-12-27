import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Blog from "../Blog/Blog";
import Footer from "../Footer";

const BlogPage = () => {
  return (
    <div className="mt-[80px] w-full">
      <header>
        <NavbarComp />
      </header>
      <section>
        <Blog />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BlogPage;
