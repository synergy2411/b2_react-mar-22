const demoPromise= () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({message : "SUCCESS"})
        }, 2000)
    })
}

const callPromise = () => {
    console.log("Start")
    demoPromise()
        .then(response => console.log(response))
        .catch(console.log)
    console.log("End")
}

callPromise();

// OUTPUT -> START -> END -> SUCCESS