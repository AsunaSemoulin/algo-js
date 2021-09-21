// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {
    let partOne = document.getElementById("part-one");
    let partTwo = document.getElementById("part-two");
    let partThree = document.getElementById("part-three");
    let partFour = document.getElementById("part-four");

    let target = document.getElementById("target");

    let partOneDataMin = parseInt(partOne.getAttribute("data-min"));
    let partOneDataMax = parseInt(partOne.getAttribute("data-max"));
    let partOneValue = partOneDataMin;

    let partTwoDataMin = parseInt(partTwo.getAttribute("data-min"));
    let partTwoDataMax = parseInt(partTwo.getAttribute("data-max"));
    let partTwoValue = partTwoDataMin;

    let partThreeDataMin = parseInt(partThree.getAttribute("data-min"));
    let partThreeDataMax = parseInt(partThree.getAttribute("data-max"));
    let partThreeValue = partThreeDataMin;

    let partFourDataMin = parseInt(partFour.getAttribute("data-min"));
    let partFourDataMax = parseInt(partFour.getAttribute("data-max"));
    let partFourValue = partFourDataMin;
    
    partOne.addEventListener("click", () => {
        if (partOneValue == partOneDataMax) {
            partOneValue = partOneDataMin;
        } else {
            partOneValue++;
        }

        target.innerHTML = `+${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`
    })

    partTwo.addEventListener("click", () => {
        if (partTwoValue == partTwoDataMax) {
            partTwoValue = partTwoDataMin;
        } else {
            partTwoValue++;
        }

        target.innerHTML = `+${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`
    })

    partThree.addEventListener("click", () => {
        if (partThreeValue == partThreeDataMax) {
            partThreeValue = partThreeDataMin;
        } else {
            partThreeValue++;
        }

        target.innerHTML = `+${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`
    })

    partFour.addEventListener("click", () => {
        if (partFourValue == partFourDataMax) {
            partFourValue = partFourDataMin;
        } else {
            partFourValue++;
        }

        target.innerHTML = `+${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`
    })
})();
