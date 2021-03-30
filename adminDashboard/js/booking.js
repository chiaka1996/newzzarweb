const bookingBody = document.querySelector('#bookingBody');

window.addEventListener('load', () => {
    axios.get("http://localhost:5000/apis/gethiremessage")
    .then((response) => {
     console.log(response.data);
     const result = response.data;
     
     result.map((res, i) => {
        let nodeList = document.createElement("tr");
        let noodeNumbertData = document.createElement("th");
        let noodeDateData = document.createElement("td");
        let noodeNameData = document.createElement("td");
        let noodeEmailData = document.createElement("td");
        let noodePhoneData = document.createElement("td");
        let noodeEventTypeData = document.createElement("td");
        let noodeEventLocationData = document.createElement("td");
        let textNumber = document.createTextNode(i + 1);
        let dateData = document.createTextNode(res.updatedAt);
        let nameData = document.createTextNode(res.fullName);
        let emailData = document.createTextNode(res.email);
        let phoneData = document.createTextNode(res.phone);
        let eventTypeData = document.createTextNode(res.eventType);
        let eventLocationData = document.createTextNode(res.eventLocation);
        noodeNumbertData.appendChild(textNumber);
        noodeDateData.appendChild(dateData);
        noodeNameData.appendChild(nameData);
        noodeEmailData.appendChild(emailData);
        noodePhoneData.appendChild(phoneData);
        noodeEventTypeData.appendChild(eventTypeData);
        noodeEventLocationData.appendChild(eventLocationData);
        nodeList.appendChild(noodeNumbertData);
        nodeList.appendChild(noodeDateData);
        nodeList.appendChild(noodeNameData);
        nodeList.appendChild(noodeEmailData);
        nodeList.appendChild(noodePhoneData);
        nodeList.appendChild(noodeEventTypeData);
        nodeList.appendChild(noodeEventLocationData);
        bookingBody.appendChild(nodeList);
     });
    });

  });