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
    let year = date.getFullYear();
    if ( minute < 10 ) minute = '0' + minute;
    if ( hour < 10 ) hour = '0' + hour;
    if ( day < 10 ) day = '0' + day;
    if ( month < 10 ) month = '0' + month;
    return `${hour}:${minute} ${day}/${month}/${year}`;
};

const createStorage = (key) => {
    const storage = JSON.parse(localStorage.getItem(key)) ?? {};
    const save = () => {
        localStorage.setItem(key, JSON.stringify(storage));
    }
    
    return {
        get(key) {
            return storage[key];
        },
        set(key, value) {
            storage[key] = value;
            save();
        },
        remove(key) {
            delete storage[key];
            save();
        },
    };
};

export const storage = createStorage('zingmp3');
