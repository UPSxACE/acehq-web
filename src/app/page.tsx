import { HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import Cta from "@/components/pages/home/Cta";
import Sidebar from "@/components/pages/home/Sidebar";
import Logo from "@/components/svg/brand/acehq.svg";
import { CSS_FULLSCREEN } from "@/components/ui/design-system";
import Navbar from "@/components/ui/layout/Navbar";
import { auth0 } from "@/lib/auth0";
import Publish from "@/components/pages/home/Publish";

export default async function Home() {
	const session = await auth0.getSession();

	if (!session?.user) {
		return (
			<VStack as="main" bg="#ffffff" minH={"100svh"} justify="center" gap={8}>
				<VStack gap={2}>
					<Icon fontSize="100px">
						<Logo />
					</Icon>
					<Text textStyle="2xl" fontWeight="semibold" color="gray.900">
						AceHQ
					</Text>
				</VStack>
				<VStack gap={1} mt={1}>
					<Text textStyle="5xl" fontWeight="bolder">
						Built For All.
					</Text>
					<Text textStyle="5xl" fontWeight="bolder">
						Always Putting You First.
					</Text>
				</VStack>
				<Text textStyle="2xl" fontWeight="light" color="gray.600">
					Turning social media into something good for you.
				</Text>
				<Cta />
			</VStack>
		);
	}

	return (
		<>
			<Navbar />
			<Stack direction="row" height={CSS_FULLSCREEN} gap={0} justify="center">
				<Stack w="300px" borderRight={`1px solid #CBD5E1`} pos="relative">
					<Sidebar />
				</Stack>
				<Stack
					as="main"
					direction="row"
					h="100%"
					flexGrow={1}
					maxW="900px"
					pos="relative"
					justify="center"
				>
					<Stack flexShrink={1} w="100%">
						<Publish />
					</Stack>
				</Stack>
				<Stack
					w="300px"
					borderLeft={`1px solid #CBD5E1`}
					pos="relative"
				></Stack>
			</Stack>
		</>
	);
}
