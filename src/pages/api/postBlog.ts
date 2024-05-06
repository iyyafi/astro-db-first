import type { APIRoute } from "astro";
import { db, Blog } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const title = data.get("title");
  const desc = data.get("desc");
  const body = data.get("body");
  const image = data.get("image");
  const published = new Date();

  // Validate the data - you'll probably want to do more than this
  if (!title || !desc || !body || !image) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 },
    );
  }

  // Do something with the data, then return a success response
  await db.insert(Blog).values({
    title,
    desc,
    body,
    image,
    published,
  });

  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 },
  );
};
