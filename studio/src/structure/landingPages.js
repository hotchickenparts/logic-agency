import S from "@sanity/desk-tool/structure-builder";
import PreviewIFrame from "../../src/components/previewIFrame";

import { FcMenu } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
export default S.listItem()
  .title("Page Builder")
  .icon(FcTemplate)
  .child(
    S.list()
      .title("Landing Pages")
      .items([
        S.listItem()
          .title("Navigation Menus")
          .icon(FcMenu)
          .schemaType("navMenu")
          .child(S.documentTypeList("navMenu").title("Navigation Menus")),
        S.listItem()
          .title("Routes")
          .schemaType("route")
          .child(
            S.documentTypeList("route")
              .title("Routes")
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType("route")
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.listItem()
          .title("Pages")
          .schemaType("page")
          .child(
            S.documentList("page")
              .title("Pages")
              .menuItems(S.documentTypeList("page").getMenuItems())
              .filter('_type == "page" && _id != "frontpage"')
          )
      ])
  );
