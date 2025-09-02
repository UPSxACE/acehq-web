import { Button, VStack } from "@chakra-ui/react";

export default function Cta() {
	return (
		<VStack gap={3}>
			<Button
				asChild
				mt={8}
				size="2xl"
				rounded="2xl"
				w="288px"
				fontSize="lg"
				bg={{ base: "#756EF3", _hover: "#615cb9" }}
			>
				<a href="/auth/login">Get Started</a>
			</Button>
			{/* <Text
				asChild
				textStyle="sm"
				fontSize="16px"
				fontWeight="light"
				color="gray.600"
				textDecoration={{ _hover: "underline" }}
				textUnderlineOffset={5}
			>
				<a href="/auth/login">Log In</a>
			</Text> */}
		</VStack>
	);
}
