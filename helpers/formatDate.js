function formatDate (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const theDate = String(date.getDate()).length === 1 ? `0${date.getDate()}` : date.getDate();
    const hour = String(date.getHours()).length === 1 ? `0${date.getHours()}` : date.getHours();
    const minute = String(date.getMinutes()).length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
    // console.log(minute);
    // console.log(`${theDate}-${month}-${year} ${hour}:${minute}`);
    return `${theDate}-${month}-${year} ${hour}:${minute}`;
}

// console.log(formatDate(new Date()));
module.exports = formatDate;