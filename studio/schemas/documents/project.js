import { format } from "date-fns";
import { FcBiomass } from "react-icons/fc";

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon: FcBiomass,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the project",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "publishedAt",
      title: "Published at",
      description: "You can use this field to schedule projects where you show them",
      type: "datetime"
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "simplePortableText"
    },
    {
      name: "team",
      title: "Team",
      type: "array",
      of: [{ type: "teamMember" }]
    },
    {
      name: "startedAt",
      title: "Started at",
      type: "datetime"
    },
    {
      name: "endedAt",
      title: "Ended at",
      type: "datetime"
    },
    {
      name: "image",
      title: "Image",
      type: "figure"
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
    {
      name: "body",
      title: "Body",
      type: "projectPortableText"
    },
    {
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "figure" }],
      options: {
        layout: "grid"
      }
    },
    {
      name: "relatedProjects",
      title: "Related projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }]
    }
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "image"
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date"
      };
    }
  }
};
