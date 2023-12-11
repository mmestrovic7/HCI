import { Post } from "../page";
import Link from "next/link";

interface Params {
  postId: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPost = async (id: string): Promise<Post> => {
  const data = await fetch(`${BASE_API_URL}/posts/${id}`);
  return data.json();
};

export default async function BlogPost({ params }: { params: Params }) {
  const post = await getPost(params.postId);

  return (
    <main>
      <h1>
        <span>Experience {post.id}:</span> {post.title}
      </h1>

      <p className="posts-body">{post.body}</p>
      <h2 className="p-14">
        <Link href="/fans/experiences">GO BACK</Link>
      </h2>
    </main>
  );
}
