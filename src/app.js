const express = require('express' );
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;


customers = [
    {
        "name": "John Smith",
        "email": "john@gmail.com",
    },
    {
        "name": "Ezekiel",
        "email": "eze@gmail.com",
    },
]


json = {
    "name": "Wisdom ugochukwu",
    "phoneNumber": "0802345564",
    "city": "Abuja",
    "favoriteNumber": [
        1,
        2,
        4,
        6
    ],
    "favoriteColors": [
        "Blue",
        "White",
        "Orange"
    ],
    "favoritePeople": [
        {
            "name": "Anuri",
            "relationship": "wife"
        },
        {
            "name": "Egochukwu",
            "relationship": "parent"
        }
    ]
}
 
// using GET method
app.get('/', (req, res) => {
    res.send("Welcome to my website");
});

app.get('/profile', (req, res) => {
    res.send({'data':json, 'favPeople':json.favoritePeople});
});

app.get('/api/customers', (req, res) => {
    res.send({'customers':customers});
});

// send customer to backend
app.post('/api/customers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


// using POST method
app.post('/', (req, res) => {
    res.send('This is used to make POST request!!!');
});

app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`);
})