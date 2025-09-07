import { Spinner, VStack } from "@chakra-ui/react";
import { SignUp } from "@clerk/nextjs";

export default function register() {
	return (
		<VStack as="main" bg="gray.100" minH={"100svh"} justify="center" gap={8}>
			<SignUp
				fallback={<Spinner height="28px" width="28px" />}
				signInUrl="/register"
			/>
		</VStack>
	);
}
