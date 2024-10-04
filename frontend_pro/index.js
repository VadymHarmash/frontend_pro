const contactBook = {
    contactList: [
        {
            name: "Vadym",
            phoneNumber: '1234567890',
            address: "vadym@gmail.com",
        },
        {
            name: "Vadym2",
            phoneNumber: '2234567890',
            address: "vadym2@gmail.com",
        },
        {
            name: "Vadym3",
            phoneNumber: '3234567890',
            address: "vadym3@gmail.com",
        }
    ],
    getContact(name) {
        const contact = this.contactList.find(contact => contact.name === name);
        return contact ? contact : "No contacts by this name";
    },
    addContact(name, phoneNumber, address) {
        this.contactList.push({name, phoneNumber, address});
        return this.contactList;
    },
}

console.log(contactBook.contactList);
console.log(contactBook.getContact('Vadym'));
console.log(contactBook.getContact('Vadym2'));
console.log(contactBook.getContact('Vadym3'));
console.log(contactBook.getContact('Vadym4'));
console.log(contactBook.addContact('Vadym4', '4234567890', 'vadym4@gmail.com'));
console.log(contactBook.getContact('Vadym4'));
