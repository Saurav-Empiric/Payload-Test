import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
    slug:"media",
    upload:{
        staticURL:'/media',
        staticDir:'media',
        mimeTypes:['image/*']
    },
    admin:{
        description:'upload images for your website'
    },
    fields:[]
}

export default Media;