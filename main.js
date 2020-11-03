
document.addEventListener('DOMContentLoaded', () => {
    Continuar();
});
const Continuar = () => {
    const btc = document.getElementById("continuar");
    const bta = document.getElementById("atras");
    const rl = document.getElementById("CallU");
    const div1 = document.getElementById("d1");
    const div2 = document.getElementById("d2");

    document.addEventListener('click', () => {
        if (rl.value !== "") {
            btc.disabled = false;
        }
    });
    btc.addEventListener('click', () => {
        bta.style.display = "block";
        div1.style.display = "none";
        div2.style.display = "block";
        btc.addEventListener('click', () => {
            

        });
    });

}

