import S from "@sanity/desk-tool/structure-builder";
import { FcSettings } from "react-icons/fc";

const hiddenDocTypes = listItem =>
  !["article", "category", "person", "project", "siteSettings"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Articles")
        .schemaType("article")
        .child(S.documentTypeList("article").title("Articles")),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("People")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),
      S.listItem()
        .title("Projects")
        .schemaType("project")
        .child(S.documentTypeList("project").title("Projects")),
      S.divider(),
      S.listItem()
        .title("Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(FcSettings),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
