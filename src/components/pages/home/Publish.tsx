"use client";

import { useUser } from "@auth0/nextjs-auth0";
import {
	AvatarFallback,
	AvatarGroup,
	AvatarRoot,
	Button,
	HStack,
	Icon,
	Stack,
	Textarea,
} from "@chakra-ui/react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { COLORS } from "@/components/ui/design-system";

export default function Publish() {
	const { user } = useUser();
	if (!user) return null;

	return (
		<Stack px={3} pt={1.5} pb={3.5} borderBottom="1px solid #CBD5E1" gap={1}>
			<Stack direction="row" gap={0}>
				<Stack pt={2}>
					<AvatarGroup>
						<AvatarRoot>
							<AvatarFallback name={user.nickname} />
						</AvatarRoot>
					</AvatarGroup>
				</Stack>
				<Textarea
					flexGrow={1}
					pt={2}
					pl={4}
					rows={1}
					border="none"
					outline="none"
					autoresize
					placeholder="What's on your mind?"
					fontSize="md"
				/>
			</Stack>
			<HStack>
				<Button
					ml="auto"
					rounded="full"
					pr={3}
					h="34px"
					bg={{ base: COLORS.main, _hover: COLORS.mainHovered }}
				>
					Post
					<Icon height="24px">
						<HiOutlinePaperAirplane />
					</Icon>
				</Button>
			</HStack>
		</Stack>
	);
}
