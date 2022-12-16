function lastCommit(user) {
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `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 ${GH_KEY2}`}})
        .then((data) => {
            // console.log(data);
            return data.json()
        }).then((jsonData) => {
            // console.log(jsonData); //returns array of objects with dates

            return "User " + jsonData[0].actor.display_login + " last committed to GitHub on " + jsonData[0].created_at + "."
        })
}

lastCommit('nicolesweeden').then((data) => console.log(data));
const wait = secs => new Promise((resolve, reject) => setTimeout(resolve, secs));
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


