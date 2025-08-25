// schemas/facultyMembers.js
export default {
  name: 'facultyMembers',
  title: 'Faculty Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'desc',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'twitter', title: 'Twitter', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
      ],
    },
  ],
};
