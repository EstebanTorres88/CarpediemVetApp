export const PET_LIST = [
  {
    
    name: 'Max',
    species: 'Perro', 
    weight: '25kg',
    breed: 'Golden Retriever',
    age: 5,
    allergies: 'Ninguna', 
    image: 'https://i.pinimg.com/originals/cd/ff/74/cdff74c8ed1b715eb681826e8b89c3f4.jpg',

    vetAppointments: [
      {
        id: 'a1',
        date: '2025-10-15',
        state: 'Realized', 
        reason: 'Checkeo Anual'
      },
      {
        id: 'a2',
        date: '2026-03-20T00:00',
        state: 'Pending', 
        reason: 'Limpieza Dental'
      }
    ],
    vaccines: [
      { name: 'Rabia', date: '2024-05-10' },
      { name: 'Distemper', date: '2024-05-10' }
    ]
  },

  {
  
    name: 'Luna',
    species: 'Gato',
    weight: '4kg',
    breed: 'Siamese',
    age: 3,
    allergies: 'Comida de Mar',
    image: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Siamese201.jpg?itok=j9A2IvjN',
    vetAppointments: [
      {
        id: 'a3',
        date: '2026-02-15T00:00',
        state: 'Pending',
        reason: 'Irritación en los ojos'
      }
    ],
    vaccines: [
      { name: 'Leucemia Felina', date: '2025-01-20' }
    ]
  },


  {

    name: 'Rocky',
    species: 'Perro',
    weight: '12kg',
    breed: 'Beagle',
    age: 1,
    allergies: 'Polen',
    image:'https://i.pinimg.com/236x/3c/fb/89/3cfb8968b49de5848e69a63cdb7b82f6.jpg',

    vetAppointments: [], 
    vaccines: [
      { name: 'Parvovirus', date: '2023-11-12' },
      { name: 'Bordetella', date: '2024-12-01' }
    ]
  },
  {

    name: 'Bella',
    species: 'Conejo',
    weight: '2kg',
    breed: 'Holland Lop',
    age: 1,
    allergies: 'Ninguna',
    image: 'https://i.pinimg.com/564x/6a/46/41/6a46410ec8d823122a71183662cb86f3.jpg',
    vetAppointments: [],
    vaccines: [] 
  }
]