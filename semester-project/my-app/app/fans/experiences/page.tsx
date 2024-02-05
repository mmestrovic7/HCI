
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
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.sys.id}>
            <Link href={`experiences/${post.sys.id}`}>
              <PostClosed
                title={post.fields.title}
                rating={post.fields.rating}
                location={post.fields.location}
                date={post.fields.date}
                open={false}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
