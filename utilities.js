/**
   * @function getList
   * @param {string} url The api url string to be parsed for data 
   */
 export function getList(url) {
    return fetch(url,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
            if(!response.ok) {
              throw new Error(`${data.statusText}: ${data.message}`);
            }
            else
            if(data.results) {arr = data.results;}
            else if(data.equipment) {arr = data.equipment; }
            else if(data.desc) {arr = data.desc}
            else{ arr= data;}
            return arr;
        })
        .catch(error => console.log('There was an error: ', error));
}