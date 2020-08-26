import { FcTreeStructure } from "react-icons/fc";

export default {
  name: "category",
  type: "document",
  title: "Category",
  icon: FcTreeStructure,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "image",
      type: "figure",
      title: "Image"
    },
    {
      name: "description",
      type: "text",
      title: "Description"
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
  }
};
