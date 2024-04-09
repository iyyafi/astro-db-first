import type { APIRoute } from "astro";
import { db, Blog } from "astro:db";

export const GET: APIRoute = async ({ params, request }) => {
  try {
    const blogs = await db.select().from(Blog);
    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error instanceof Error ? error.message : "Terjadi kesalahan",
      }),
      { status: 400 },
    );
  }
};
