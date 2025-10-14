import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold">📝 Blog Post {postId}</h1>
      <p>This is the content for post ID: {postId}</p>
    </div>
  );
}
