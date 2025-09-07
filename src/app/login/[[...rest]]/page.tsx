import { Spinner, VStack } from "@chakra-ui/react";
import { SignIn } from "@clerk/nextjs";

export default function Login() {
	return (
		<VStack as="main" bg="gray.100" minH={"100svh"} justify="center" gap={8}>
			<SignIn
				fallback={<Spinner height="28px" width="28px" />}
				signUpUrl="/register"
			/>
		</VStack>
	);
}
