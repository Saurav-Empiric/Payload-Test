import { CollectionConfig } from 'payload/types'

const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: 'Article',
    plural: 'Articles',
  },
  access: {
    read: () => true,
  },
   fields: [
    {
      name: 'author',
      label: 'Author',
      type: 'text',
      required:true
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required:true
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    {
      name: 'image',
      label: 'Article Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'altText',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
};

export default Articles;
