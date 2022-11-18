function buildHome(){
    var color = document.getElementById("color").value;
    var brickType = document.querySelector('input[name="brick_type"]:checked').value;
    let brick = document.createElement("div");
    brick.style.backgroundColor = color;
    brick.className = "brick"
    brick.innerText = brickType;
    brick.setAttribute("id", "btn");
    document.getElementById("layout").appendChild(brick);
    brick.setAttribute("onclick","buttonDelete(this)");
}

function buttonDelete(n){
document.getElementById(n.id).nextSibling.remove();

}
