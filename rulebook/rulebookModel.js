
export default class RulebookModel{
  constructor(){
    this.baseUrl = "https://www.dnd5eapi.co/api/";
  }
  getList(url) {
      // console.log(url);
      return fetch(url)
          .then(function(response) {
            if (!response.ok) {
              throw Error(response.statusText);
            } else {
              // console.log(response.json());
               return response.json();
            }
          })
          .then(data => {
            //return data.results ? arr = data.results : arr = data.equipment; 
              let arr;
              if(data.results) {arr = data.results;}
              else if(data.equipment) {arr = data.equipment; }
              else if(data.desc) {arr = data.desc}
              else{ arr= data;}
              // console.log(arr)
              return arr;
          })
          .catch(error => console.log('There was an error: ', error));
  }
}

    



