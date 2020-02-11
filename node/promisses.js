let soma = new Promise((resolve, reject) => {
    let a = 1+1
    if (a == 0) {
     resolve('Sucess')
    } else {
        reject('Error')
    }
})

soma.then((message)=> {
    console.log(message)
}).catch((message) => {
    console.log(message)
})