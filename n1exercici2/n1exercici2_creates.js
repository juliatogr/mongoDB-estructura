var db = connect( 'mongodb://localhost/n1exercici1' );

db.clients.insertMany( [
  {
    client_id: [],
    client_name: [],
    client_surnames: [],
    client_address: {
      address_street: [],
      address_house: [],
      address_entrance: [],
      address_appartment: [],
      address_zip_code: [],
      address_town: [],
      address_province: [],
      address_state: []
    },
    client_tel: '694821945'
  }
] )

db.shops.insertMany( [
  {
    shop_id: [],
    shop_name: [],
    shop_address: {
      address_street: [],
      address_house: [],
      address_entrance: [],
      address_appartment: [],
      address_zip_code: [],
      address_town: [],
      address_province: [],
      address_state: []
    },
    shop_employees: [
      {
        employee_nif: [],
        employee_name: [],
        employee_surnames: [],
        employee_tel: [],
        employee_type: []
      }
    ]
  }
] )

db.orders.insertMany( [
  {
    order_id: [],
    order_date: [],
    order_type: [],
    order_price: [],
    order_client_id: [],
    order_shop_id: [],
    products: [
      {
        product_id: '',
        product_name: '',
        product_category: '',
        product_description: '',
        product_image: '',
        product_price: '',
        product_quantity: 0
      }
    ],
    order_deliveryman_id: [],
    order_delivery_date: ''
  },
  {
    order_id: [],
    order_date: [],
    order_type: [],
    order_price: [],
    order_client_id: [],
    order_shop_id: [],
    products: [
      {
        product_id: '',
        product_name: '',
        product_category: '',
        product_description: '',
        product_image: '',
        product_price: '',
        product_quantity: 0
      }
    ]
  }
] )

