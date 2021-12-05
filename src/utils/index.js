export const convertDuration = (number) => {
    let minute = ~~(number / 60);
    let seconds = ~~(number % 60);
    if ( minute < 10 ) minute = '0' + minute;
    if ( seconds < 10 ) seconds = '0' + seconds;
    return `${minute}:${seconds}`;
};

export const convertTime = (date) => {
    let minute = date.getMinutes();
    let hour = date.getHours();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if ( minute < 10 ) minute = '0' + minute;
    if ( hour < 10 ) hour = '0' + hour;
    if ( day < 10 ) day = '0' + day;
    if ( month < 10 ) month = '0' + month;
    return `${day} tháng ${month} lúc ${hour}:${minute}`;
};
