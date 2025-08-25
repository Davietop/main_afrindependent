export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "text",
      title: "Comment Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "postSlug",
      title: "Post Slug",
      type: "slug",
      options: {
        source: "author", // you can change this depending on how you want to generate it
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .slice(0, 10),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "timestamp",
      title: "Timestamp",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],
};
