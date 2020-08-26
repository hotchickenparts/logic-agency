// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import article from "./documents/article";
import category from "./documents/category";
import person from "./documents/person";
import project from "./documents/project";
import siteSettings from "./documents/siteSettings";

// Object types
import authorReference from './objects/authorReference';
import bioPortableText from "./objects/bioPortableText";
import bodyPortableText from "./objects/bodyPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import figure from "./objects/figure";
import mainImage from "./objects/mainImage"
import projectPortableText from "./objects/projectPortableText";
import simplePortableText from "./objects/simplePortableText";
import teamMember from "./objects/teamMember";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "logic",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    authorReference,
    bioPortableText,
    bodyPortableText,
    excerptPortableText,
    figure,
    teamMember,
    mainImage,
    projectPortableText,
    simplePortableText,
    // The following are document types which will appear
    // in the studio.
    article,
    category,
    person,
    project,
    siteSettings
  ])
});
