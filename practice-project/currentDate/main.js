

function currentDate(){
    let date = new Date()
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();

    day = (day<10)? "0" + day: day;
    month = (month<10)? "0" + month: month;
    year = (year<10)? "0" + year: year;

    const fullDate = `${day}/${month}/${year}`;
    alert(fullDate)
}

