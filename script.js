document.addEventListener("DOMContentLoaded", function() {

    // Create the array the book objects will be stored in 

    const myLibrary = [];

    // Create the constructor

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    // Create a function that adds the book objects to the library

    function addBookToLibrary(book) {
        myLibrary.push(book);
    }

    // Gather HTML elements

    const table = document.querySelector('#table');

    // Create two example books 

    const theGreatGatsby = new Book("The Great Gatsby", "F Scott Fitzgerald", 283, true);
    const lifeOfPi = new Book("Life of Pi", "Yann Martel", 384, true);

    addBookToLibrary(theGreatGatsby);
    addBookToLibrary(lifeOfPi);

    // Create a function that loops through the myLibrary array

    function display() {
        for (let i = 0; i < myLibrary.length; i++) {
            var row = table.insertRow(-1);
            
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            cell1.innerHTML = myLibrary[i].title;
            cell2.innerHTML = myLibrary[i].author;
            cell3.innerHTML = myLibrary[i].pages;
            cell4.innerHTML ='<label class="switch"><input type="checkbox"><span class="slider round"></span></label>';

            var deleteButton = '<button class="delete-btn">Delete</button>';

            cell5.innerHTML = deleteButton;

            var deleteButtons = document.querySelectorAll(".delete-btn");

            deleteButtons.forEach(function(button) {
                button.addEventListener("click", function() {
                    var row = this.closest("tr");
                    row.parentNode.removeChild(row);
                });
    });

            console.log('Display has run.')
        }
    };

    display();

    // Gather add book button and dialog modal

    const addBookBtn = document.querySelector("#add-book-btn");

    const dialog = document.querySelector("#dialog");

    // Add functionality to add book button

    addBookBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    // Gather form

    const form = document.querySelector("#form");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log('Form submitted');

        const formData = new FormData(form);

        console.log(formData);

        const title = formData.get('title');
        const author = formData.get('author');
        const pages = formData.get('pages');
        const read = formData.get('read');

        const newBook = new Book(title, author, pages, read);

        addBookToLibrary(newBook);

        form.reset();

        dialog.close();

        function eraseRows() {
            var tableLength = table.rows.length;

            for (let i = 0; i < table.rows.length; i++) {
                table.deleteRow(-1);
            }
        }

        eraseRows();

        display();
    });
});

// Add a column with a button that allows you to remove any book

// Change "read" column to a toggle 
