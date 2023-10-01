
$.ajax({
    url: 'https://webox.ie/copy/send-email/cv-email-send.php',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    type: "POST", /* or type:"GET" or type:"PUT" */
    dataType: "json",
    data: {
        "Id": 78912,
        "name": 'name test',
        "email": 'email@test.ie',
        "msg": "some message"
    },
    success: function (result) {
        console.log(result);
    },
    error: function () {
        console.log("error");
    }
});


// $.ajax({
//     url: 'https://erogadgets.ie/cv-email-send.php',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     type: "GET", /* or type:"GET" or type:"PUT" */
//     dataType: "json",
//     data: {

//     "Id": 78912,
//     "Customer": "Jason Sweet",
//     },
//     success: function (result) {
//         console.log(result);
//     },
//     error: function () {
//         console.log("error");
//     }
// });


// $.ajax({
//   type: "POST",
//   url: "https://erogadgets.ie/cv-email-send.php",
//   data: `{
//     "Id": 78912,
//     "Customer": "Jason Sweet",
//   }`,
//   success: function (result) {
//      console.log(result);
//   },
//   dataType: "json"
// });


// fetch('https://erogadgets.ie/cv-email-send.php', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ "id": 78912 })
// })
//    .then(response => response.json())
//    .then(response => console.log(JSON.stringify(response)))


// var xhr = new XMLHttpRequest();
// xhr.open("POST", "https://erogadgets.ie/cv-email-send.php", true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(JSON.stringify({
//     value: {data: 'testdata'}
// }));

