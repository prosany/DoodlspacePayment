const tabs = document.querySelectorAll("#tabs ul li a");
const packages = document.querySelectorAll(".packages .pack");
const standard_package = document.querySelector("#p_standard_price");
const advanced_package = document.querySelector("#p_advanced_price");
const packageDur = document.querySelectorAll("#p_duration");
const standard_buy_link = document.querySelector("#standard_buy_link");
const advanced_buy_link = document.querySelector("#advanced_buy_link");
let add_on_pack = document.getElementById("add_on_pack");
const showFeatures = document.querySelector("#customIl");

window.addEventListener("load", function() {
    add_on_pack.checked = false;
})
tabs.forEach(function (tab, tab_index) {
    tab.addEventListener("click", function (e) {
        add_on_pack.checked = false;
        showFeatures.classList.add("hideFeatures");

        add_on_pack.addEventListener("change", function (e) {
            if (e.target.checked) {
                if (tab_index == 0) {
                    advanced_package.innerHTML = "$100<sub id='p_duration'>/year</sub>";
                    advanced_buy_link.href = "http://google.com/2";
                    showFeatures.classList.remove("hideFeatures");
                }
                if (tab_index == 1) {
                    advanced_package.innerHTML = "$80<sub id='p_duration'>/quarterly</sub>";
                    advanced_buy_link.href = "http://ggg.com/2";
                    showFeatures.classList.remove("hideFeatures");
                }
                if (tab_index == 2) {
                    advanced_package.innerHTML = "$60<sub id='p_duration'>/monthly</sub>";
                    advanced_buy_link.href = "http://fff.com/2";
                    showFeatures.classList.remove("hideFeatures");
                }
            } else {
                if (tab_index == 0) {
                    advanced_package.innerHTML = "$80<sub id='p_duration'>/year</sub>";
                    advanced_buy_link.href = "http://google.com/2";
                    showFeatures.classList.add("hideFeatures");
                }
                if (tab_index == 1) {
                    advanced_package.innerHTML = "$60<sub id='p_duration'>/quarterly</sub>";
                    advanced_buy_link.href = "http://ggg.com/2";
                    showFeatures.classList.add("hideFeatures");
                }
                if (tab_index == 2) {
                    advanced_package.innerHTML = "$40<sub id='p_duration'>/monthly</sub>";
                    advanced_buy_link.href = "http://fff.com/2";
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
                standard_buy_link.href = "http://google.com";
                advanced_buy_link.href = "http://google.com/2";
            }
            if (tab_index == 1) {
                standard_package.innerHTML = "$30<sub id='p_duration'>/quarterly</sub>";
                advanced_package.innerHTML = "$60<sub id='p_duration'>/quarterly</sub>";
                standard_buy_link.href = "http://ggg.com";
                advanced_buy_link.href = "http://ggg.com/2";
            }
            if (tab_index == 2) {
                standard_package.innerHTML = "$15<sub id='p_duration'>/monthly</sub>";
                advanced_package.innerHTML = "$40<sub id='p_duration'>/monthly</sub>";
                standard_buy_link.href = "http://fff.com";
                advanced_buy_link.href = "http://fff.com/2";
            }
        })
    })
});

