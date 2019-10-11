 


///////////////////////***********************For Date ***********************/////////////////////////////////////////

/********************************variables declaration for date********************************************************/
let todayDate = document.getElementById("todayDate");

/************************************this is for format to make date***************************************************/
 let dates = {month: "long", day: "numeric", year: "numeric", weekday: "long"};

/************************************* Return new Date ***************************************************************/
 let today = new Date();

 /*******************************************Date for local date *****************************************************/
 todayDate.innerHTML = today.toLocaleDateString("en-US", dates);


///////////////////////*******************Complete Date function******************************////////////////////////




////////////////////////////*********************Main Function*****************************////////////////////////////

/************************************************ Declaration of function *************************************************/
 startEvents();


/************************************************ Function start from here *******************************************/
function startEvents(){

  /********************************************** Target form element and add event listener **************************/
  document.querySelector('form').addEventListener('submit',submit);

   /************************************* Target clear element and event listener for clearing list **********************/
  document.getElementById('delete').addEventListener('click',deleteList);


   document.querySelector('ul').addEventListener('click', deleteOrCheck);
}


/*********************************************** Submit function start here *********************************************/
function submit(e){

  /********************************************* Event Object for form *************************************************/
  e.preventDefault();

  /********************************************* Declration of input to add ********************************************/
  let input = document.querySelector('input');
  
  /********************************************* If loop for form validation ******************************************/
  if(input.value != '')
     
    addItem(input.value);
  input.value = '';
}

/********************************************** declaration of variable to make form validate*************************/
let newForm = document.querySelectorAll('input');

/********************************************** for each loop to to return true value*******************************/
newForm.forEach((newForm) => {
  newForm.required = true;
});


/////////////////////////*********************** Complete main function ************************/////////////////////////


////////////////////////************************ Add Item function start here*******************////////////////////////

/*********************************************** Add Item function start here *****************************************/
function addItem(lodo){


  /******************************************** declration of list item to add item in our list *********************/
  let ul = document.querySelector('ul');
  let li = document.createElement('li');

  /******************************************* innerHTML for adding new item in list *******************************/
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${lodo}</label>`;
  ul.appendChild(li);

  /******************************************** Board for view to do list *****************************************/
  document.querySelector('.listboard').style.display = 'block';
}

/////////////////////***********************Complete Add Item function **********************///////////////////////////



///////////////////*****************************Delete function *********************************////////////////////////

/********************************************* deletelist function start here ******************************************/
function deleteList(e){

  /******************************************* target list item *******************************************************/
  let ul = document.querySelector('ul').innerHTML = '';
}

/////////////////////*************************** End Delete function ***************************/////////////////////////



////////////////////******************************Delete and Check function *******************///////////////////////////

/*****************************************Delete function ****************************************************************/
function deleteOrCheck(e){

  /*************************************If loop and event object to target delete button ******************************/
  if(e.target.className == 'delete')
    deleteItem(e);
  else {
    checkTask(e);
  }
}



/***************************************** Delete function to delete item *******************************************/
function deleteItem(e){

  /************************************** variable declararion to remove item **************************************/
  let removeItem = e.target.parentNode;
  let parentNode = removeItem.parentNode;
  parentNode.removeChild(removeItem);
}


///////////////////********************** End Delete function ****************************///////////////////////////////


//////////////////********************** Check Item Function ********************************///////////////////////////

/*************************************** Function for check item *****************************************************/
function checkTask(e){
  
  /************************************* This is for play beep sound, Taget play id by get element *******************/
  document.getElementById('beep').play();

  /************************************* variable declaration for next item in list ************************************/
  let lodo = e.target.nextSibling;

  /************************************ If loop to tager next item in list ********************************************/
  if(e.target.checked){
    lodo.style.textDecoration = "line-through";
    lodo.style.color = "#ff0000";
  }else {
    lodo.style.textDecoration = "none";
    lodo.style.color = "#008000";
  }
}

//////////////////////******************** End of the function *****************************************/////////////////