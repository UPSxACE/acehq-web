"use client";
import { Center } from "@chakra-ui/react";
import { useAuth } from "@clerk/nextjs";
import type { ReactNode } from "react";

export default function SplashScreen({
	content,
	children,
}: {
	content: ReactNode;
	children: ReactNode;
}) {
	const { isLoaded } = useAuth();

	return (
		<>
			{!isLoaded && (
				<Center pos="fixed" bg="gray.100" w="100svw" h="100svh" zIndex={1000}>
					{content}
				</Center>
			)}
			{children}
		</>
	);
}
