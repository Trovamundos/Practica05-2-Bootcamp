let array1 = [25, 2.05, 1000, 63, 4.01, -9];
let array2 = [14, 2, 2.02, 63, 0, -9];
let array5 = [
    {
        id: 1, 
        name: "Jhon",
    }, 
    {
        id: 2, 
        name: "Doe",
    }, 
    {
        id: 3, 
        name: "Clara",
    }, 
    {
        id: 4, 
        name: "Elisa",
    }, 
    {
        id: 4, 
        name: "Pedro",
    },
];
let array6 = [
    {
        id: 1, 
        name: "Jhon",
        age: 25,
    }, 
    {
        id: 2, 
        name: "Doe",
        age: 8,
    }, 
    {
        id: 3, 
        name: "Clara",
        age: 15,
    }, 
    {
        id: 4, 
        name: "Elisa",
        age: 30,
    }, 
    {
        id: 4, 
        name: "Pedro",
        age: 18,
    },
];
let array8 = [
    {
        hoteId: 1,
        hotelName: "Jhon",
        availableRooms: 25,
        price: 10.20,
    },
    {
        hoteId: 2,
        hotelName: "Doe",
        availableRooms: 8,
        price: 4.25,
    },
    {
        hoteId: 3,
        hotelName: "Clara",
        availableRooms: 15,
        price: 14.30,
    },
    {
        hoteId: 4,
        hotelName: "Elisa",
        availableRooms: 30,
        price: 10,
    },
    {
        hoteId: 4,
        hotelName: "Pedro",
        availableRooms: 10,
        price: 8.10,
    },
];
array10 = [ 
    { 
        hoteId: 1, 
        hotelName: "Hotel 1", 
        availableRooms: 25, 
        price: 10.20, 
    }, 
    { 
        hoteId: 2, 
        hotelName: "Hotel 2", 
        availableRooms: 8, 
        price: 4.25, 
    }, 
    { 
        hoteId: 3, 
        hotelName: "Hotel 3", 
        availableRooms: 15, 
        price: 14.30, 
    }, 
    { 
        hoteId: 4, 
        hotelName: "Hotel 4", 
        availableRooms: 30, 
        price: 10, 
    }, 
    { 
        hoteId: 5, 
        hotelName: "Hotel 5", 
        availableRooms: 10,
        price: 8.10, 
    }, 
];



// ---- Ejercicio 1 ----

// for (number of array1) {
//     console.log(`${array1.indexOf(number)}: ${number}`);
// }

//---- Ejercicio 2 ----

// for (number of array2) {
//     if (number > 0) {
//         console.log(number);
//     }
// }

//---- Ejercicio 3 ----

// let array2Great = [];
// let array2Less = [];

// for (number of array2) {
//     if (number >= 0) {
//         array2Great.push(number);
//     } else {
//         array2Less.push(number);
//     }
// }

// console.log(array2Great);
// console.log(array2Less);

//---- Ejercicio 4 ----

// for (number of array2) {
//     if (number < 0) {
//         array2.splice(array2.indexOf(number));
//     }
// }

// console.log (array2);

//---- Ejercicio 5 ----

// for (i = array5.length; i >= 0; i--) {
//     console.log(array5[i]);
// }

//---- Ejercicio 6 ----

// for (date of array6) {
//     if (date.age >= 18) {
//         console.log (date);
//     }
// }

//---- Ejercicio 7 ----

// let array6Older = [];
// let array6Under = [];

// for (date of array6) {
//     if (date.age >= 18) {
//         array6Older.push(date);
//     } else {
//         array6Under.push(date);
//     }
// }

// console.log(array6Older);
// console.log(array6Under);

//---- Ejercicio 8 ----

// for (date of array8) {
//     if (date.availableRooms < 10) {
//         date.price = date.price + 10;
//     }
// }
// console.log (array8);

//---- Ejercicio 9 ----

    //Es el mismo que el 8 :D.

//---- Ejercicio 10 ----

// var checkHotel = () => {
//     for (date of array10) {
//         if (date.hotelName == "Hotel 1") {
//             document.getElementById('textBox').value = `El hotel Hotel 1 existe`;
//             return;
//         } else {
//             document.getElementById('textBox').value = `El hotel Hotel 1 no existe`;
//         }
//     }
// }

// document.getElementById('myButton').addEventListener('click', checkHotel);