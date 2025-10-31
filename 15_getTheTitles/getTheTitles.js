// const getTheTitles = function(bookObjArr) {
//     titles = [];
//     for (let i = 0; i < bookObjArr.length; i++) {
//         titles.push(bookObjArr[i].title);
//     }
//     return titles
// };

const getTheTitles = bookObjArr =>  bookObjArr.reduce( (acc, curr) => acc.concat(curr.title), [])

// Do not edit below this line
module.exports = getTheTitles;
