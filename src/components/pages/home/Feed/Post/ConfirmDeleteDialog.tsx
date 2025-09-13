"use client";
import {
	Button,
	CloseButton,
	DialogActionTrigger,
	DialogBackdrop,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogPositioner,
	DialogRoot,
	DialogTitle,
	Portal,
	Text,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type {
	Dispatch,
	MouseEventHandler,
	ReactNode,
	SetStateAction,
} from "react";
import api from "@/api";
import type { Post as PostType } from "@/api/types";
import { toaster } from "@/components/chakra/toaster";
import deleteById from "@/lib/cache/deleteById";

export default function ConfirmDeleteDialog({
	postId,
	open,
	setOpen,
	children,
}: {
	postId: string;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	children: ReactNode;
}) {
	const queryClient = useQueryClient();

	const { mutate: deletePost, isPending } = useMutation({
		mutationKey: ["posts", "delete"],
		mutationFn: () => api.deletePost(postId),
		onSuccess: () => {
			queryClient.setQueryData(["posts"], (old?: PostType[]) =>
				deleteById(old, postId),
			);
			queryClient.refetchQueries({ queryKey: ["posts", postId] });
			toaster.success({
				title: "Post deleted successfully.",
			});
		},

		onSettled: () => setOpen(false),
	});

	const handleCancel = () => setOpen(false);

	const handleConfirm: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		e.stopPropagation();
		deletePost();
	};

	return (
		<DialogRoot open={open} onOpenChange={({ open }) => setOpen(open)}>
			{children}
			<Portal>
				<DialogBackdrop />
				<DialogPositioner onClick={(e) => e.stopPropagation()}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Delete post</DialogTitle>
						</DialogHeader>
						<DialogBody>
							<Text>
								Are you sure you want to delete this post? This action is
								permanent and <strong>cannot be undone</strong>. Once deleted,
								the post will be permanently removed and cannot be recovered.
								Please confirm if you wish to proceed.
							</Text>
						</DialogBody>
						<DialogFooter>
							<DialogActionTrigger asChild>
								<Button variant="outline" onClick={handleCancel}>
									Cancel
								</Button>
							</DialogActionTrigger>
							<Button
								colorPalette="red"
								onClick={handleConfirm}
								loading={isPending}
							>
								Delete
							</Button>
						</DialogFooter>
						<DialogCloseTrigger asChild>
							<CloseButton size="sm" />
						</DialogCloseTrigger>
					</DialogContent>
				</DialogPositioner>
			</Portal>
		</DialogRoot>
	);
}
