
import Link from "next/link";
import PostClosed from "@/app/components/PostClosed/PostClosed";
import FilterButton from "@/app/components/FilterButton/FilterButton";
import "./experiences.css";
import { Post } from "@/app/content";
import { getPostsFromContentful} from "@/app/content";  
import "../../composition.css"
import Posts from "@/app/components/Posts/Posts";
export default async function Post() {
  const posts = await getPostsFromContentful(); 

  return (
    <main>
      <h1 className="mainTitle">FAN EXPERIENCES</h1>
     <Posts posts={posts} />
    </main>
  );
}
