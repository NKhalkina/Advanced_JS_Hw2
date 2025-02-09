// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class libraryControl {
    #books = [];
    // constructor(title) {
    //     if (title<0) {
    //         throw new Error('Нет книг');
    //     }
    //     this.#books = title;
    // }


    get allBooks() {
        return this.#books;
    }

    set allBooks(title) {
        this.#books = title;
    }

    addBook(title) {
        if (title.#books.find(book => book.title === title)) {
            throw new Error('Такая книга есть в списке');
        }
        this.#books.push({title});
        return this.#books;
    }

    removeBook(title) {
        const index = this.#books.findIndex(book => book.title === title);
        if (index === -1) {
            throw new Error('Книги нет в списке');
        }
        this.#books.splice(index, 1);
        return this.#books;
    }
}

let library = new libraryControl("Harry Potter");
console.log(library.allBooks);

library.addBook("1984");
console.log(library.allBooks);

library.addBook("Master and Margaritta");
console.log(library.allBooks);

library.removeBook("1984");
console.log(library.allBooks);
