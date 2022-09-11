var db = connect( 'mongodb://localhost/pizzeria' );

db.clients.insertMany( [
  {
    client_id: '1',
    name: 'Júlia', 
    surnames: 'Tortosa Grau', 
    address: {
      street: 'Carrer de les Tres Creus, 2 Baixos', 
      zip_code: '08030', 
      town: 'Barcelona',
      province: 'Barcelona'
    },
    phone_number: '673564257'
  },
  {
    client_id: '2',
    name: 'Marta', 
    surnames: 'Rodríguez Selva', 
    address: {
      street: 'Gran Via de les Corts Catalanes 140, 10 D', 
      zip_code: '08010', 
      town: 'Barcelona',
      province: 'Barcelona'
    },
    phone_number: '650035027'
  },
  {
    client_id: '3',
    name: 'Pau', 
    surnames: 'Cosí Martínez', 
    address: {
      street: 'Travessera de Gràcia 130, 4 3', 
      zip_code: '08014', 
      town: 'Barcelona',
      province: 'Barcelona'
    },
    phone_number: '624060492'
  },
  {
    client_id: '4',
    name: 'Rubén', 
    surnames: 'Prat Danubi', 
    address: {
      street: 'Carrer Numància 50, 1 B', 
      zip_code: '08012', 
      town: 'Barcelona',
      province: 'Barcelona'
    },
    phone_number: '645672547'
  },
  {
    client_id: '5',
    name: 'Laura', 
    surnames: 'Soler Muntanya', 
    address: {
      street: 'Passatge dels Horts 5, Casa', 
      zip_code: '08320', 
      town: 'El Masnou',
      province: 'Barcelona'
    },
    phone_number: '721041940'
  },
  {
    client_id: '6',
    name: 'Àlex', 
    surnames: 'Cardona Follit', 
    address: {
      street: 'Carrer Rosa Sensat 30, 5 4', 
      zip_code: '08320', 
      town: 'Barcelona',
      province: 'Barcelona'
    },
    phone_number: '692041518'
  }
] )

db.shops.insertMany( [
  {
    shop_id: '1',
    name: 'Mario e Luigi',
    address: {
      street: 'Plaça de les Palmeres 2, Local', 
      zip_code: '08030', 
      town: 'Barcelona',
      province: 'Barcelona'
    }
  },
  {
    shop_id: '2',
    name: 'Napoli',
    address: {
      street: 'Carrer de Sants 30, Local', 
      zip_code: '08010', 
      town: 'Barcelona',
      province: 'Barcelona'
    },
    employees: [
      {
        employee_nif: '32049502Z',
        employee_name: 'Oriol',
        employee_surnames: 'Tinoco',
        employee_tel: '619485194',
        employee_type: 'Cuiner/a'
      }
    ]
  },
  {
    shop_id: '3',
    name: 'Pomodoro',
    address: {
      street: 'Rambla de poblenou 53, Local', 
      zip_code: '08020', 
      town: 'Barcelona',
      province: 'Barcelona'
    }
  },
  {
    shop_id: '4',
    name: 'Tartufo',
    address: {
      street: 'Carrer Vallespir 24, Local', 
      zip_code: '08012', 
      town: 'Barcelona',
      province: 'Barcelona'
    }
  },
  {
    shop_id: '5',
    name: 'Turino',
    address: {
      street: 'Carrer Alella 4, Local', 
      zip_code: '08320', 
      town: 'Barcelona',
      province: 'Barcelona'
    },
    employees: [
      {
        employee_nif: '37495029T',
        employee_name: 'Sonia',
        employee_surnames: 'Martínez',
        employee_tel: '647950395',
        employee_type: 'Cuiner/a'
      },
      {
        employee_nif: '40134953A', 
        employee_name: 'Jessica', 
        employee_surnames: 'Carmín', 
        employee_tel: '718239142', 
        employee_type: 'Repartidor/a'
      }
    ]
  }
] )


db.products.insertMany( [
  {
    product_id: '1',
    product_name: 'La donna', 
    product_category: 'Pizza Caprese',
    product_description:  'Ingredients: Farina, Tomàquet, Formatge, Oli, Sal, Rúcula', 
    product_image: 'https://www.comedera.com/wp-content/uploads/2022/03/pizza-caprese.jpg',
    product_price:  14.2
  },
  {
    product_id: '2',
    product_name: 'Nella Roma', 
    product_category: 'Pizza Pepperoni',
    product_description:  'Ingredients: Farina, Tomàquet, Formatge, Oli, Sal, Pepperoni', 
    product_image: 'https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale',
    product_price:  13.6
  },
  {
    product_id: '3',
    product_name: 'Capra', 
    product_category: 'Hamburguesa',
    product_description:  'Ingredients: Carn de Porc, Rúcula, formatge de cabra, tomàquet, ceba caramenlitzada', 
    product_image: 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2018-01-15-13-15-07/hamburguesa-con-queso-de-cabra-y-cebolla-caramelizada.jpeg',
    product_price:  12.5
  },
  {
    product_id: '4',
    product_name: 'Acqua S. Pellegrino', 
    product_category: 'Beguda',
    product_description:  'Aigua Embotellada Provinent d`Itàlia', 
    product_image: 'https://lafuente.es/wp-content/uploads/2019/10/AGUA-SAN-PELLEGRINO-75CL.jpg',
    product_price:  2.3
  },
  {
    product_id: '5',
    product_name: 'Limoncello', 
    product_category: 'Beguda',
    product_description:  'Chupito de Licor de llimona Italià de 30% vol', 
    product_image: 'https://images-na.ssl-images-amazon.com/images/I/81096ASjbnL._SL1500_.jpg',
    product_price: 4.1
  }
] )

db.orders.insertMany( [
  {
    order_id: '1',
    order_date: '2022-06-21 10:04:31',
    order_type: 'repartiment',
    order_price: 51.40,
    order_client_id: '1',
    order_shop_id: '3',
    products: [
      {
        product_id: '1',
        product_quantity: 2
      },
      {
        product_id: '3',
        product_quantity: 1
      },
      {
        product_id: '4',
        product_quantity: 1
      },
      {
        product_id: '5',
        product_quantity: 2
      }
    ],
    order_deliveryman_nif: '41829498R',
    order_delivery_date: '2022-06-21 13:56:23'
  },
  {
    order_id: '2',
    order_date: '2022-06-30 12:32:45',
    order_type: 'repartiment',
    order_price: 56.20,
    order_client_id: '5',
    order_shop_id: '1',
    products: [
      {
        product_id: '1',
        product_quantity: 3
      },
      {
        product_id: '2',
        product_quantity: 1
      }
    ],
    order_deliveryman_nif: '40134953A',
    order_delivery_date: '2022-06-30 15:05:16'
  },
  {
    order_id: '3',
    order_date: '2022-07-05 13:04:52',
    order_type: 'botiga',
    order_price: 60.70,
    order_client_id: '4',
    order_shop_id: '2',
    products: [
      {
        product_id: '2',
        product_quantity: 2
      },
      {
        product_id: '3',
        product_quantity: 1
      },
      {
        product_id: '4',
        product_quantity: 2
      },
      {
        product_id: '5',
        product_quantity: 4
      }
    ]
  },
  {
    order_id: '4',
    order_date: '2022-07-13 14:26:03',
    order_type: 'botiga',
    order_price: 46.10,
    order_client_id: '2',
    order_shop_id: '4',
    products: [
      {
        product_id: '1',
        product_quantity: 1
      },
      {
        product_id: '3',
        product_quantity: 2
      },
      {
        product_id: '4',
        product_quantity: 3
      }
    ]
  },
  {
    order_id: '5',
    order_date: '2022-07-24 15:01:47',
    order_type: 'botiga',
    order_price: 81.40,
    order_client_id: '5',
    order_shop_id: '5',
    products: [
      {
        product_id: '1',
        product_quantity: 3
      },
      {
        product_id: '3',
        product_quantity: 2
      },
      {
        product_id: '4',
        product_quantity: 6
      }
    ]
  }
] )

