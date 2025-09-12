import { cloneElement, isValidElement, type ReactNode } from "react";

export default function repeat(times: number, node: ReactNode) {
	return Array.from({ length: times }, (_, i) => i + 1).map((n) =>
		isValidElement(node) ? cloneElement(node, { key: n }) : node,
	);
}
