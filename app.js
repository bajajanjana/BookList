//book constructor
let SNO=0;
function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}

//UI constructor
function UI(){}

UI.prototype.addBookList=function(book){
    SNO+=1;
    const list=document.getElementById("book-list");
    const row=document.createElement('tr');
    row.innerHTML=`
       <td>${SNO}</td>
       <td>${book.title}</td>
       <td>${book.author}</td>
       <td>${book.isbn}</td>
       <td><a href=""><i class="fas fa-times" id="delete"></i></a></td>
    `;

    list.appendChild(row);
    console.log("test");
}

UI.prototype.clearFields=function(){
    document.getElementById("bookname").value="",
    document.getElementById("authorname").value="",
    document.getElementById("ISBN").value="";

}
UI.prototype.showAlert=function(message,className){

    let alert=document.getElementById("alert");
    alert.value=message;   
    //alert.classList.add(className);
    alert.className=`form-control ${className}`;
    alert.style.display="block";
    setTimeout(clearAlert,2000);
}
function clearAlert()
{
    document.getElementById("alert").style.display="none";
}

// UI.prototype.deleteBookList = function(target){
UI.prototype.deleteBookList = function(target){
    if(target.id==='delete')
    {
        console.log(target.parentElement.parentElement.parentElement);
        target.parentElement.parentElement.parentElement.remove();
    }
}

document.getElementById("mybutton").addEventListener('click',function(e){
  const title=document.getElementById("bookname").value,
        author=document.getElementById("authorname").value,
        isbn=document.getElementById("ISBN").value;
    const booklist=new Book(title,author,isbn);

    const ui=new UI();
    if(title=="" || author=="" || isbn=="")
    {
        ui.showAlert("Please check the values!!!","red");
        return;
    }

    ui.addBookList(booklist);
    ui.showAlert("List Added!",'green');
    ui.clearFields();
    e.preventDefault();
});

document.getElementById("book-list").addEventListener('click',function(e){
    const ui=new UI();
    ui.deleteBookList(e.target);
    if(e.target.id==='delete') ui.showAlert("List Removed!",'green');
    e.preventDefault();
});
