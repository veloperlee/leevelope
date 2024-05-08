// var request = new XMLHttpRequest();
// request.onreadystatechange = function(event){
//     if(request.readyState == 4){
//         if(request.status == 200){
//             console.log(request.responseText)
//             var json = JSON.parse(request.responseText)
//         }
//     }
// }
// request.open('get','/index.json',true);
// request.send();


// fetch('index.json')
// .then(function (response) {
//     return response.json();
// })
// .then(function(json) {
//     document.body.textContent = JSON.stringify(json);
// });

// async function getJson() {
//     const response = await fetch('index.json');
//     return await response.json();
// }

(async() => {
    const response = await fetch('index.json');
    const json = await response.json();
    console.log(json.length);
    for (item of json) console.log(item.name);
    document.body.textContent = JSON.stringify(json);
})();
