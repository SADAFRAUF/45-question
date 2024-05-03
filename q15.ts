let guests: string[] = ["Quaid-e-Azam", "Abdul Qadeer Khan", "Abdul Sattar Edhi","Sir Kamran Khan","Sir Zia","Albert Einstein"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Sir Asharib");
guests.splice(guests.length / 2, 0, "Sir Ameen");
guests.push("Sir Bilal");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});