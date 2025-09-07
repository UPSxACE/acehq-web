import {
	AvatarFallback,
	AvatarGroup,
	AvatarRoot,
	Button,
	HStack,
	Stack,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { CSS_FULLSCREEN } from "@/components/ui/design-system";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";
import { POSTS } from "./data";

export default function RightSidebar() {
	const DESCENDING = (a: (typeof POSTS)[number], b: (typeof POSTS)[number]) =>
		b.likes - a.likes;

	return (
		<Stack
			pos="sticky"
			top={`${NAVBAR_HEIGHT}px`}
			h={CSS_FULLSCREEN}
			pl={8}
			pt={8}
		>
			<Stack
				p={4}
				gap={4}
				pb={0}
				border={"1px solid #CBD5E1"}
				rounded="lg"
				overflow="hidden"
			>
				<Text fontWeight="bold">Popular Posts</Text>
				<Stack gap={0}>
					{POSTS.sort(DESCENDING).map((p) => {
						return (
							<Stack
								bg={{ _hover: "gray.100" }}
								key={p.id}
								px={4}
								py={3}
								mx={-4}
								gap={1.5}
							>
								<HStack>
									<AvatarGroup h="32px" w="32px">
										<AvatarRoot h="32px" w="32px">
											<AvatarFallback fontSize="16px" name={p.user.username} />
										</AvatarRoot>
									</AvatarGroup>
									<HStack gap={3} w="full">
										<Text fontWeight="medium" textStyle="sm">
											{p.user.username}
										</Text>
										<Text ml="auto" color="gray.500/90" textStyle="sm">
											Sept 2
										</Text>
									</HStack>
								</HStack>
								{p.text && (
									<Text fontWeight="light" lineClamp={1} pb={0.5}>
										{p.text}
									</Text>
								)}
							</Stack>
						);
					})}
					<Button
						variant="plain"
						asChild
						bg={{ _hover: "gray.100" }}
						mx={-4}
						gap={2}
						p={4}
						py={3.5}
						fontWeight="normal"
						lineClamp={1}
						h="auto"
						color="blue.600"
					>
						<Link href="#">Show more</Link>
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
}
