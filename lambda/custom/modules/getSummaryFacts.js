module.exports = async () => {
    let outputSpeech = "Greeting, ";

    let elevatorsCount = await http('get', "https://mohammedrestapi.azurewebsites.net/api/");
    let elevatorAllData = await http('get', "https://mohammedrestapi.azurewebsites.net/api/");
    let buildingsCount = await http('get', "https://mohammedrestapi.azurewebsites.net/api/");
    let customersCount = await http('get', "https://mohammedrestapi.azurewebsites.net/api/");
    let batteriesCount = await http('get', "https://mohammedrestapi.azurewebsites.net/api/");
    let citiesCount = await http('get', "https://mohammedrestapi.azurewebsites.net/api/");
    let quotesCount = await http('get', "https://mohammedrestapi.azurewebsites.net/api/");
    let leadInContactRequestsCount = await http('get', "https://mohammedrestapi.azurewebsites.net/api/");

    outputSpeech = `Hi Sir welcome to Rocket Elevator Statistic. There are currently ${
        elevatorAll.length
    } elevators deployed in the ${building.length} buildings of your ${
        customer.length
    } customers . Currently, ${
        elevator.length
    } elevators are not in Running Status and are being serviced.
    ${batteries.length} Battreries are deployed across ${
        cities.length
    } cities. On another note you currently have ${
        quotes.length
    } quotes awaiting processing. You also have ${
        leads.length
    } leads in your contact requests
    `;

    return outputSpeech

};