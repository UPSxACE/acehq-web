/** biome-ignore-all lint/performance/noImgElement: not worth optimizing dynamic images with NextJS */
"use client";
import {
	AvatarFallback,
	AvatarGroup,
	AvatarRoot,
	HStack,
	Icon,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { MouseEventHandler } from "react";
import { BiCommentDots } from "react-icons/bi";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import api from "@/api";
import type { Post as PostType } from "@/api/types";
import updateById from "@/lib/cache/updateById";
import short from "@/lib/short";
import { ClickableIconWrapper } from "./ClickableIconWrapper";
import { formatDateLabel } from "./formatDateLabel";
import { formatNumberLabel } from "./formatNumberLabel";
import { PostOptions } from "./PostOptions";

export default function Post({ post }: { post: PostType }) {
	const queryClient = useQueryClient();

	const { mutate: like } = useMutation({
		mutationKey: ["posts", "like"],
		mutationFn: () => {
			queryClient.setQueryData(["posts"], (old?: PostType[]) =>
				updateById(old, post.id, {
					...post,
					liked: true,
					likesCount: post.likesCount + 1,
				}),
			);
			return api.likePost(post.id);
		},
		onSuccess: () => queryClient.refetchQueries({ queryKey: ["posts"] }),
	});

	const { mutate: unlike } = useMutation({
		mutationKey: ["posts", "unlike"],
		mutationFn: () => {
			queryClient.setQueryData(["posts"], (old?: PostType[]) =>
				updateById(old, post.id, {
					...post,
					liked: false,
					likesCount: post.likesCount - 1,
				}),
			);
			return api.unlikePost(post.id);
		},
		onSuccess: () => queryClient.refetchQueries({ queryKey: ["posts"] }),
	});

	const router = useRouter();

	const handleVisitProfile: MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault();
		e.stopPropagation();
		// router.push(`/${post.profile.username}`); // TODO: enable after making profile page
	};

	const handleVisitPost: MouseEventHandler<HTMLDivElement> = (e) => {
		console.log("visit");
		e.preventDefault();
		e.stopPropagation();
		router.push(`/${post.profile.username}/${short.fromUUID(post.id)}`);
	};

	const handleToggleLike: MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (post.liked) return unlike();
		like();
	};

	// TODO: infinite scroll
	// TODO: optimize backend to serve images on the right size
	// TODO: add fallback to image

	return (
		<Stack
			onClick={handleVisitPost}
			cursor="pointer"
			as="button"
			textAlign="start"
			p={4}
			px={3}
			pt={3}
			gap={4}
			borderBottom="1px solid #CBD5E1"
		>
			<HStack>
				<HStack
					w="fit-content"
					className="group"
					role="button"
					onClick={handleVisitProfile}
				>
					<AvatarGroup>
						<AvatarRoot>
							<AvatarFallback name={post.profile.username} />
						</AvatarRoot>
					</AvatarGroup>
					<Stack gap={0.5}>
						<Text
							fontWeight="medium"
							mt={1.25}
							textDecor={{ _groupHover: "underline" }}
							textUnderlineOffset={2.5}
						>
							{post.profile.username}
						</Text>
						<Text color="gray.500/90" textStyle="sm">
							{formatDateLabel(new Date(post.createdAt))}
						</Text>
					</Stack>
				</HStack>
				<Stack ml="auto">
					<PostOptions post={post} />
				</Stack>
			</HStack>
			{post.text && <Text fontWeight="light">{post.text}</Text>}
			{post?.media?.[0] && (
				<Stack
					direction="row"
					width="full"
					bg="gray.200/60"
					rounded="lg"
					overflow="hidden"
					justify="center"
				>
					<img
						height="auto"
						width="100%"
						sizes="100vw"
						src={post.media[0].url}
						alt="uploaded by user"
						style={{
							objectFit: "cover",
							maxHeight: 400,
						}}
					/>
				</Stack>
			)}
			<HStack gap={5}>
				<HStack gap={1.5}>
					<ClickableIconWrapper
						hoverColor="red.100"
						onClick={handleToggleLike}
						boxProps={{ mb: 0.25 }}
					>
						<Icon
							pos="relative"
							fontSize="24px"
							color={post.liked ? "red.500" : "lightslategray/80"}
							textAlign="center"
							ml={0.25}
							mt={0.5}
							mb={0.5}
						>
							{post.liked ? <RiHeartFill /> : <RiHeartLine />}
						</Icon>
					</ClickableIconWrapper>
					<Text>{formatNumberLabel(post.likesCount)} Likes</Text>
				</HStack>
				<HStack gap={1.5}>
					<ClickableIconWrapper
						hoverColor="blue.100/70"
						onClick={handleVisitPost}
					>
						<Icon
							pos="relative"
							fontSize="22px"
							color="lightslategray/80"
							mt={0.5}
						>
							<BiCommentDots />
						</Icon>
					</ClickableIconWrapper>
					<Text
						textDecor={{ _hover: "underline" }}
						textUnderlineOffset={4.5}
						py={1}
					>
						{formatNumberLabel(post.commentsCount)} Comments
					</Text>
				</HStack>
			</HStack>
		</Stack>
	);
}
