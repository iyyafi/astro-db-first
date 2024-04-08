import { defineDb, defineTable, column } from "astro:db";

const Blog = defineTable({
  columns: {
    title: column.text(),
    desc: column.text(),
    body: column.text(),
    image: column.text(),
    published: column.date(),
  },
});

export default defineDb({
  tables: { Blog },
});
