
import Link from "next/link";
import { getPostsFromContentful } from "@/app/content";
import "./post.css";
import PostClosed from "@/app/components/PostClosed/PostClosed";
import CustomButton from "@/app/components/CustomButton/CustomButton";


interface Params {
  postId: string;
}

export default async function Post({ params }: { params: Params }) {
  const posts = await getPostsFromContentful();
  const post = posts.find((p) => p.sys.id === params.postId);

  if (!post) {
    // Handle post not found
    return (
      <main>
        <h1>Post not found</h1>
        <Link href="/fans/experiences">GO BACK</Link>
      </main>
    );
  }

  return (
    <main>
      <div className="post">
        <PostClosed
          title={post.fields.title}
          rating={post.fields.rating}
          location={post.fields.location}
          date={post.fields.date}
          open={true}
        />
        <p className="postBody">{post.fields.post}</p>
        <div className="button">
        <CustomButton text="GO BACK" href="/fans/experiences" />
        </div>
      </div>
    </main>
  );
}