import { Button, Icon, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "@/components/svg/brand/acehq.svg";

export default function Home() {
	return (
		<VStack as="main" bg="#ffffff" minH="100svh" justify="center" gap={8}>
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

function Cta() {
	return (
		<VStack gap={3}>
			<Button
				mt={8}
				asChild
				size="2xl"
				rounded="2xl"
				w="288px"
				fontSize="lg"
				bg={{ base: "#756EF3", _hover: "#615cb9" }}
			>
				<Link href="/register">Sign Up</Link>
			</Button>
			<Text
				asChild
				textStyle="sm"
				fontSize="16px"
				fontWeight="light"
				color="gray.600"
				textDecoration={{ _hover: "underline" }}
				textUnderlineOffset={5}
			>
				<Link href="/login">Log In</Link>
			</Text>
		</VStack>
	);
}
