/** biome-ignore-all lint/suspicious/noExplicitAny: generics are a mess to handle */
"use client";
import { useAuth } from "@clerk/nextjs";
import { useQuery as useTanstackQuery } from "@tanstack/react-query";

const useQuery: typeof useTanstackQuery = (o, q) => {
	const { isLoaded } = useAuth();

	return useTanstackQuery(
		{
			enabled: isLoaded,
			...o,
		},
		q,
	) as any;
};

export default useQuery;
