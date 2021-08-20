document.querySelector("#orderId").innerHTML = `#${Math.floor(100000 + Math.random() * 900434343000)}`;


document.querySelector("#advPack").innerText = `${localStorage.getItem("advPack")}`;
document.querySelector("#advPrice").innerText = `${localStorage.getItem("advPrice")}`;


document.querySelector("#stdPack").innerText = `${localStorage.getItem("stdPack")}`;
document.querySelector("#stdPrice").innerText = `${localStorage.getItem("stdPrice")}`;