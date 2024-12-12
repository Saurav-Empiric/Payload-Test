import { CollectionConfig } from 'payload/types'

const Test: CollectionConfig = {
  slug: 'tests',
  auth: false,
  admin: {
    useAsTitle: 'game',
    
  },
  fields: [
    {
      name: 'myField',
      type: 'text', 
      required: true
    },
    {
      name: 'otherField',
      type: 'checkbox', 
    },
  ],
}

export default Test
