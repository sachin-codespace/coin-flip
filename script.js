function flipCoin() {
    const coin = document.getElementById('coin');
    const coinImage = document.getElementById('coin-image');
    const result = document.getElementById('result');

    coin.classList.add('flip');
    const random = Math.random();
   
setTimeout(()=>{
    if (random < 0.5) {
        coinImage.src = 'head.png';
        result.textContent = 'It\'s Heads!';
    } else {
        coinImage.src = 'tails.png';
        result.textContent = 'It\'s Tails!';
    }
        coin.classList.remove('flip');
    }, 2000);

    setTimeout(()=>{
    result.textContent="";},6000)
}

