const users = [
    {
        name: "Davlat",
        age: 17,
        isMarried: true,
        wifes: ['malika', 'kamila', 'samir', 'miron']
    },
    {
        name: "Samir",
        age: 13,
        isMarried: false,
        wifes: []
    },
    {
        name: "Jasur",
        age: 17,
        isMarried: false,
        wifes: []
    },
    {
        name: "Islom",
        age: 16,
        isMarried: true,
        wifes: ["Davlat"]
    }
];

let youngestUser = users[0];

users.forEach(user => {
    if (user.age < youngestUser.age) {
        youngestUser = user;
    }
});

console.log(youngestUser);
