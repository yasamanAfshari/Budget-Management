
    function onChangeTheme(){
    let value=document.getElementById("switch_input").checked;
    let theme = "light";
    if (value === true) {
    theme = "dark";
}
    localStorage.setItem("theme", theme);
    setTheme(theme);
}


    window.onload = (event) => {
    var storage =  localStorage.getItem("theme");
    if(storage !== null){
    setTheme(storage);
}
    else{
    setTheme('light');
}
};
    function setTheme(theme)
    {
        if(theme === "light") {
        document.getElementById("switch_input").checked = false;
        document.getElementById("switcher-id").href = "css/light-colors.css";
    }
        else
    {
        document.getElementById("switch_input").checked = true;
        document.getElementById("switcher-id").href = "css/dark-colors.css";
    }
    }
