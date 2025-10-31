const findTheOldest = function(person) {
    return person.reduce( (oldest,curr) => {
        const currentYear = new Date().getFullYear();
        const ageCurr = (curr.yearOfDeath || currentYear) - curr.yearOfBirth;
        const agePrev = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        return ageCurr > agePrev ? curr : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
