const dino = document.getElementById("dino");
        const cactus = document.getElementById("cactus");
        function jump() {
            if (dino.classList != "jump") {
                dino.classList.add("jump");
                setTimeout(function () {
                    dino.classList.remove("jump");
                }, 300);
            }
        }

        document.addEventListener('keydown', (event) => {
            jump();
        });

        var gameOver = setInterval(function(){
         var currentDino = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
         var currentCactus = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
         if(currentCactus < 53 && currentCactus > 0 && currentDino > 140){
            alert("Game Over!");
         }
        },10);

