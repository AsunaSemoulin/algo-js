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
                partOneValue = partOne.value;
                target.innerHTML = `+${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`;
                i++
            } setTimeout(turn, 50);
        }

        turn();
    })

    fixPartTwo.addEventListener("click", () => {
        let i = 0;

        let partTwo = document.getElementById("part-two");
        let partTwoMin = parseInt(partTwo.getAttribute("data-min"));
        let partTwoMax = parseInt(partTwo.getAttribute("data-max"));

        let turn = () => {
            if (i < 10) {
                partTwo.value = Math.floor(Math.random() * (partTwoMax - partTwoMin) + partTwoMin);
                partTwoValue = partTwo.value;
                target.innerHTML = `+${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`;
                i++
            } setTimeout(turn, 50);
        }

        turn();       
    })

    fixPartThree.addEventListener("click", () => {
        let i = 0;

        let partThree = document.getElementById("part-three");
        let partThreeMin = parseInt(partThree.getAttribute("data-min"));
        let partThreeMax = parseInt(partThree.getAttribute("data-max"));

        let turn = () => {
            if (i < 10) {
                partThree.value = Math.floor(Math.random() * (partThreeMax - partThreeMin) + partThreeMin);
                partThreeValue = partThree.value;
                target.innerHTML = `+${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`;
                i++
            } setTimeout(turn, 50);
        }

        turn();
    })

    fixPartFour.addEventListener("click", () => {
        let i = 0;

        let partFour = document.getElementById("part-four");
        let partFourMin = parseInt(partFour.getAttribute("data-min"));
        let partFourMax = parseInt(partFour.getAttribute("data-max"));

        let turn = () => {
            if (i < 10) {
                partFour.value = Math.floor(Math.random() * (partFourMax - partFourMin) + partFourMin);
                partFourValue = partFour.value;
                target.innerHTML = `+${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`;
                i++
            } setTimeout(turn, 50);
        }

        turn();
    })
})();
