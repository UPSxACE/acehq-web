/** biome-ignore-all lint/performance/noImgElement: not worth optimizing dynamic images with NextJS */
import {
	AvatarFallback,
	AvatarGroup,
	AvatarRoot,
	HStack,
	Icon,
	Stack,
	Text,
} from "@chakra-ui/react";
import { BiCommentDots } from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";

export default function Feed() {
	const posts = [
		{
			id: 3,
			user: {
				avatar: null,
				username: "Admin",
			},
			text: "Woke up in a good mood today :)",
			media: null,
			likes: 0,
			comments: 0,
			date: "9:01AM • 02/09/2025",
			liked: false,
		},
		{
			id: 2,
			user: {
				avatar: null,
				username: "Admin",
			},
			text: "A new beginning 😄",
			media: [{ type: "image", url: "/example/picture.jpg" }],
			likes: 0,
			comments: 0,
			date: "4:52PM • 01/09/2025",
			liked: false,
		},
		{
			id: 1,
			user: {
				avatar: null,
				username: "Admin",
			},
			text: "Hello world!",
			media: [],
			likes: 1,
			comments: 0,
			date: "4:50PM • 01/09/2025",
			liked: true,
		},
	];

	if (posts.length === 0)
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

	// TODO: infinite scroll
	// TODO: optimize backend to serve images on the right size
	// TODO: add fallback to image

	return (
		<>
			{posts.map((p) => {
				return (
					<Stack
						key={p.id}
						p={4}
						px={3}
						pt={3}
						gap={4}
						borderBottom="1px solid #CBD5E1"
					>
						<HStack>
							<AvatarGroup>
								<AvatarRoot>
									<AvatarFallback name={p.user.username} />
								</AvatarRoot>
							</AvatarGroup>
							<Stack gap={0.5}>
								<Text fontWeight="medium" mt={1.25}>
									{p.user.username}
								</Text>
								<Text color="gray.500/90" textStyle="sm">
									{p.date}
								</Text>
							</Stack>
						</HStack>
						{p.text && <Text fontWeight="light">{p.text}</Text>}
						{p?.media?.[0] && (
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
									src={p.media[0].url}
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
								<Icon
									fontSize="24px"
									color={p.liked ? "red.500" : "lightslategray/80"}
								>
									{p.liked ? <RiHeartFill /> : <RiHeartLine />}
								</Icon>
								<Text>{p.likes} Likes</Text>
							</HStack>
							<HStack gap={1.5}>
								<Icon fontSize="22px" color="lightslategray/80" mt={0.5}>
									<BiCommentDots />
								</Icon>
								<Text>{p.comments} Comments</Text>
							</HStack>
						</HStack>
					</Stack>
				);
			})}
		</>
	);
}
