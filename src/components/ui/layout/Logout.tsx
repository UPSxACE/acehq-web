"use client";

import { Button } from "@chakra-ui/react";
import { useAuth } from "@clerk/nextjs";

export default function Logout() {
	const { signOut } = useAuth();

	const handleSignOut = () => signOut({ redirectUrl: "/" });

	return (
		<Button
			p={0}
			h="auto"
			fontSize="md"
			variant="plain"
			ml="auto"
			textDecoration={{ _hover: "underline" }}
			textUnderlineOffset={5}
			onClick={handleSignOut}
		>
			Logout
		</Button>
	);
}
