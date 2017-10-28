var bDisplay = false;

function doDisplay(num){
    var con = document.getElementById("portfolio_" + num);
    var container = document.getElementById("container");

    if(con.style.display=='none'){
        con.style.display = 'block';
        container.style.position = 'fixed';
    }else{
        con.style.display = 'none';
        container.style.position = 'static';
    }
}
