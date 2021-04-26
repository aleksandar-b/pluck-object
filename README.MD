## Pluck
This is JavaScript implementation of RethinkDB pluck method.
https://rethinkdb.com/api/javascript/pluck

### Example

#### object notation
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
           streetNumber: "1"
         } 
      },
    };

const result = pluck(data, {
    name: true, 
    contact: { 
        address: { 
            zip: true, 
            postCode: true 
        }
    } 
});

console.log(result)

{
  name: 'Bulbasaur',
  contact: { 
    address: { 
      zip: '1323', 
      postCode: '1233' 
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

### object and string notation combined
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