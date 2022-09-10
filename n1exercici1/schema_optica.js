var db = connect( 'mongodb://localhost/optica' );

db.clients.insertMany( [
  {
    client_id: '1',
    client_name: 'Anna Puigvert',
    client_tel:  '628491402',
    client_email: 'anna.pv@gmail.com',
    client_address: {
      address_street: 'Carrer Puig-garí', 
      address_house: '19', 
      address_entrance: '2', 
      address_appartment: '3', 
      address_zip: '08014',
      address_city: 'Barcelona',
      address_state: 'ES'
    },
    client_recommendation_id: null,
    client_registered: new Date(),
    client_modified: new Date(), 
    client_shopping: [
      {
        sell_id: '1',
        seller_name: 'Marcos Palacios',
        sell_date: '2022-06-21 10:04:31',
        glasses_ids: '1'
      },
      {
        sell_id: '2',
        seller_name: 'Sandra Figueres',
        sell_date: '2022-07-3 16:32:40',
        glasses_ids: '2'
      }
    ]
  },
  {
    client_id: '2',
    client_name: 'Paula Cantó',
    client_tel:  '694819456',
    client_email: 'p.canto@gmail.com',
    client_address: {
      address_street: 'Carrer Numància',
      address_house: '250',
      address_entrance: '3',
      address_appartment: 'D',
      address_zip: '08016',
      address_city: 'Barcelona',
      address_state: 'ES'
    },
    client_recommendation_id: 1,
    client_registered: new Date(),
    client_modified: new Date(),
    client_shopping: [
      {
        sell_id: '3',
        seller_name: 'Sandra Figueres',
        sell_date: '2022-07-3 16:32:40',
        glasses: '3'
      } 
    ]
  }
] )

db.providers.insertMany( [
  {
    provider_id: '1',
    provider_name: 'Joan Serrano',
    provider_tel: '635029453',
    provider_fax: '934561561',
    provider_address: {
      address_street: 'Carrer Gran de Sant Andreu',
      address_house: '245',
      address_entrance: '3',
      address_appartment: '2',
      address_zip: '08012',
      address_city: 'Barcelona',
      address_state: 'ES'
    },
    provider_tags:['Alain Afflelou', 'Boss', 'Ray Ban'],
    glasses_ids: ['1'],
    provider_created: new Date(),
    provider_modified: new Date(),
  },
  {
    provider_id: '2',
    provider_name: 'Oriol Tinoco', 
    provider_tel: '604859025', 
    provider_fax: '959356302',
    provider_address: {
      address_street: 'Gran Via de les Corts Catalanes', 
      address_house: '480', 
      address_entrance: '5', 
      address_appartment: 'A',
      address_zip: '08010',
      address_city: 'Barcelona',
      address_state: 'ES'
    },
    provider_tags:['Gucci'],
    glasses_ids: '2',
    provider_created: new Date(),
    provider_modified: new Date(),  
  }
] )


db.glasses.insertMany( [
  {
    glasses_id: '1',
    glasses_tag: 'Alain Afflelou',
    glasses_prescription_left:   1.2, 
    glasses_prescription_right:  1.8, 
    glasses_frame_type: 'plastic', 
    glasses_frame_color: 'silver',
    glasses_color_left:  'blue', 
    glasses_color_right: 'blue',  
    glasses_price:  30.5
 },
 {
    glasses_id: '2',
    glasses_tag: 'Gucci',
    glasses_prescription_left:  0.5, 
    glasses_prescription_right: 1.1,
    glasses_frame_type: 'metal',
    glasses_frame_color: 'red', 
    glasses_color_left: 'black', 
    glasses_color_right: 'black', 
    glasses_price:  80.3,
  },
  {
    glasses_id: '3',
    glasses_tag: 'Ray-Ban',
    glasses_prescription_left:  1.4, 
    glasses_prescription_right:  0.9,
    glasses_frame_type: 'wood', 
    glasses_frame_color: 'gold', 
    glasses_color_left: 'yellow', 
    glasses_color_right: 'yellow', 
    glasses_price:  125.6,
  }
] )

