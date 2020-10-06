const array = ["Ana", 2, "Javi", 5, "Roberto", 7, "Vanessa", 10];

const newarry1 = array.filter(i => {
    if (typeof i === "string")
        return i
}
)

console.log(newarry1);

const newarry2 = array.filter(i => {
    if (typeof i === "number")
        if (i % 2 !== 0)
            return i
}
)
console.log(newarry2)