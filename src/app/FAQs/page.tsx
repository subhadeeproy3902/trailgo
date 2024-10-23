"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { FAQs } from "./FAQs";
import { posts as initialPosts } from "./Posts";
import "./Posts.css";

interface Post {
    id: number;
    title: string;
    content: string;
}

const FAQForum: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const [newPost, setNewPost] = useState<Post>({
        id: 0,
        title: "",
        content: "",
    });
    const [expandedPosts, setExpandedPosts] = useState<number[]>([]);
    const [sortAsc, setSortAsc] = useState(true);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Updated color palette to match the homepage
    const cardColors = [
        "bg-orange-100",
        "bg-orange-200",
        "bg-orange-300",
        "bg-orange-400",
    ];

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newPost.title && newPost.content) {
            setPosts([{ id: posts.length + 1, ...newPost }, ...posts]);
            setNewPost({ id: 0, title: "", content: "" });
        }
    };

    const toggleExpand = (id: number) => {
        setExpandedPosts(
            expandedPosts.includes(id)
                ? expandedPosts.filter((postId) => postId !== id)
                : [...expandedPosts, id]
        );
    };

    const handleSort = () => {
        const sortedPosts = [...posts].sort((a, b) =>
            sortAsc
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title)
        );
        setPosts(sortedPosts);
        setSortAsc(!sortAsc);
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen p-8 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center pt-6">
                    <h1 className="text-5xl font-extrabold text-gray-900">
                        Trailgo FAQs & Forum
                    </h1>
                    <div className="mt-2 mx-auto w-54 h-1 bg-gradient-to-r from-orange-400 to-green-400 rounded"></div>
                </div>

                {/* FAQs Section */}
                <section className="mb-16 mt-10">
                    <h2 className="text-4xl font-semibold text-orange-600 mb-8 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {FAQs.map((faq, index) => (
                            <div
                                key={index}
                                className={`transition duration-300 ease-in-out rounded-lg shadow-md ${
                                    cardColors[index % cardColors.length]
                                }`}
                            >
                                <button
                                    className="w-full text-left p-5 text-gray-700 rounded-lg focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold">
                                            {faq.question}
                                        </span>
                                        {/* Icon rotation logic */}
                                        <span
                                            className={`text-3xl transition-transform duration-300 transform ${
                                                activeIndex === index
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        >
                                            +
                                        </span>
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        activeIndex === index
                                            ? "max-h-96"
                                            : "max-h-0"
                                    }`}
                                >
                                    <div className="p-5 bg-white rounded-lg mt-2 shadow-inner text-gray-600 border-l-4 border-orange-400">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Forum Section */}
                <section>
                    <h2 className="text-4xl font-semibold text-orange-600 mb-8 text-center">
                        Forum
                    </h2>

                    <form className="mb-12" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4">
                            <input
                                type="text"
                                name="title"
                                className="p-4 w-full border border-orange-400 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition duration-300"
                                placeholder="Post title"
                                value={newPost.title}
                                onChange={handleInputChange}
                                required
                            />
                            <textarea
                                name="content"
                                className="p-4 w-full h-32 border border-orange-400 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition duration-300"
                                placeholder="Post content"
                                value={newPost.content}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out"
                        >
                            Submit Post
                        </button>
                    </form>

                    {/* All Posts */}
                    <section>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-4xl font-semibold text-orange-600">
                                All Posts
                            </h2>
                            <button
                                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                                onClick={handleSort}
                            >
                                Sort
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <div
                                    key={post.id}
                                    className="relative w-full perspective transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="relative w-full h-64 transform-style-3d transition-transform duration-700 hover:rotate-y-180">
                                        {/* Front of the Card */}
                                        <div
                                            className={`absolute inset-0 p-6 rounded-lg shadow-lg backface-hidden flex items-center justify-center overflow-hidden transition duration-300 ease-in-out hover:shadow-xl ${
                                                cardColors[
                                                    index % cardColors.length
                                                ]
                                            }`}
                                        >
                                            <h3 className="text-xl font-semibold text-gray-900 text-center">
                                                {post.title}
                                            </h3>
                                        </div>

                                        {/* Back of the Card */}
                                        <div
                                            className={`absolute inset-0 p-6 rounded-lg shadow-lg rotate-y-180 backface-hidden overflow-hidden transition duration-300 ease-in-out hover:shadow-xl bg-white`}
                                        >
                                            <p
                                                className={`text-gray-700 transition-all duration-300 ${
                                                    expandedPosts.includes(
                                                        post.id
                                                    )
                                                        ? "h-auto"
                                                        : "h-16 overflow-hidden"
                                                }`}
                                            >
                                                {post.content}
                                            </p>
                                            {post.content.length > 150 && (
                                                <button
                                                    className="text-orange-600 mt-2 underline hover:text-orange-700 transition duration-200"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleExpand(post.id);
                                                    }}
                                                >
                                                    {expandedPosts.includes(
                                                        post.id
                                                    )
                                                        ? "Show Less"
                                                        : "Read More"}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default FAQForum;
