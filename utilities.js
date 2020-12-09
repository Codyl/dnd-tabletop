/**
   * @function requestData
   * @param {string} url The api url string to be parsed for data 
   */
 export function requestData(url) {
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
            if(!response.ok) {
              throw new Error(`${data.statusText}: ${data.message}`);
            }
            else if(data.results) {const results = data.results;return results;}
            else if(data.equipment) {const equipmentCategory = data.equipment; return equipmentCategory;}
            else if(data.desc) {arr = data.desc}
            else{ arr= data;}
            return arr;
        })
        .catch(error => console.log('There was an error: ', error));
}