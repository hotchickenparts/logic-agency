import { FcSettings } from "react-icons/fc";
import figure from "../../../web/src/components/figure";

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
      name: "logo",
      type: "image",
      title: "Logo",
      description: ".png or .jpg only",
      options: {
        hotspot: true,
        accept: ".png, .jpg"
      }
    },
    {
      title: "Open graph",
      name: "openGraph",
      description: "These will be the default meta tags on all pages that have not set their own",
      type: "openGraph"
    },
    {
      name: "contact",
      type: "email",
      description: "Contact email for your agency.",
      title: "Contact"
    },
    {
      name: "address",
      type: "address"
    }
  ]
};
