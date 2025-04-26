//Topics added to create random message
const topic = {
    weather: ['sunny', 'rainy', 'foggy', 'snowing'],
    drink: ['water', 'wine', 'juice', 'whisky', 'soda'],
    relaxing: ['balcony', 'grass', 'pool']
}
    
//Function to generate message for each topic
const generateMessage = obj => {
    let newMessages = [];

    for(let objValue in obj) {
        let topicValue = Math.floor(Math.random() * obj[objValue].length);
        
        switch(objValue) {
            case 'weather': 
                newMessages.push(`Today the weather is ${obj.weather[topicValue]}!`);
                break;
            case 'drink': 
                newMessages.push(`I will have a ${obj.drink[topicValue]} in the afternoon.`);
                break;
             case 'relaxing':
                newMessages.push(`And maybe take some time to relax in the ${obj.relaxing[topicValue]}.`);
                break;
        } 
    }
    return newMessages;
}

//Print all messages
const joinMessage = func => {
    for(let i = 0; i < func.length; i++) {
        console.log(func[i]);
    }
}

//Begin
joinMessage(generateMessage(topic));
