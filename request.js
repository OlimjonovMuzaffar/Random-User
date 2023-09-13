let API = "https://randomuser.me/api/?results=9";

let apiMode = (link) => {
  return new Promise((resolve, reject) => {
    let sorov = new XMLHttpRequest();

    sorov.addEventListener("readystatechange", () => {
      if (sorov.readyState === 4 && sorov.status === 200) {
        let malumot = JSON.parse(sorov.responseText);
        resolve(malumot);
      }else if (sorov.readyState === 4){
        reject('Malumot kelmadi')
      }
    });
    sorov.open("GET", link);
    sorov.send();
  });
};

let apiData = () => {
  apiMode(API)
    .then((data) => {
      getUpdate(data.results)
    })
    .catch((e) => {
      console.log(e);
    });
};



document.addEventListener('DOMContentLoaded',apiData)