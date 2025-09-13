import { Box, type BoxProps, Center } from "@chakra-ui/react";
import type { ComponentProps } from "react";

export function ClickableIconWrapper({
	hoverColor,
	children,
	className,
	boxProps,
	...props
}: ComponentProps<typeof Center> & {
	hoverColor: BoxProps["bg"];
	boxProps?: BoxProps;
}) {
	return (
		<Center
			h="24px"
			w="24px"
			pos="relative"
			cursor="pointer"
			role="button"
			{...props}
			className={className ? `group ${className}` : "group"}
		>
			<Box
				pos="absolute"
				h="36px"
				w="36px"
				rounded="full"
				bg={{
					_groupHover: hoverColor,
				}}
				{...boxProps}
			/>
			{children}
		</Center>
	);
}
