/**
 * @class RulebookModel
 * @summary Utility for fetching data from dnd5eapi.co
 */
export default class RulebookModel{
  constructor(){
    this.baseUrl = "https://www.dnd5eapi.co/api/";
  }
  /**
   * @function getList
   * @param {string} url The api url string to be parsed for data 
   */
  getList(url) {
      return fetch(url)
          .then(function(response) {
            if (!response.ok) {
              throw Error(response.statusText);
            } else {
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
              return arr;
          })
          .catch(error => console.log('There was an error: ', error));
  }
}

    



