const cacheKey = "NUMBER";

if(typeof(Storage) !== "undefined"){
    if(localStorage.getItem(cacheKey) === "undefined"){
        localStorage.setItem(cacheKey, 0);
    }

    const button = document.querySelector('#button');
    const del = document.querySelector('#clear');
    const minus = document.querySelector('#minus');
    const count = document.querySelector('#count');
    count.innerText = localStorage.getItem(cacheKey);
    button.addEventListener('click', function(event){
        let number = localStorage.getItem(cacheKey);
        number++;
        localStorage.setItem(cacheKey, number);
        count.innerText = localStorage.getItem(cacheKey);
    })

    minus.addEventListener('click', function(event){
        let number = localStorage.getItem(cacheKey);
        number--;
        localStorage.setItem(cacheKey, number);
        count.innerText = localStorage.getItem(cacheKey);
    })

    del.addEventListener('click', function(event){
        localStorage.removeItem(cacheKey);
    })
} else {
    alert('Browser Tidak Mendukung Web Storage');
}