import { HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "@/components/svg/brand/acehq_alt.svg";
import { auth0 } from "@/lib/auth0";
import { NAVBAR_HEIGHT } from "./constants";

export default async function Navbar() {
	const session = await auth0.getSession();

	return (
		<HStack
			h={`${NAVBAR_HEIGHT}px`}
			borderBottom="1px solid #CBD5E1"
			px="16px"
			position="sticky"
			top={0}
			bg="white"
			zIndex={50}
		>
			<HStack gap={1} w="full">
				<Icon asChild fontSize="32px">
					<Link href="/">
						<Logo />
					</Link>
				</Icon>
				{/* <Icon ml="auto" fontSize="28px" color="gray.700">
					<RiLogoutBoxRLine />
				</Icon> */}
				{session?.user && (
					<Text
						asChild
						ml="auto"
						textDecoration={{ _hover: "underline" }}
						textUnderlineOffset={5}
					>
						<a href="/auth/logout">Logout</a>
					</Text>
				)}
			</HStack>
		</HStack>
	);
}
