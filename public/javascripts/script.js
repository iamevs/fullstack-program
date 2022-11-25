function calc() {
    let m1 = Number(document.getElementById("mark1").value);
    let m2 = Number(document.getElementById("mark2").value);
    let m3 = Number(document.getElementById("mark3").value);
    let m4 = Number(document.getElementById("mark4").value);
    let m5 = Number(document.getElementById("mark5").value);
    let total = m1 + m2 + m3 + m4 + m5;
    let avg = Math.round(total / 5);
    document.getElementById("total").value = total;
    document.getElementById("avg").value = avg;
}