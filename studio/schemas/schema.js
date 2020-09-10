// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import localeString from "./objects/localeString";

// Document types
import article from "./documents/article";
import capability from "./documents/capability";
import category from "./documents/category";
import navMenu from "./documents/navMenu";
import page from "./documents/page";
import person from "./documents/person";
import project from "./documents/project";
import route from "./documents/route";
import service from "./documents/service";
import siteSettings from "./documents/siteSettings";

import * as plugs from "./plugs";
import plugDefaultFields from "./plugs/_plugDefaultFields";

// Object types
import address from "./objects/address";
import authorReference from "./objects/authorReference";
import bioPortableText from "./objects/bioPortableText";
import bodyPortableText from "./objects/bodyPortableText";
import cta from "./objects/cta";
import excerptPortableText from "./objects/excerptPortableText";
import figure from "./objects/figure";
import link from "./objects/link";
import openGraph from "./objects/openGraph";
import projectPortableText from "./objects/projectPortableText";
import simpleBlockContent from "./objects/simpleBlockContent";
import simplePortableText from "./objects/simplePortableText";
import teamMember from "./objects/teamMember";

const allPlugs = Object.values(plugs).map(plug => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) };
});

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "logic",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      // When added to this list, object types can be used as
      // { type: 'typename' } in other document schemas
      address,
      authorReference,
      bioPortableText,
      bodyPortableText,
      cta,
      excerptPortableText,
      figure,
      link,
      localeString,
      projectPortableText,
      openGraph,
      simpleBlockContent,
      simplePortableText,
      teamMember,
      // The following are document types which will appear
      // in the studio.
      article,
      capability,
      category,
      navMenu,
      page,
      person,
      project,
      route,
      service,
      siteSettings
    ])
    .concat(allPlugs)
});
