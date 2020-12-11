onload = () => {
    for(let i = 0; i < 9; i++ ){
        document.getElementById('game').innerHTML+='<div class="block"></div>'
    }
    let Turn = 0
    let countTurn = 0
    let crossWon = 0
    let zeroWon = 0
    let nobodyWon = 0
    document.getElementById('countTurn').innerHTML = countTurn;
    document.getElementById('crossWon').innerHTML = crossWon;
    document.getElementById('zeroWon').innerHTML = zeroWon;
    document.getElementById('nobodyWon').innerHTML = nobodyWon

    function restart(){
        document.getElementById('game').innerHTML = ''
        countTurn = 0
        document.getElementById('crossWon').innerHTML = crossWon;
        document.getElementById('zeroWon').innerHTML = zeroWon;
        document.getElementById('countTurn').innerHTML = countTurn;
        for(let i = 0; i < 9; i++){
            document.getElementById('game').innerHTML+='<div class="block"></div>'
        }
    }
    const x = '<img src="https://avatanplus.com/files/resources/original/5968a2c8f2ed115d40bbe123.png">'
    const b = '<img src="https://pngimg.com/uploads/circle/circle_PNG44.png">'
    document.getElementById('game').onclick = function(event){
        if(event.target.className === 'block'){
            Turn++
            countTurn++
            document.getElementById('countTurn').innerHTML = countTurn;

                function TurnUser(){
                    event.target.innerHTML = b
                    setTimeout(checkWinner, 1000)
                    setTimeout(drawCheck, 1100)
                }
                TurnUser()

                function startAi(){
                    ai()
                    setInterval(checkWinner, 1000)
                    setTimeout(drawCheck, 1100)
                }
                startAi()
        }    
    }

    function ai(){
        const block = document.getElementsByClassName('block');
        let i = Math.floor(Math.random() * (8 - 0)) + 0;
       
        if(block[i].innerHTML !== x && block[i].innerHTML !== b){
                block[i].innerHTML = x                
        } else {
            ai()
        }
    }

    function crossWonTest(){
        crossWon++
        restart()
    }

    function zeroWonTest(){
        zeroWon++
        restart()
    }

    function drawCheck(){
        const G = document.getElementsByClassName('block');
        if(G[0].innerHTML !== '' && G[1].innerHTML !== '' && G[2].innerHTML !== '' && G[3].innerHTML !== '' && G[4].innerHTML !== '' && G[5].innerHTML !== '' && G[6].innerHTML !== '' && G[7].innerHTML !== '' && G[8].innerHTML !== ''){
            alert('Nobody won')
            nobodyWon++
            document.getElementById('nobodyWon').innerHTML = nobodyWon
            restart()
        } 
    }

    function checkWinner(){
        const allblock = document.getElementsByClassName('block');
            if (allblock[0].innerHTML === x && allblock[1].innerHTML === x && allblock[2].innerHTML === x){
                document.getElementsByClassName('block')[0].style.backgroundColor='green'
                document.getElementsByClassName('block')[1].style.backgroundColor='green'
                document.getElementsByClassName('block')[2].style.backgroundColor='green'
                setTimeout(crossWonTest, 1000)

            }else if(allblock[3].innerHTML === x && allblock[4].innerHTML === x && allblock[5].innerHTML === x){
                document.getElementsByClassName('block')[3].style.backgroundColor='green'
                document.getElementsByClassName('block')[4].style.backgroundColor='green'
                document.getElementsByClassName('block')[5].style.backgroundColor='green'
                setTimeout(crossWonTest, 1000)
                
            }else if(allblock[6].innerHTML === x && allblock[7].innerHTML === x && allblock[8].innerHTML === x){
                document.getElementsByClassName('block')[6].style.backgroundColor='green'
                document.getElementsByClassName('block')[7].style.backgroundColor='green'
                document.getElementsByClassName('block')[8].style.backgroundColor='green'
                setTimeout(crossWonTest, 1000)
                
            }else if(allblock[0].innerHTML === x && allblock[3].innerHTML === x && allblock[6].innerHTML === x){
                document.getElementsByClassName('block')[0].style.backgroundColor='green'
                document.getElementsByClassName('block')[3].style.backgroundColor='green'
                document.getElementsByClassName('block')[6].style.backgroundColor='green'
                setTimeout(crossWonTest, 1000)
                
            }else if(allblock[1].innerHTML === x && allblock[4].innerHTML === x && allblock[7].innerHTML === x){
                document.getElementsByClassName('block')[1].style.backgroundColor='green'
                document.getElementsByClassName('block')[4].style.backgroundColor='green'
                document.getElementsByClassName('block')[7].style.backgroundColor='green'
                setTimeout(crossWonTest, 1000)
                
            }else if(allblock[2].innerHTML === x && allblock[5].innerHTML === x && allblock[8].innerHTML === x){
                document.getElementsByClassName('block')[2].style.backgroundColor='green'
                document.getElementsByClassName('block')[5].style.backgroundColor='green'
                document.getElementsByClassName('block')[8].style.backgroundColor='green'
                setTimeout(crossWonTest, 1000)
                
            }else if(allblock[0].innerHTML === x && allblock[4].innerHTML === x && allblock[8].innerHTML === x){
                document.getElementsByClassName('block')[0].style.backgroundColor='green'
                document.getElementsByClassName('block')[4].style.backgroundColor='green'
                document.getElementsByClassName('block')[8].style.backgroundColor='green'
                setTimeout(crossWonTest, 1000)
                
            }else if(allblock[2].innerHTML === x && allblock[4].innerHTML === x && allblock[6].innerHTML === x){
                document.getElementsByClassName('block')[2].style.backgroundColor='green'
                document.getElementsByClassName('block')[4].style.backgroundColor='green'
                document.getElementsByClassName('block')[6].style.backgroundColor='green'
                setTimeout(crossWonTest, 1000)
                
            }else if(allblock[0].innerHTML === b && allblock[1].innerHTML === b && allblock[2].innerHTML === b){
                document.getElementsByClassName('block')[0].style.backgroundColor='green'
                document.getElementsByClassName('block')[1].style.backgroundColor='green'
                document.getElementsByClassName('block')[2].style.backgroundColor='green'
                setTimeout(zeroWonTest, 1000)
                
            }else if(allblock[3].innerHTML === b && allblock[4].innerHTML === b && allblock[5].innerHTML === b){
                document.getElementsByClassName('block')[3].style.backgroundColor='green'
                document.getElementsByClassName('block')[4].style.backgroundColor='green'
                document.getElementsByClassName('block')[5].style.backgroundColor='green'
                setTimeout(zeroWonTest, 1000)
          
            }else if(allblock[6].innerHTML === b && allblock[7].innerHTML === b && allblock[8].innerHTML === b){
                document.getElementsByClassName('block')[6].style.backgroundColor='green'
                document.getElementsByClassName('block')[7].style.backgroundColor='green'
                document.getElementsByClassName('block')[8].style.backgroundColor='green'
                setTimeout(zeroWonTest, 1000)
          
            }else if(allblock[0].innerHTML === b && allblock[3].innerHTML === b && allblock[6].innerHTML === b){
                document.getElementsByClassName('block')[0].style.backgroundColor='green'
                document.getElementsByClassName('block')[3].style.backgroundColor='green'
                document.getElementsByClassName('block')[6].style.backgroundColor='green'
                setTimeout(zeroWonTest, 1000)
          
            }else if(allblock[1].innerHTML === b && allblock[4].innerHTML === b && allblock[7].innerHTML === b){
                document.getElementsByClassName('block')[1].style.backgroundColor='green'
                document.getElementsByClassName('block')[4].style.backgroundColor='green'
                document.getElementsByClassName('block')[7].style.backgroundColor='green'
                setTimeout(zeroWonTest, 1000)
          
            }else if(allblock[2].innerHTML === b && allblock[5].innerHTML === b && allblock[8].innerHTML === b){
                document.getElementsByClassName('block')[2].style.backgroundColor='green'
                document.getElementsByClassName('block')[5].style.backgroundColor='green'
                document.getElementsByClassName('block')[8].style.backgroundColor='green'
                setTimeout(zeroWonTest, 1000)
          
            }else if(allblock[0].innerHTML === b && allblock[4].innerHTML === b && allblock[8].innerHTML === b){
                document.getElementsByClassName('block')[0].style.backgroundColor='green'
                document.getElementsByClassName('block')[4].style.backgroundColor='green'
                document.getElementsByClassName('block')[8].style.backgroundColor='green'
                setTimeout(zeroWonTest, 1000)
          
            }else if(allblock[2].innerHTML === b && allblock[4].innerHTML === b && allblock[6].innerHTML === b){
                document.getElementsByClassName('block')[2].style.backgroundColor='green'
                document.getElementsByClassName('block')[4].style.backgroundColor='green'
                document.getElementsByClassName('block')[6].style.backgroundColor='green'
                setTimeout(zeroWonTest, 1000)
          
            }
    }
}
