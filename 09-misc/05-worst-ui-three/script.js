// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let fixPartOne = document.getElementById("fix-part-one");
    let fixPartTwo = document.getElementById("fix-part-two");
    let fixPartThree = document.getElementById("fix-part-three");
    let fixPartFour = document.getElementById("fix-part-four");

    let partOneValue = 0;
    let partTwoValue = 0;
    let partThreeValue = 0;
    let partFourValue = 0;

    let target = document.getElementById("target");

    fixPartOne.addEventListener("click", () => {
        let i = 0;

        let partOne = document.getElementById("part-one");
        let partOneMin = parseInt(partOne.getAttribute("data-min"));
        let partOneMax = parseInt(partOne.getAttribute("data-max"));

        let turn = () => {
            if (i < 10) {
                partOne.value = Math.floor(Math.random() * (partOneMax - partOneMin) + partOneMin);
                i++
            } setTimeout(turn, 50);
        }

        turn();
        partOneValue = partOne.value;

        target.innerHTML = `+${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`;
    })

    fixPartTwo.addEventListener("click", () => {
        
    })

    fixPartThree.addEventListener("click", () => {
        
    })

    fixPartFour.addEventListener("click", () => {
        
    })
})();
