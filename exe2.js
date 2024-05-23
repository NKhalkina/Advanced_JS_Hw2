// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

function addReview() {
    let reviewInput = document.getElementById('reviewInput').value;
    if (reviewInput.lenhth < 50 || reviewInput.lenhth > 500) {
        alert('Отзыв должен содержать от 50 до 500 символов');
        return;
    }

    let reviewsContainer = document.getElementById('reviewsContainer');
    let newReview = document.createElement('p');
    newReview.innerText = reviewInput;

    if (reviewsContainer.childElementCount > 0) {
        reviewsContainer.insertBefore(newReview, reviewsContainer.firstChild);
    } else {
        reviewsContainer.appendChild(newReview);
    }

    document.getElementById('reviewInput').value = '';
}