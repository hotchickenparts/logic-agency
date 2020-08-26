import { FcSettings } from 'react-icons/fc'

export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  icon: FcSettings,
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish"
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtilte",
      description: "Short and sweet tagline for your agency."
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your agency for search engines and social media."
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your agency.",
      of: [{ type: "string" }],
      options: {
        layout: "tags"
      }
    },
    {
      name: "contact",
      type: "email",
      description: "Contact email for your agency.",
      title: "Contact"
    },
    {
      name: "address",
      type: "address",
      title: "Agency Address"
    }
  ]
};
