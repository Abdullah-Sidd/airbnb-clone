export default {
    name: 'properties',
    title: 'Properties',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    //   {
    //     name: 'location',
    //     title: 'Location',
    //     type: 'geopoint',
    //   },
      {
        name: 'propertyType',
        title: 'Property Type',
        type: 'string',
        options: {
          list: [
            { title: 'House', value: 'house' },
            { title: 'Flat', value: 'flat' },
            { title: 'Villa', value: 'villa' },
            { title: 'Boutique Hotel', value: 'boutique-hotel' },
          ],
          layout: 'radio',
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of:[{type: 'image'}],
        options: {
          hotspot: true,
        }
      },
    //   {
    //     name: 'images',
    //     title: 'Images',
    //     type: 'array',
    //     of: [{ type: 'propertyImage' }],
    //   },
      {
        name: 'pricePerNight',
        title: 'Price Per Night',
        type: 'number',
      },
      {
        name: 'beds',
        title: 'No. of Beds',
        type: 'number',
      },
      {
        name: 'bedrooms',
        title: 'No. of Bedrooms',
        type: 'number',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 70,
        },
      },
    //   {
    //     name: 'id',
    //     title: 'ID',
    //     type: 'number',
    //   },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
    //   {
    //     name: 'host',
    //     title: 'host',
    //     type: 'host',
    //   },
    {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
    ],
    // preview: {
    //   select: {
    //     title: 'title',
    //     pricePerNight: 'pricePerNight',
    //   },
    // },
  }