//const apiKey = 'didieu API key na';

fetch(`https://dramajepangmuwahid-default-rtdb.firebaseio.com/list.json`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then(data => {
        console.log(data);
        var responseContainer = document.getElementById('response-container');
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var response = data[key];
                var link = response.link;
                var nama = response.nama;
                // var sinopsis = response.sinopsis;
                var responseDiv = document.createElement('div');
                responseDiv.classList.add('response');
                responseDiv.innerHTML = '<img src="' + link + '" alt="' + nama + '"><br>' + nama;
                // responseDiv.innerHTML = '<img src="' + link + '" alt="' + nama + '"><br>' + nama + '<br>' + sinopsis;    ieu aya sinopsisan
                responseContainer.appendChild(responseDiv);
            }
        }

    })
    .catch(error => {
        console.error('Error:', error);
    });