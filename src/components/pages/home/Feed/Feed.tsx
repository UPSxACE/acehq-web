/** biome-ignore-all lint/performance/noImgElement: not worth optimizing dynamic images with NextJS */
"use client";
import {
	HStack,
	Icon,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	Stack,
	Text,
} from "@chakra-ui/react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import api from "@/api";
import repeat from "@/lib/react-utils/repeat";
import useQuery from "@/lib/useQuery";
import Post from "./Post";

export default function Feed() {
	const { data, error, isLoading } = useQuery({
		queryKey: ["posts"],
		queryFn: () => api.getPosts().then((res) => res.data),
	});

	if (error || isLoading || !data) {
		return repeat(
			5,
			<Stack p={4} px={3} pt={3} gap={4} borderBottom="1px solid #CBD5E1">
				<HStack>
					<SkeletonCircle size="40px" />
					<SkeletonText noOfLines={2} w="120px" />
				</HStack>
				<SkeletonText noOfLines={2} />
				<HStack gap={5}>
					<Skeleton h="24px" w="88px" />
					<Skeleton h="24px" w="88px" />
				</HStack>
			</Stack>,
		);
	}

	if (data.length === 0)
		return (
			<Stack flexGrow={1} justify="center" align="center">
				<Icon fontSize="44px" color="gray.500/80">
					<IoMdInformationCircleOutline />
				</Icon>
				<Text fontWeight="medium" color="gray.500/80" textStyle="lg">
					No content yet.
				</Text>
			</Stack>
		);

	return data.map((p) => <Post key={p.id} post={p} />);
}
