## Pluck
This is JavaScript implementation of RethinkDB pluck method.
https://rethinkdb.com/api/javascript/pluck

### Setup

```js
const pluck = require('./index.js');

const data =  {
      id: 1,
      name: "Bulbasaur",
      img: "http://www.serebii.net/pokemongo/pokemon/001",
      contact: {
         fullName: "Alex B",
         address: {
           zip: "1323",
           postCode: "1233",
           streetName: "St Winsent",
           streetType: "Avenue",
           streetNumber: "1",
         },
         phone: {
           contryCode: "381",
           areaCode: "011",
           primary: "11111111" 
         },
         social: {
           twitter: "https://twitter.com/example",
           reddit: "https://reddit.com/example"
         } 
      },
    };
```

#### object notation
```js

const result = pluck(data, {
    name: true, 
    contact: { 
      address: { 
        zip: true, 
        postCode: true 
      },
      phone: {
        primary: true
      },
      social: true
    } 
});

console.log(result)

{
  name: 'Bulbasaur',
  contact: { 
    address: { 
      zip: '1323', 
      postCode: '1233' 
    },
    phone: {
      primary: "11111111"
    },
    social: {
      twitter: "https://twitter.com/example",
      reddit: "https://reddit.com/example"
    }  
  }
}

```
#### string notation
```js
const result = pluck(data, 'name', 'id');

console.log(result)

{ name: 'Bulbasaur', id: 1 }
```

#### object and string notation combined
```js
const result = pluck(data, 'name', {
    contact: {
        address: {
            streetName: true 
        } 
    }
}); 

console.log(result)

{
  name: 'Bulbasaur',
  contact: {
     address: {
        streetName: 'St Winsent' 
     } 
  }
}
```