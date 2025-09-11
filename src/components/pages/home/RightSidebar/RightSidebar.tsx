import { Stack } from "@chakra-ui/react";
import { CSS_FULLSCREEN, NO_SCROLL } from "@/components/ui/design-system";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";
import PopularPosts from "./PopularPosts";

export default function RightSidebar() {
	return (
		<Stack
			pos="sticky"
			top={`${NAVBAR_HEIGHT}px`}
			h={CSS_FULLSCREEN}
			overflowY="auto"
			css={NO_SCROLL}
			pl={8}
			pt={8}
			pb={8}
			pr={1}
		>
			<PopularPosts />
		</Stack>
	);
}
