import { FcSupport } from 'react-icons/fc'

export default {
  name: 'capability',
  type: 'document',
  title: 'Capability',
  icon: FcSupport,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
      source: 'title',
      maxLength: 96
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
  ]
}