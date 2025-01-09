const freelancer = [{ name: "Dr. Slice", price: 25, occupation: "gardener" },
{ name: "Dr. Pressure", price: 51, occupation: "programmer" },
{ name: "Prof. Possibility", price: 43, occupation: "teacher" },
{ name: "Prof. Prism", price: 81, occupation: "teacher" },
{ name: "Dr. Impulse", price: 43, occupation: "teacher" },
{ name: "Prof. Spark", price: 76, occupation: "programmer" },
{ name: "Dr. Wire", price: 47, occupation: "teacher" },
{ name: "Prof. Goose", price: 72, occupation: "driver" },

    // add method .push
];
const names = ["Jack", "Sasha", "Kolya", "Alena", "Kesha"];
const occupations = ["Engeener", "AI Developer", "Electrition", "Plumer", "Teacher"];

const maxlenght = 15

function displaytable() {
    const tabledef = document.getElementById("freelancetable")
    // console.log(tabledef)
    tabledef.innerHTML = ""
    freelancer.forEach((person) => {
        const newElement = document.createElement("div")
        newElement.innerHTML = `<p> name${person.name} </p>
        <p> occupation${person.occupation} </p>
        <p> starting price${person.price} </p>`



        // console.log(newElement)
        tabledef.appendChild(newElement)
    })
}

function calculateAverage() {
    let totalPrice = 0
    freelancer.forEach((person) => {
        totalPrice = totalPrice + person.price
    })
    const averagePrice = totalPrice / freelancer.length
    const displayaverage = document.getElementById("averagePrice")
    displayaverage.innerHTML = `${averagePrice.toFixed(2)}`

}
localStorage
function addFrelencer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 100)
    freelancer.push({ name, occupation, price })
    console.log(freelancer)
}

function init() {
    displaytable()
    calculateAverage()
}

const addFrelencerIntervalId = setInterval(() => {
    addFrelencer();
    init();
    if (freelancer.length >= maxlenght) {
        clearInterval(addFrelencerIntervalId);
    }
}, 3000);

//call init function
init();