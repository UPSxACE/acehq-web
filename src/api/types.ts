export type Profile = {
    id: string;
    type: string;
    username: string;
    name: string;
    avatar: string | null;
}

export type Post = {
    id: string;
    text?: string;
    likesCount: number;
    commentsCount: number;
    createdAt: string;
    profile: Profile;
    liked?: boolean;
}