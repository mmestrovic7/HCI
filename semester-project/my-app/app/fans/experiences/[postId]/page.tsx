import { Post } from "../page";
import Link from  "next/link";

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
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      
      
      <h1 className="text-3xl font-bold p-10 capitalize">
        <span className="experience">Experience {post.id}:</span> {post.title}
      </h1>
      
      <p className="posts-body">{post.body}</p>
      <h2 className="goBack"><Link href="/fans/experiences">GO BACK</Link></h2>
    </main>
  );
}
