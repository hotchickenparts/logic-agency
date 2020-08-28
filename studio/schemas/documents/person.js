import { FcBusinessman } from "react-icons/fc";

export default {
  name: "person",
  type: "document",
  title: "Person",
  icon: FcBusinessman,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Some frontend will require a slug to be set to be able to show the person",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "image",
      title: "Image",
      type: "figure"
    },
    {
      name: "bio",
      title: "Bio",
      type: "bioPortableText"
    },
    {
      name: "email",
      title: "Email",
      type: "email"
    },
    {
      name: "company",
      title: "Company",
      type: "string"
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string'
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "string"
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string"
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
};
