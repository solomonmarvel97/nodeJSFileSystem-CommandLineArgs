// function printArgument(args) {
//     let name = args[0]
//     let greeting = args[1]
//     return `Hello ${name}, ${greeting}`
// }

// const args = process.argv.slice(2)
// console.log(printArgument(args))

function operation(args) {
    let command = args[0].toString().replace("-", "")
    
    let value = args[1]
    
    console.log(command)
    console.log(value)

    if(command == "jto") {
        // let objectValue = JSON.parse(value)
        return objectValue
    } else if (command == "otj") {
        let jsonValue = JSON.stringify(value)
        return jsonValue
    }
}

operation(process.argv.slice(2))

// console.log(JSON.stringify({name:"Marvelous Akporowho"}))
