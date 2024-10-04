const user = {
    name: "Vadym",
    age: 21,
    city: "Odesa",
    getData() {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    },
};

console.log(user.getData());
