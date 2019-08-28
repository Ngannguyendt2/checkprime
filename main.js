let number = Number(prompt("Import N"));
function checkPrime() {
    let flag = true;
    for (let i = 2; i < number; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
                break;
            } else {
                flag = true;
            }
        }
        if (flag == true) {

            document.write(i + "is prime");
            document.write("<br>");
        }
    }
}

checkPrime();