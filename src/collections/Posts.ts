import { CollectionConfig } from 'payload/types'
import slugify from 'slugify';

const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  // access: {
  //   read: ({ req }) => {
  //     // Restrict access to records where the author is 'miyan marr'
  //     return {
  //       author: {
  //         equals: 'miyan marr',
  //       },
  //     };
  //   },
  // },
  fields: [
    {
      name: 'subDomain',
      type: 'text',
      admin: {
        hidden: true
      }
    },
    {
      name: 'author',
      label: 'Author',
      type: 'text',
      required: true
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        hidden: true,
      },
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    {
      name: 'image',
      label: 'Post Image',
      type: 'upload',
      relationTo: 'media',
      // required: true,
    },
    {
      name: 'altText',
      label: 'Alt Text',
      type: 'text',
      // required: true,
    },
  ],
  hooks: {
    beforeValidate: [
      
      ({ req, data }) => {
        if (!data.subdomain) {
          // Extract the subdomain from the request URL
          const host = req?.headers?.host; // Get the host from the request headers
          if (host) {
            const subdomain = host.split('.')[0]; // Assuming subdomain is the first part of the host
            data.subDomain = subdomain; // Set the subdomain field
          }
        }
        // data.subDomain = 'jjjdfh'
        return data;
      },
    ],
    beforeChange: [
      async ({ data, req, originalDoc }) => {
        // Generate slug if title is provided
        if (data.title) {
          let slug = slugify(data.title, {
            lower: true,
            strict: true,
            trim: true,
          });

          // Check if the slug already exists and is not the current document
          const existingSlug = await req.payload.find({
            collection: 'posts',
            where: {
              slug: {
                equals: slug,
              },
            },
          });

          // If a duplicate slug exists, append a number to make it unique
          if (existingSlug.totalDocs > 0 && (!originalDoc || originalDoc.slug !== slug)) {
            slug = `${slug}-${existingSlug.totalDocs + 1}`;
          }

          // Set the slug in the data
          data.slug = slug;
        }
      },
    ],

  },
};

export default Posts;
