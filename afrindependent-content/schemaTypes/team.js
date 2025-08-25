export default {
  name: "team",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "position",
      title: "Position / Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "slug",
      title: "Slug (ID)",
      type: "slug",
      options: {
        source: "name",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")     // spaces → dashes
            .replace(/[^\w-]+/g, "")  // remove special chars
            .slice(0, 10),            // shorten slug
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
