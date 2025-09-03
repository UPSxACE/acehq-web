import { Auth0Client } from "@auth0/nextjs-auth0/server";
import { NextResponse } from "next/server";

export const auth0 = new Auth0Client({
    onCallback: async (err, ctx) => {
        if (err)
            return NextResponse.redirect(
                new URL(`/?error=${err.message}`, process.env.APP_BASE_URL)
            );

        return NextResponse.redirect(
            new URL(ctx.returnTo || "/", process.env.APP_BASE_URL)
        );
    }
});