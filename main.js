const input =document.querySelector("input")
const form = document.querySelector("form")
const output = document.getElementById("output")

function factorialNum(e){
    e.preventDefault()

    let number = input.value

    console.log(number)

    let fact = 1

    for(let i=1;i<=number;i++){
        fact=fact*i
    }
    let final = fact
    output.value=fact
    
}

form.addEventListener("submit" , factorialNum)