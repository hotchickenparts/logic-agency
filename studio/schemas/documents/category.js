import { FcParallelTasks } from "react-icons/fc";

export default {
  name: "category",
  type: "document",
  title: "Category",
  icon: FcParallelTasks,
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
    {
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "figure" }],
      options: {
        layout: "grid"
      }
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
};
