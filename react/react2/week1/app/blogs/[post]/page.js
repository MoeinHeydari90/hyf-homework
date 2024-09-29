"use client";
import { usePathname } from "next/navigation";

const capitalizeWords = (str) => {
    return str
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

const BlogPost = () => {
    const pathname = usePathname();
    const postTitle = pathname.split("/").pop();

    const formattedTitle = capitalizeWords(postTitle);

    return (
        <div>
            <h1>{formattedTitle}</h1>
        </div>
    );
};

export default BlogPost;
