function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formURL = document.getElementById('name').value;
   
    if (Client.checkForName(formURL)) {
        console.log("::: Form Submitted :::");
        console.log(JSON.stringify(formURL));

        fetch('http://localhost:3000/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080'
            },
            body: JSON.stringify({formURL})
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res);
            document.getElementById('results').innerText = `Language: ${res.language}`;
            document.getElementById('copy').innerText = `Article Content: ${res.text}`;
        })
     } else {
        alert("Enter valid url with http:// or https://")
     }
};

function testURL (url) {
    if (url != null){
        return true
    } else {
        return false
    }
}

export { handleSubmit, testURL };
