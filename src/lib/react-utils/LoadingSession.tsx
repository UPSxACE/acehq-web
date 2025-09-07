"use client";
import { Center, Icon } from "@chakra-ui/react";
import { useAuth } from "@clerk/nextjs";
import type { ReactNode } from "react";
import Logo from "@/components/svg/brand/acehq_alt.svg";

export default function SplashScreen({ children }: { children: ReactNode }) {
	const { isLoaded } = useAuth();
	return (
		<>
			{!isLoaded && (
				<Center pos="fixed" bg="gray.100" w="100svw" h="100svh" zIndex={1000}>
					<Icon fontSize="60px">
						<Logo />
					</Icon>
				</Center>
			)}
			{children}
		</>
	);
}
