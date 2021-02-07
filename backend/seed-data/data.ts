function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    _id: {
      $oid: '6020364488532b4ba0494554',
    },
    name: 'Vanilla Cake',
    description:
      'Round vanilla cake with vanilla frosting. 2 layers. Price is for 8inch cake.',
    photo: {
      $oid: '6020362e88532b4ba0494553',
    },
    status: 'DRAFT',
    price: 6400,
    __v: 0,
  },
  {
    _id: {
      $oid: '602036fa88532b4ba0494557',
    },
    name: 'Orange Bundt Cake',
    description:
      'Orange bundt cake with vanilla glaze. Price is for 8inch cake',
    photo: {
      $oid: '602036ec88532b4ba0494556',
    },
    status: 'DRAFT',
    price: 3000,
    __v: 0,
  },
  {
    _id: {
      $oid: '6020374f88532b4ba049455a',
    },
    name: 'Rainbow Birthday Cake ',
    description:
      'Rainbow frosting on a rainbow colored 7 layers cake. Price is for 8inch cake.',
    photo: {
      $oid: '6020374788532b4ba0494559',
    },
    status: 'DRAFT',
    price: 6500,
    __v: 0,
  },
  {
    _id: {
      $oid: '6020379488532b4ba049455d',
    },
    name: 'Classic Birthday Cake',
    description: '3 layers cake. Vanilla frosting. Price is for 8inch cake',
    photo: {
      $oid: '6020378c88532b4ba049455c',
    },
    status: 'DRAFT',
    price: 5000,
    __v: 0,
  },
  {
    _id: {
      $oid: '602037ca88532b4ba0494560',
    },
    name: 'Cotton Candy Cake',
    description:
      '3 layers cake. Pink frostin and pink glaze. Price is for 8inch cake.',
    photo: {
      $oid: '602037bf88532b4ba049455f',
    },
    status: 'DRAFT',
    price: 5500,
    __v: 0,
  },
  {
    _id: {
      $oid: '6020380388532b4ba0494563',
    },
    name: 'Fruit Topping Cake',
    description:
      'Vanilla frosting on a vanilla falvored cake. Fresh fruit on top. Price is for 8inch cake',
    photo: {
      $oid: '602037fc88532b4ba0494562',
    },
    status: 'DRAFT',
    price: 6600,
    __v: 0,
  },
  {
    _id: {
      $oid: '6020385988532b4ba0494566',
    },
    name: 'Unicorn Cake',
    description:
      'Cream cheese frosting on a vanilla cake. Candy and marshmallow topping. Price is for 8inch cake',
    photo: {
      $oid: '6020385288532b4ba0494565',
    },
    status: 'DRAFT',
    price: 4500,
    __v: 0,
  },
  {
    _id: {
      $oid: '6020388e88532b4ba0494569',
    },
    name: 'Vanilla Round Cake',
    description: 'Vanilla round cake with vanilla frosting',
    photo: {
      $oid: '6020388788532b4ba0494568',
    },
    status: 'DRAFT',
    price: 4500,
    __v: 0,
  },
  {
    _id: {
      $oid: '602038c288532b4ba049456c',
    },
    name: 'Chocolate Round Cake',
    description:
      'Chocolate three layer round cake with chocolate frosting. Price is for 8inch cake.',
    photo: {
      $oid: '602038bd88532b4ba049456b',
    },
    status: 'DRAFT',
    price: 4500,
    __v: 0,
  },
  {
    _id: {
      $oid: '6020397f88532b4ba049456f',
    },
    name: 'Princess Themed Cupcakes',
    description:
      'Princess theme cupcakes with cream cheese frosting. Price is for 12 cupcakes.',
    photo: {
      $oid: '6020391f88532b4ba049456e',
    },
    status: 'DRAFT',
    price: 2000,
    __v: 0,
  },
  {
    _id: {
      $oid: '60203a3288532b4ba0494572',
    },
    name: 'Christmas Cookies',
    description:
      'Vanilla cookies shaped and decorated with Christmas motives. Prices is for a dozen.',
    photo: {
      $oid: '602039e488532b4ba0494571',
    },
    status: 'DRAFT',
    price: 2000,
    __v: 0,
  },
  {
    _id: {
      $oid: '60203a9088532b4ba0494575',
    },
    name: 'Baby Shower Cake',
    description:
      'Animal themed cake. Choices of chocolate or vanilla with fruit filling. Price is for 8inch cake. ',
    photo: {
      $oid: '60203a5c88532b4ba0494574',
    },
    status: 'DRAFT',
    price: 3000,
    __v: 0,
  },
];
