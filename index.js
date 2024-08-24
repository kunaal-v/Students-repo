const Name= document.querySelector("#name");
const Email=document.querySelector("#email");
const ID= document.querySelector("#ID");
const Contact=document.querySelector("#contact");
const Button=document.querySelector(".btn");
const recordlistitems=document.querySelector(".recordlist");
Button.addEventListener("click",itemlist);
document.querySelector('.img').addEventListener('click', function() {
    var desc = document.querySelector('#description');
    if (desc.style.display === 'none') {
        desc.style.display = 'block';
    } else {
        desc.style.display = 'none';
    }
});
function itemlist(e){
    console.log("button");
    e.preventDefault();
    //Create a div
    const recorddiv=document.createElement("div");
    recorddiv.classList.add("itemall");
    //Create list of items
    const listitem1=document.createElement("p");
    const listitem2=document.createElement("p");
    const listitem3=document.createElement("p");
    const listitem4=document.createElement("p");
    //Provide values to items
    listitem1.innerHTML=Name.value;
    listitem2.innerHTML=ID.value;
    listitem3.innerHTML=Email.value;
    listitem4.innerHTML=Contact.value;
    // add items to div
    recorddiv.appendChild(listitem1);
    recorddiv.appendChild(listitem2);
    recorddiv.appendChild(listitem3);
    recorddiv.appendChild(listitem4);
    //check if any of the vlaue is not entered then return and give alert massage
    if(((Name.value==="") || (Email.value==="")) || ((ID.value==="") || (Contact.value===""))) {
            alert("Please Enter all the details");
                return;
    }
    // create a trash button and edit button
    const trashbtn=document.createElement("button");
    const editbtn=document.createElement("button");
    //give value to buttons
    trashbtn.innerHTML="Delete";
    editbtn.innerHTML="Edit";
    // add class to buttons
    trashbtn.classList.add("trash-button");
    editbtn.classList.add("edit-button");
    //add buttons to div
    recorddiv.appendChild(editbtn);
    recorddiv.appendChild(trashbtn);
    // add div to the webpage(html file)
    recordlistitems.appendChild(recorddiv);
    // make the inputs fields empty
    Name.value="";
    Email.value="";
    ID.value="";
    Contact.value="";
    
    //Add  addEventListner to delete and edit button 
    recordlistitems.addEventListener("click",deletefunction);
    function deletefunction(e){
          const item=e.target;
          console.log(item.classList[0]);
          if(item.classList[0]==="trash-button"){
            console.log("delete button");
            const parent =item.parentNode;
            parent.remove();
          }
    }


    //declare a variable to keep track of the item being edited
let editItem = null;

function editfunction(e) {
    const item = e.target;

    if (item.classList.contains("edit-button")) {
        //set the item being edited
        editItem = item.parentNode;
        alert("Edit your input");
        // populate the form fields with the current values
        Name.value = editItem.querySelector("p:nth-child(1)").innerHTML;
        ID.value = editItem.querySelector("p:nth-child(2)").innerHTML;
        Email.value = editItem.querySelector("p:nth-child(3)").innerHTML;
        Contact.value = editItem.querySelector("p:nth-child(4)").innerHTML;

        // change the button text to indicate update mode
        Button.innerHTML = "Update";
    }
    
}
recordlistitems.addEventListener("click", editfunction);
Button.addEventListener("click",itemlist);
function itemlist(e) {
    e.preventDefault();

    if (editItem) {
        // update the existing item with new values
        editItem.remove();
        
        editItem.querySelector("p:nth-child(1)").innerHTML = Name.value;
        editItem.querySelector("p:nth-child(2)").innerHTML = ID.value;
        editItem.querySelector("p:nth-child(3)").innerHTML = Email.value;
        editItem.querySelector("p:nth-child(4)").innerHTML = Contact.value;

        // clear the form fields
        Name.value = "";
        Email.value = "";
        ID.value = "";
        Contact.value = "";


        // reset the edit item
        editItem = null;

        // change the button text back to "Add"
        Button.innerHTML = "Submit";
        return;
    }

    // existing itemlist code here...
}
    
}

