import { Text, VStack } from "@chakra-ui/react";
import { CSS_FULLSCREEN } from "@/components/ui/design-system";
import Navbar from "@/components/ui/layout/Navbar";

export default function NotFound() {
	return (
		<>
			<Navbar />
			<VStack
				as="main"
				bg="#ffffff"
				minH={CSS_FULLSCREEN}
				justify="center"
				gap={2}
			>
				<Text fontSize="9xl" fontWeight="semibold" color="gray.500/90">
					404
				</Text>
				<Text textStyle="3xl" fontWeight="semibold" color="gray.500/90">
					Page Not Found
				</Text>
			</VStack>
		</>
	);
}
