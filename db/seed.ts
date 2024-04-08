import { db, Blog } from "astro:db";

export default async function () {
  await db.insert(Blog).values([
    {
      title: "Test Blog 1",
      desc: "Test Description 1",
      body: "Test Body 1",
      image: "https://picsum.photos/300/200?random=1",
      published: new Date("2024-01-01"),
    },
    {
      title: "Test Blog 2",
      desc: "Test Description 2",
      body: "Test Body 2",
      image: "https://picsum.photos/300/200?random=2",
      published: new Date("2024-01-02"),
    },
    {
      title: "Test Blog 3",
      desc: "Test Description 3",
      body: "Test Body 3",
      image: "https://picsum.photos/300/200?random=3",
      published: new Date("2024-01-03"),
    },
  ]);
}
