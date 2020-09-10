import { MdStorage } from "react-icons/md";

export default {
  type: "document",
  name: "navMenu",
  icon: MdStorage,
  fields: [
    {
      type: "string",
      name: "title"
    },
    {
      type: "array",
      name: "items",
      of: [{ type: "cta" }]
    }
  ]
};
