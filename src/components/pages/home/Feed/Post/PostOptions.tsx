"use client";
import {
	IconButton,
	MenuContent,
	MenuItem,
	MenuPositioner,
	MenuRoot,
	MenuTrigger,
} from "@chakra-ui/react";
import { type MouseEventHandler, useState } from "react";
import { LuShare2, LuTrash2 } from "react-icons/lu";
import { RxDotsVertical } from "react-icons/rx";
import type { Post as PostType } from "@/api/types";
import { toaster } from "@/components/chakra/toaster";
import { CSS_ICONBUTTONFIX } from "@/components/ui/design-system";
import short from "@/lib/short";
import useUserInfo from "@/lib/useUserInfo";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";

export function PostOptions({ post }: { post: PostType }) {
	const [open, setOpen] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleOptionsClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setOpen((o) => !o);
	};

	const handleShare: MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault();
		e.stopPropagation();
		navigator.clipboard.writeText(
			`${window.location.origin}/${post.profile.username}/${short.fromUUID(post.id)}`,
		);
		toaster.info({ title: "Copied post URL to clipboard." });
	};

	const handleDelete: MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDialogOpen(open);
	};

	const { id } = useUserInfo();

	return (
		<ConfirmDeleteDialog
			postId={post.id}
			open={dialogOpen}
			setOpen={setDialogOpen}
		>
			<MenuRoot
				open={open}
				onOpenChange={({ open }) => setOpen(open)}
				positioning={{
					placement: "bottom-end",
					offset: { mainAxis: 0, crossAxis: 0 },
				}}
			>
				<MenuTrigger asChild>
					<IconButton
						as="div"
						role="button"
						variant="ghost"
						css={CSS_ICONBUTTONFIX}
						fontSize="16px"
						h="40px"
						w="40px"
						color="gray.700"
						onClick={handleOptionsClick}
					>
						<RxDotsVertical />
					</IconButton>
				</MenuTrigger>
				<MenuPositioner>
					<MenuContent>
						<MenuItem value="share" onClick={handleShare}>
							<LuShare2 />
							Share
						</MenuItem>
						{post.profile.id === id && (
							<MenuItem value="delete" onClick={handleDelete}>
								<LuTrash2 />
								Delete
							</MenuItem>
						)}
					</MenuContent>
				</MenuPositioner>
			</MenuRoot>
		</ConfirmDeleteDialog>
	);
}
