function button() {
    let grades = 0
    let input1 = document.getElementById("input1")
    if (input1.checked) {
        grades = grades + 1
    }
    
    let input2 = document.getElementById("input2")
    if (input2.checked) {
        grades = grades + 1
    }

    let input3 = document.getElementById("input3")
    if (input3.checked) {
        grades = grades + 1
    }

    let input4 = document.getElementById("input4")
    if (input4.checked) {
        grades = grades + 1
    }

    let input5 = document.getElementById("input5")
    if (input5.checked) {
        grades = grades + 1
    }

    let input6 = document.getElementById("input6")
    if (input6.checked) {
        grades = grades + 1
    }

    let input7 = document.getElementById("input7")
    if (input7.checked) {
        grades = grades + 1
    }

    let input8 = document.getElementById("input8")
    if (input8.checked) {
        grades = grades + 1
    }

    let input9 = document.getElementById("input9")
    if (input9.checked) {
        grades = grades + 1
    }

    let input10 = document.getElementById("input10")
    if (input10.checked) {
        grades = grades + 1
    }

    let testResult = document.getElementById("result")
    // testResult.innerText="Your result is" + " " + grades + " " + "from 10"
    testResult.innerText=`Your result is ${grades} from 10`

    
}