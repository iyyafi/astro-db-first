import type { APIRoute } from "astro";
import { db, Blog } from "astro:db";

export const GET: APIRoute = async ({ params, request }) => {
  try {
    const blogs = await db.select().from(Blog);
    // return new Response(JSON.stringify(blogs), { status: 200 });
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(new Response(JSON.stringify(blogs), { status: 200 })),
        3000,
      );
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error instanceof Error ? error.message : "Terjadi kesalahan",
      }),
      { status: 400 },
    );
  }
};

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

  if (
    typeof title !== "string" ||
    typeof desc !== "string" ||
    typeof body !== "string" ||
    typeof image !== "string"
  ) {
    return new Response(
      JSON.stringify({
        message: "Type error",
      }),
      { status: 400 },
    );
  }

  // Do something with the data, then return a success response
  await db.insert(Blog).values({ title, desc, body, image, published });

  return new Response(
    JSON.stringify({
      message: "Success!",
      data: { title, desc, body, image, published },
    }),
    { status: 200 },
  );
};
