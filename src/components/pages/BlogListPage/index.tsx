"use client";
import type { Post } from "@/components/templates/BlogList";
import { BlogList } from "@/components/templates/BlogList";
import { useEffect, useState } from "react";

export const BlogListPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return <BlogList posts={posts} />;
};
