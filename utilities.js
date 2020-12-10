 export function requestData(url) {
    return fetch(url
    )
        .then(function(response) {
          // if (!response.ok) {
          //   throw Error(response.statusText);
          // } else {
            console.log(response.json());
            response = response.json();
          })
        // })
        .then(data => {
            // if(!response.ok) {
            //   throw new Error(`${data.statusText}: ${data.message}`);
            // }
            console.log(data)
            // if(data.results) {const results = data.results;return results;}
            // else if(data.equipment) {const equipmentCategory = data.equipment; return equipmentCategory;}
            // else if(data.desc) {const description = data.desc; return description;}
            // else{ return data;}
        })
        // .catch(error => console.log('There was an error: ', error));
}