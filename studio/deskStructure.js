import S from "@sanity/desk-tool/structure-builder";
import { FcSettings } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import landingPages from "./src/structure/landingPages";
import PreviewIFrame from "./src/components/previewIFrame";

const hiddenDocTypes = listItem =>
  ![
    "article",
    "capability",
    "category",
    "navMenu",
    "page",
    "person",
    "project",
    "route",
    "service",
    "siteSettings"
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Articles")
        .schemaType("article")
        .child(S.documentTypeList("article").title("Articles")),
      S.listItem()
        .title("Capabilities")
        .schemaType("capability")
        .child(S.documentTypeList("capability").title("Capabilities")),
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
      S.listItem()
        .title("Services")
        .schemaType("service")
        .child(S.documentTypeList("service").title("Services")),
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
      S.documentListItem()
        .title("Frontpage")
        .schemaType("page")
        .icon(FcHome)
        .child(
          S.document()
            .schemaType("page")
            .documentId("frontpage")
            .views([S.view.form(), PreviewIFrame()])
        ),
      landingPages,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
