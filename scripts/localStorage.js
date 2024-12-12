function saveToLocalStorage(cityName){

    let nameArr = getFromLocalStorage();

    if (!nameArr.includes(cityName)){
        nameArr.push(cityName);
    }

    localStorage.setItem('City Names', JSON.stringify(nameArr));

}

function getFromLocalStorage(){
    let localStorageData = localStorage.getItem('City Names');

    if (localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}


export { saveToLocalStorage, getFromLocalStorage }