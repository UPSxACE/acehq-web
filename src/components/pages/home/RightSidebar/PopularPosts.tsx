"use client";

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
import api from "@/api";
import useQuery from "@/lib/useQuery";

export default function PopularPosts() {
	const { data, error, isLoading } = useQuery({
		queryKey: ["popular"],
		queryFn: () => api.getPopularPosts().then((res) => res.data),
	});

	if (error || isLoading || !data || data.length === 0) return null;

	return (
		<Stack
			flexShrink={0}
			p={4}
			gap={4}
			pb={0}
			border={"1px solid #CBD5E1"}
			rounded="lg"
			overflow="hidden"
		>
			<Text fontWeight="bold"> Popular Posts </Text>
			<Stack gap={0}>
				{data.slice(0, 3).map((p) => {
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
										<AvatarFallback fontSize="16px" name={p.profile.username} />
									</AvatarRoot>
								</AvatarGroup>
								<HStack gap={3} w="full">
									<Text fontWeight="medium" textStyle="sm">
										{p.profile.username}
									</Text>
									<Text ml="auto" color="gray.500/90" textStyle="sm">
										{formatDateLabel(new Date(p.createdAt))}
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
					<Link href="#"> Show more </Link>
				</Button>
			</Stack>
		</Stack>
	);
}

function formatDateLabel(date: Date) {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];

	const month = months[date.getMonth()];
	const day = date.getDate();

	return `${month} ${day}`;
}
