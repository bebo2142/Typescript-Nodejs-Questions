var guestsList = ['Ali', 'Ahmad', 'Iqra'];
guestsList.forEach(function (guest) {
     console.log("Dear ".concat(guest, ",\n\nIt would be wonderful to have you join us for an evening filled with good food, great company, and memorable conversations. Please let me know if you have any dietary preferences or restrictions that we should consider.\n\nLooking forward to catching up and enjoying a delicious meal together. \n\n Best Regards,\n Saadullah \n\n"));
});
console.log('-----------------------------------------------------------------------------------------------------------------');
console.log('Ali is unable to make it to the dinner. Let\'s invite Sara in his place.');
console.log('-----------------------------------------------------------------------------------------------------------------');
guestsList[0] = 'Sara';
guestsList.forEach(function (guest) {
     console.log("Dear ".concat(guest, ",\n\nIt would be wonderful to have you join us for an evening filled with good food, great company, and memorable conversations. Please let me know if you have any dietary preferences or restrictions that we should consider.\n\nLooking forward to catching up and enjoying a delicious meal together. \n\n Best Regards,\n Saadullah \n\n"));
});
console.log('-----------------------------------------------------------------------------------------------------------------');
console.log('We have found a bigger dinner table, so let\'s invite more people.');
console.log('-----------------------------------------------------------------------------------------------------------------');
guestsList.unshift('Ayesha');
guestsList.splice(2, 0, 'Imran');
guestsList.push('Irfan');
guestsList.forEach(function (guest) {
     console.log("Dear ".concat(guest, ",\n\nIt would be wonderful to have you join us for an evening filled with good food, great company, and memorable conversations. Please let me know if you have any dietary preferences or restrictions that we should consider.\n\nLooking forward to catching up and enjoying a delicious meal together. \n\n Best Regards,\n Saadullah \n\n"));
});
console.log('-----------------------------------------------------------------------------------------------------------------');
console.log('Oh no! The dinner table won\'t arrive on time, so we can only invite two people.');
console.log('-----------------------------------------------------------------------------------------------------------------');

console.log(`Dear ${guestsList[guestsList.length - 1]} Sorry, I can't invite you to dinner.`);
guestsList.pop()
console.log(`Dear ${guestsList[guestsList.length - 1]} Sorry, I can't invite you to dinner.`);
guestsList.pop()
console.log(`Dear ${guestsList[guestsList.length - 1]} Sorry, I can't invite you to dinner.`);
guestsList.pop()
console.log(`Dear ${guestsList[guestsList.length - 1]} Sorry, I can't invite you to dinner.`);
guestsList.pop()
guestsList.forEach(function (guest) {
     console.log("Dear ".concat(guest, ",\n\nIt would be wonderful to have you join us for an evening filled with good food, great company, and memorable conversations. Please let me know if you have any dietary preferences or restrictions that we should consider.\n\nLooking forward to catching up and enjoying a delicious meal together. \n\n Best Regards,\n Saadullah \n\n"));
});
guestsList.splice(0, guestsList.length);
console.log('-----------------------------------------------------------------------------------------------------------------');
console.log('The End');
console.log(guestsList)