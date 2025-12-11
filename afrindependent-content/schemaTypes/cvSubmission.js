export default {
  name: "Ambassador",
  title: "Ambassadors Information",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "cv",
      title: "CV File",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx"
      }
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: Rule => Rule.required()
    },
    {
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString()
    }
  ]
}
