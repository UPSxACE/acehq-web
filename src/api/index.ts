import axios from "axios";
import MissingEnv from "@/lib/error/MissingEnv";
import type { Post } from "./types";

const config = {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
};

if (!config.baseURL) {
    throw new MissingEnv("NEXT_PUBLIC_API_BASE_URL");
}

const instance = axios.create({
    baseURL: config.baseURL,
    timeout: 60000,
    withCredentials: true
});

const api = {
    getPosts: () =>
        instance.get<Post[]>("/v1/posts"),
    getPopularPosts: () =>
        instance.get<Post[]>("/v1/posts/popular"),
    likePost: (postId: string) => instance.post(`/v1/posts/${postId}/like`),
    unlikePost: (postId: string) => instance.post(`/v1/posts/${postId}/unlike`)
};

export default api;