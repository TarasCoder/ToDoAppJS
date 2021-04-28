let arrItems = [];
let btn = document.getElementById("btnSubmit");
let input = document.querySelector(".input");
btn.addEventListener("click", () => {
    let newTask = input.value;
    input.value = "";
    arrItems.push(newTask);
    console.log(arrItems);
    // throwIt();
    
});

let i = 1;
    arrItems.forEach(function(item){

        let div = document.createElement("div");
        div.classList.add("item-group");
        let h4 = document.createElement("h4");
        let btnDel = document.createElement("button");
        btnDel.classList.add("button-delete");
        btnDel.textContent = "X";

        h4.innerText = i + ". " + item;

        div.append(h4);
        div.append(btnDel);
        document.querySelector(".customField").append(div);
        i++;
    });


