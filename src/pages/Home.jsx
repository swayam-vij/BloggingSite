import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import BlogPost from "../components/BlogPost";
function Home() {
  return (
    <Layout>
      <HeroSection />
      <BlogPost />
    </Layout>
  );
}

export default Home;
