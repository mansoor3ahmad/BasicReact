// JavaScript source code
window.onload = ()=>{
    const elem = document.getElementById("app");
    const reactElement = React.createElement("h1",null,"Welcome to Pure React");
    const domObj = ReactDOM.createRoot(elem);
    domObj.render(reactElement);
};