import { CollectionConfig } from "payload/types";

const Header: CollectionConfig = {
    slug: "header",
    admin: {
        useAsTitle: "label"
    },
    fields: [
        {
            name: 'logo',
            type: "upload",
            relationTo: 'media',
            label: 'header logo',
            required: false,
        },
        {
            name: "links",
            type: 'array',
            label: 'header links',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    label: 'Link Label',
                    required: true,
                }
            ],

        }
    ]
}

export default Header;