// Q14 Answer:
let guests = ["Quaid-e-Azam", "Abdul Qadeer Khan", "Abdul Sattar Edhi", "Sir Kamran Khan", "Sir Zia", "Albert Einstein"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// Q15 Answer:
let unableToAttend = "Albert Einstein";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Sir Daniyal";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
export {};
