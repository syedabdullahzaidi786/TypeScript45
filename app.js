"use strict";
let Guest_List = ['Rajab', 'Raheem', 'Farjad'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is own pleasure to invite you in our party.\n\nThank You!\n\n');
}
let absent_Guest = 'Raheem';
let new_Guest = 'Khurram';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is own pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
