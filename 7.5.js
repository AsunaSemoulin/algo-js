let sort = (arr) => {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i - 1] > arr[i]) {
                done = false;
                let tmp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmp;
            }
        }
    }

    return arr;
}

console.log(sort(["1", "3", "2"]))