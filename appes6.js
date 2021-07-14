let SNO=0;
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    addBookList(book) {
        console.log("test2");
        SNO += 1;
        const list = document.getElementById("book-list");
        const row = document.createElement('tr');
        row.innerHTML = `
       <td>${SNO}</td>
       <td>${book.title}</td>
       <td>${book.author}</td>
       <td>${book.isbn}</td>
       <td><a href=""><i class="fas fa-times" id="delete"></i></a></td>`;

        list.appendChild(row);
    }

    clearFields() {
        document.getElementById("bookname").value = "",
            document.getElementById("authorname").value = "",
            document.getElementById("ISBN").value = "";

    }

    showAlert(message, className) {
        let alert = document.getElementById("alert");
        //console.log(alert);
        alert.value = message;
        //alert.classList.add(className);
        alert.className = `form-control ${className}`;
        alert.style.display = "block";
        setTimeout(function(){
            document.getElementById("alert").style.display="none";}
            , 2000);
    }

    deleteBookList(target){
    if (target.id === 'delete') {
        console.log(target.parentElement.parentElement.parentElement);
        target.parentElement.parentElement.parentElement.remove();
    }
    }
}

document.getElementById("mybutton").addEventListener('click',function(e){
    console.log("test");
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
  