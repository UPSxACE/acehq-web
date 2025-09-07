import { Button, Icon, Stack } from "@chakra-ui/react";
import Link from "next/link";
import type { ReactNode } from "react";
import { PiHouse } from "react-icons/pi";
import { CSS_FULLSCREEN } from "@/components/ui/design-system";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";

const ITEMS = [
	{
		id: "home",
		label: "Home",
		link: "/",
		icon: <PiHouse />,
	},
];

export default function LeftSidebar() {
	return (
		<Stack
			pos="sticky"
			top={`${NAVBAR_HEIGHT}px`}
			h={CSS_FULLSCREEN}
			pr={8}
			pt={4}
			pb={8}
			pl={1}
		>
			<Stack p={4}>
				{ITEMS.map((i) => {
					return (
						<Item key={i.id} label={i.label} link={i.link} icon={i.icon} />
					);
				})}
			</Stack>
			<Stack mt="auto"></Stack>
		</Stack>
	);
}

function Item({
	label,
	link,
	icon,
}: {
	label: string;
	link: string;
	icon: ReactNode;
}) {
	return (
		<Button
			asChild
			variant="ghost"
			justifyContent="start"
			textAlign="left"
			fontWeight="normal"
		>
			<Link href={link}>
				<Icon h="24px" w="24px">
					{icon}
				</Icon>
				{label}
			</Link>
		</Button>
	);
}
