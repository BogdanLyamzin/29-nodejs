const isLeapYear = (year)=> {
    if(year === undefined){
        throw new Error("Год должен быть передан в качестве аргумента")
    }

    if(typeof year !== "number"){
        throw new Error("Год должен иметь тип данных number")
    }

    if(!Number.isInteger(year)){
        throw new Error("Год должен быть целым числом");
    }

    if(year < 42){
        throw new Error("Год не может быть меньше 42");
    }

    const date = new Date(year, 2, 0);
    const days = date.getDate();
    return (days === 29);
};

module.exports = isLeapYear