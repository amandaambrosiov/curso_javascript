let nome = "Amanda";

for(let i = 0; i < 10; i = i + 1) {

    if (i == 3) {
        nome = "Joana";
    }

    if(i == 5 && nome == "Joana"){
        console.log("O nome é Joana, pode parar")
        break;
    }

    console.log(i);
}