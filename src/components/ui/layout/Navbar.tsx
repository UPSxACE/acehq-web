import { HStack, Icon, Text } from "@chakra-ui/react";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Logo from "@/components/svg/brand/acehq_alt.svg";
import { NAVBAR_HEIGHT } from "./constants";
import Logout from "./Logout";

export default async function Navbar() {
	const user = await currentUser();

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
				{user && <Logout />}
			</HStack>
		</HStack>
	);
}
