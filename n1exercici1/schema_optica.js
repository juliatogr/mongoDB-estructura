var db = connect( 'mongodb://localhost/optica' );

db.clients.insertMany( [
  {
    client_id: '1',
    name: 'Anna Puigvert',
    phone_number:  '628491402',
    email: 'anna.pv@gmail.com',
    address: {
      street: 'Carrer Puig-garí', 
      house: '19', 
      entrance: '2', 
      appartment: '3', 
      zip: '08014',
      city: 'Barcelona',
      state: 'ES'
    },
    client_recommendation_id: null,
    registration_date: new Date(),
    modification_date: new Date(), 
    sells: [
      {
        sell_id: '1',
        seller_name: 'Marcos Palacios',
        sell_date: '2022-06-21 10:04:31',
        glasses: ['1']
      },
      {
        sell_id: '2',
        seller_name: 'Sandra Figueres',
        sell_date: '2022-07-3 16:32:40',
        glasses: ['2']
      }
    ]
  },
  {
    client_id: '2',
    name: 'Paula Cantó',
    phone_number:  '694819456',
    email: 'p.canto@gmail.com',
    address: {
      street: 'Carrer Numància',
      house: '250',
      entrance: '3',
      appartment: 'D',
      zip: '08016',
      city: 'Barcelona',
      state: 'ES'
    },
    client_recommendation_id: 1,
    registration_date: new Date(),
    modification_date: new Date(),
    sells: [
      {
        sell_id: '3',
        seller_name: 'Sandra Figueres',
        sell_date: '2022-07-3 16:32:40',
        glasses: ['3']
      } 
    ]
  }
] )

db.providers.insertMany( [
  {
    provider_id: '1',
    name: 'Joan Serrano',
    phone_number: '635029453',
    fax: '934561561',
    address: {
      street: 'Carrer Gran de Sant Andreu',
      house: '245',
      entrance: '3',
      appartment: '2',
      zip: '08012',
      city: 'Barcelona',
      state: 'ES'
    },
    tags:['Alain Afflelou', 'Boss', 'Ray Ban'],
    creation_date: new Date(),
    modification_date: new Date()
  },
  {
    provider_id: '2',
    name: 'Oriol Tinoco', 
    phone_number: '604859025', 
    fax: '959356302',
    address: {
      street: 'Gran Via de les Corts Catalanes', 
      house: '480', 
      entrance: '5', 
      appartment: 'A',
      zip: '08010',
      city: 'Barcelona',
      state: 'ES'
    },
    tags:['Gucci'],
    creation_date: new Date(),
    modification_date: new Date()
  }
] )


db.glasses.insertMany( [
  {
    glasses_id: '1',
    tag: 'Alain Afflelou',
    prescription_left:   1.2, 
    prescription_right:  1.8, 
    frame_type: 'plastic', 
    frame_color: 'silver',
    color_left:  'blue', 
    color_right: 'blue',  
    price:  30.5,
    provider: '1'
 },
 {
    glasses_id: '2',
    tag: 'Gucci',
    prescription_left:  0.5, 
    prescription_right: 1.1,
    frame_type: 'metal',
    frame_color: 'red', 
    color_left: 'black', 
    color_right: 'black', 
    price:  80.3,
    provider: '2'
  },
  {
    glasses_id: '3',
    tag: 'Ray-Ban',
    prescription_left:  1.4, 
    prescription_right:  0.9,
    frame_type: 'wood', 
    frame_color: 'gold', 
    color_left: 'yellow', 
    color_right: 'yellow', 
    price:  125.6,
    provider: '1'
  }
] )

