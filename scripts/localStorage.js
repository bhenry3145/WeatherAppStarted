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

function removeFromLocalStorage(cityName){
    let localStorageData = getFromLocalStorage();

    let nameIndex = localStorageData.indexOf(cityName);

    localStorageData.splice(nameIndex, 1);

    localStorage.setItem('City Names', JSON.stringify(localStorageData));

}


export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage }