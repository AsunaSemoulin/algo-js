//06-objects/02-assign-properties/script.js - 6.2: assign properties


(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        computers.forEach(computer => {
            if (typeof computer.os == "undefined") {
                computer.os = defaultProps.os;
            }
            if (typeof computer.available == "undefined") {
                computer.available = defaultProps.available;
            }
            if ( typeof computer.user == "undefined") {
                computer.user = defaultProps.user;
            }
        })

        computers.forEach(computer => console.log(computer));
    })
})();
