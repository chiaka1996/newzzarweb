const tableBody = document.querySelector('#tableBody');

window.addEventListener('load', () => {
    axios.get("http://localhost:5000/apis/reviewmessage")
    .then((response) => {
     console.log(response.data);
     const result = response.data;
     
     result.map((res, i) => {
        let nodeList = document.createElement("tr");
        let noodeNumbertData = document.createElement("th");
        let noodeNametData = document.createElement("td");
        let noodeEmailData = document.createElement("td");
        let noodeMessagetData = document.createElement("td");
        let textNumber = document.createTextNode(i + 1);
        let nameData = document.createTextNode(res.fullName);
        let emailData = document.createTextNode(res.email);
        let messageData = document.createTextNode(res.message);
        noodeNumbertData.appendChild(textNumber);
        noodeNametData.appendChild(nameData);
        noodeEmailData.appendChild(emailData);
        noodeMessagetData.appendChild(messageData);
        nodeList.appendChild(noodeNumbertData);
        nodeList.appendChild(noodeNametData);
        nodeList.appendChild(noodeEmailData);
        nodeList.appendChild(noodeMessagetData);
        tableBody.appendChild(nodeList);
     });
    });

  });