import Link from "next/link";

const Blogs = () => {
    const blogPosts = ["first-post", "second-post", "third-post"];

    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post}>
                        <Link href={`/blogs/${post}`}>{post.replace("-", " ")} </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blogs;
