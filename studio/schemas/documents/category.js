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
      name: "description",
      type: "text",
      title: "Description"
    }
  ]
};
