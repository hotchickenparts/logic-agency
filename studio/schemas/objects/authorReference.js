export default {
    name: 'authorReference',
    type: 'object',
    title: 'Author reference',
    fields: [
      {
        name: 'author',
        type: 'reference',
        to: [
          {
            type: 'person'
          }
        ]
      }
    ],
    preview: {
        select: {
            personName: "author.name",
            media: "author.image"
        },
        prepare(data) {
            return {
            ...data,
            title: data.personName
            };
        }
    }
  }