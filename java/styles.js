var a = parseInt(prompt("Combien de boulons voulez-vous? 5¢"));
var b = parseInt(prompt("Combien de rondelles voulez-vous? 1¢"));
var c = parseInt(prompt("Combien d'écrous voulez-vous? 3¢ "));
if (b == c && c == a){
  var tax = 1.13
var a = a*5
var b = b*1
var c = c*3
  var prixtotal = (a+b+c*tax)/100
var prix = Math.round(prixtotal * 100) / 100
alert("Le coût est " + prix + " $")
} else {
  alert("Regarde a ton ordre encore! Tu veux avoir le même nombre de boulons et d'écrous!")
}
