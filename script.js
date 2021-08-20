const tabs = document.querySelectorAll("#tabs ul li a");
const packages = document.querySelectorAll(".packages .pack");
const standard_package = document.querySelector("#p_standard_price");
const advanced_package = document.querySelector("#p_advanced_price");
const packageDur = document.querySelectorAll("#p_duration");
const standard_buy_link = document.querySelector("#standard_buy_link");
const advanced_buy_link = document.querySelector("#advanced_buy_link");
let add_on_pack = document.getElementById("add_on_pack");
const showFeatures = document.querySelector("#customIl");


tabs.forEach(function (tab, tab_index) {
    tab.addEventListener("click", function (e) {
        add_on_pack.checked = false;
        showFeatures.classList.add("hideFeatures");

        add_on_pack.addEventListener("change", function (e) {
            if (e.target.checked) {
                if (tab_index == 0) {
                    advanced_package.innerHTML = "$100<sub id='p_duration'>/year</sub>";
                    advanced_buy_link.href = "./pages/success1.html";
                    localStorage.setItem("advPack", "Advanced with CI addon");
                    localStorage.setItem("advPrice", "$100/year");
                    showFeatures.classList.remove("hideFeatures");
                }
                if (tab_index == 1) {
                    advanced_package.innerHTML = "$80<sub id='p_duration'>/quarterly</sub>";
                    advanced_buy_link.href = "./pages/success1.html";
                    localStorage.setItem("advPack", "Advanced with CI addon");
                    localStorage.setItem("advPrice", "$80/quarterly");
                    showFeatures.classList.remove("hideFeatures");
                }
                if (tab_index == 2) {
                    advanced_package.innerHTML = "$60<sub id='p_duration'>/monthly</sub>";
                    advanced_buy_link.href = "./pages/success1.html";
                    localStorage.setItem("advPack", "Advanced with CI addon");
                    localStorage.setItem("advPrice", "$60/monthly");
                    showFeatures.classList.remove("hideFeatures");
                }
            } else {
                if (tab_index == 0) {
                    advanced_package.innerHTML = "$80<sub id='p_duration'>/year</sub>";
                    advanced_buy_link.href = "./pages/success1.html";
                    localStorage.setItem("advPack", "Advanced");
                    localStorage.setItem("advPrice", "$80/year");
                    showFeatures.classList.add("hideFeatures");
                }
                if (tab_index == 1) {
                    advanced_package.innerHTML = "$60<sub id='p_duration'>/quarterly</sub>";
                    advanced_buy_link.href = "./pages/success1.html";
                    localStorage.setItem("advPack", "Advanced");
                    localStorage.setItem("advPrice", "$60/quarterly");
                    showFeatures.classList.add("hideFeatures");
                }
                if (tab_index == 2) {
                    advanced_package.innerHTML = "$40<sub id='p_duration'>/monthly</sub>";
                    advanced_buy_link.href = "./pages/success1.html";
                    localStorage.setItem("advPack", "Advanced");
                    localStorage.setItem("advPrice", "$40/monthly");
                    showFeatures.classList.add("hideFeatures");
                }
            }
        })
        e.preventDefault();
        tabs.forEach(function (tab) {
            tab.classList.remove("active");
        })
        tab.classList.add("active");

        packages.forEach(function () {
            if (tab_index == 0) {
                standard_package.innerHTML = "$50<sub id='p_duration'>/year</sub>";
                advanced_package.innerHTML = "$80<sub id='p_duration'>/year</sub>";
                localStorage.setItem("stdPack", "Standard");
                localStorage.setItem("stdPrice", "$50/year");
                localStorage.setItem("advPack", "Advanced");
                localStorage.setItem("advPrice", "$80/year");
                standard_buy_link.href = "./pages/success2.html";
                advanced_buy_link.href = "./pages/success1.html";
            }
            if (tab_index == 1) {
                standard_package.innerHTML = "$30<sub id='p_duration'>/quarterly</sub>";
                advanced_package.innerHTML = "$60<sub id='p_duration'>/quarterly</sub>";
                localStorage.setItem("stdPack", "Standard");
                localStorage.setItem("stdPrice", "$30/quarterly");
                localStorage.setItem("advPack", "Advanced");
                localStorage.setItem("advPrice", "$60/quarterly");
                standard_buy_link.href = "./pages/success2.html";
                advanced_buy_link.href = "./pages/success1.html";
            }
            if (tab_index == 2) {
                standard_package.innerHTML = "$15<sub id='p_duration'>/monthly</sub>";
                advanced_package.innerHTML = "$40<sub id='p_duration'>/monthly</sub>";
                localStorage.setItem("stdPack", "Standard");
                localStorage.setItem("stdPrice", "$15/monthly");
                localStorage.setItem("advPack", "Advanced");
                localStorage.setItem("advPrice", "$40/monthly");
                standard_buy_link.href = "./pages/success2.html";
                advanced_buy_link.href = "./pages/success1.html";
            }
        })
    })
});

window.addEventListener("load", function () {
    localStorage.clear();
    add_on_pack.checked = false;
    add_on_pack.addEventListener("change", function (e) {
        if (e.target.checked) {
            advanced_package.innerHTML = "$100<sub id='p_duration'>/year</sub>";
            advanced_buy_link.href = "./pages/success1.html";
            localStorage.setItem("advPack", "Advanced with CI addon");
            localStorage.setItem("advPrice", "$100/year");
            showFeatures.classList.remove("hideFeatures");
        } else {
            advanced_package.innerHTML = "$80<sub id='p_duration'>/year</sub>";
            advanced_buy_link.href = "./pages/success1.html";
            localStorage.setItem("advPack", "Advanced");
            localStorage.setItem("advPrice", "$80/year");
            showFeatures.classList.add("hideFeatures");
        }
    })
})