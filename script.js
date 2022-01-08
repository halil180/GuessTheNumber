/// this was my assignment at hicoders, that's why the variable names are in turkish and english but
// but i think its all self-explanatory  
//// 

// this happen when you click the function
document.getElementById('btn').addEventListener("click", difference);
// random number
let rastgele = Math.floor(Math.random() * 10 + 1);
console.log(rastgele)
// guesses 
let tahmin = 0;




function difference() {
    //// input
    let cevap = document.querySelector("#girdi").value;

    // if the user cant guess the right answer  programm increases the tahmin variable by one
    tahmin += 1

    if (cevap == rastgele) {
        document.getElementById("kalan").style.display = "none";
        if (tahmin == 1) {
            // user gets 100 points if they guess it right at the firts time... 
            document.getElementById('puan').innerHTML = '100 pt';
        } else if (tahmin == 2) {
            document.getElementById('puan').innerHTML = '75 pt';
        } else if (tahmin == 3) {
            document.getElementById('puan').innerHTML = '50 pt';
        } else if (tahmin == 4) {
            document.getElementById('puan').innerHTML = '25 pt';
        } // Congratulations 
        document.getElementById("deneme").style.display = "block";
        document.getElementById("puan").style.color = "green";
        document.getElementById('ahmet').innerHTML = 'You found your phone!';
    } else if (cevap < rastgele) {
        // we help users to find their phones 
        document.getElementById('hamdi').innerHTML = 'you should look up ';

    } else if (cevap > rastgele) {
        //we help users to find their phones  
        document.getElementById('hamdi').innerHTML = 'you should look down';
    }



    // guesses left
    if (tahmin == 1) {
        document.getElementById('kalan').innerHTML = 'guesses left : 3';
    } else if (tahmin == 2) {
        document.getElementById('kalan').innerHTML = 'guesses left : 2';
    } else if (tahmin == 3) {
        document.getElementById('kalan').innerHTML = 'guesses left: 1';
    } else if (tahmin == 4) {
        document.getElementById("kalan").style.color = "red";
        document.getElementById('kalan').innerHTML = 'you lost the train... 0 points ';

    } else if (tahmin == 5) {
        // this happens if u lose
        alert("the train has left");
        document.getElementById('kalan').innerHTML = '0 points';
        document.location.reload();
        clearInterval(interval);
    }



}