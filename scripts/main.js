
function openBrowser(){
    let number_in = document.getElementById(`number-in`).value
    let numberInSize = document.getElementById(`number-in`).value.length
    let open_installed = document.getElementById(`open-installed`)
    let open_browser = document.getElementById(`open-browser`)
    let link_click2open = document.getElementById(`link-click2open`)
    let divResult = document.getElementById(`result`)
    let outLink = document.getElementById(`out-link`)

    if (number_in.length < 9){
        open_browser.style.backgroundColor = "red";
        alert("digite um numero")
    } else {
        open_browser.style.backgroundColor = "var(--verdezaphover)";
        open_installed.style.backgroundColor = "var(--verdezap)";
        open_browser.style.border = "white 4px solid";
        open_installed.style.border = "none";
        divResult.style.display = "block";
        link_click2open.href = `https://web.whatsapp.com/send?phone=55${number_in}`
        outLink.value = link_click2open.href
    }
}

function openInstalled(){
    let number_in = document.getElementById(`number-in`).value;
    let open_installed = document.getElementById(`open-installed`)
    let open_browser = document.getElementById(`open-browser`)
    let link_click2open = document.getElementById(`link-click2open`)
    let divResult = document.getElementById(`result`)
    let outLink = document.getElementById(`out-link`)

    if (number_in.length < 9){
        open_installed.style.backgroundColor = "red";
        alert("digite um numero")
    } else {
        open_installed.style.backgroundColor = "var(--verdezaphover)";
        open_browser.style.backgroundColor = "var(--verdezap)";
        open_installed.style.border = "white 4px solid";
        open_browser.style.border = "none";
        divResult.style.display = "block";
        link_click2open.href = `https://api.whatsapp.com/send?phone=55${number_in}`
        outLink.value = link_click2open.href
    }
}
