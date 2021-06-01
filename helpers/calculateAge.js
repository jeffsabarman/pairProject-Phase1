function calculateAge (birthYear) {
    const nowYear = (new Date()).toISOString().substring(0, 4);
    const age = Number(nowYear) - Number(birthYear);
    return `${age} years old`;
}

// console.log(calculateAge(1998));

module.exports = calculateAge;