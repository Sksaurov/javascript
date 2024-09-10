const i = document.querySelector("input");
       const buttonel = document.querySelector("button");
       const l = document.querySelector("ul");
       function addGoal(){
        const enteredValue= i.value;
        const listItem= document.createElement('li');
        listItem.textContent = enteredValue;
        l.appendChild(listItem);
        i.value= '';
       }
       buttonel.addEventListener('click',addGoal)
