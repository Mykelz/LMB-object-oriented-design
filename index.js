class Book {
    constructor(id,title,author,isbn){
        this.id = id,
        this.title = title,
        this.author = author,
        this.isbn = isbn,   
        this.Borrowed = false
    }

    isBorrowed(){
        if(this.Borrowed === true){
            return true
        }
        return false
    }

}

class User {
    constructor(id,name){
        this.id = id,
        this.name = name,
        this.borrowedBooks = [];
    }

    getBookInfo(book){
        return `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`;
    }

    returnBook(book){
        const index = this.borrowedBooks.indexOf(book);
        if(index !== -1){
            book.Borrowed = false
            this.borrowedBooks.splice(index, 1)
            return `You have returned the book: ${book.title}`
        }
        return 'This book is not borrwoed by you'
    }

}

class Library {
    constructor(){
        this.books = [];
        this.members = [];
    }

    addBook(book){
        this.books.push(book);
        return `you added a new book: ${book.title}, to the library`
    }

    registerUser(user){
        this.members.push(user);
        return `you added a new member ${user.name} to the library`
    }

    borrowBook(user, book){
        if(user.borrowedBooks.length >= 3){
            return 'You are only allowed to borrow a maximum of 3 books'
        }
        if(book.Borrowed){
            return 'This book is already borrowed'
        }
        book.Borrowed = true;
        user.borrowedBooks.push(book);
        return `you borrowed the book: ${book.title}`;
    }
}

const book1 = new Book(1, 'Harry potter', 'j.k Rowling', '123456' );
const book2 = new Book(2, 'Divergent', 'Veronica roth', '78932' );
const book3 = new Book(3, 'bookIII', 'kelz', '3343' );
const book4 = new Book(4, 'bookIV', 'ome', '38900' );
// console.log(book1.Borrowed);
// console.log(book1.getBookInfo())

const newLibrary = new Library();

newLibrary.addBook(book1);
newLibrary.addBook(book2);
newLibrary.addBook(book3);
newLibrary.addBook(book4);

const user1 = new User(1, 'Eze');
const user2 = new User(2, 'Namoi');


newLibrary.registerUser(user1);
newLibrary.registerUser(user2);

newLibrary.borrowBook(user2, book1)
newLibrary.borrowBook(user2, book2)
const bb = newLibrary.borrowBook(user2, book4)

const returnBook = user2.returnBook(book1);

// console.log(user2.borrowedBooks);
console.log(newLibrary.books);
console.log(user1.getBookInfo(book1));