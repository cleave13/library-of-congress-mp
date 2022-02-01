var locUrl = 'https://www.loc.gov/search/?q=baseball&fo=json'

fetch(locUrl).then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
            console.log(data);
        })
    }
})