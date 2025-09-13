import { useAuth } from "@clerk/nextjs";

export default function useUserInfo() {
    const { sessionClaims } = useAuth();

    return {
        id: sessionClaims?.id as string | null
    }
}