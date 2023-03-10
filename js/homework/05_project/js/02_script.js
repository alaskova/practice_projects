/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const sortArr = (arr) => {
        arr.sort();
    }

    document.querySelector('form.add').addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = document.querySelector('.adding__input').value;
        let favorite = document.querySelector('[type="checkbox"]').checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = newFilm.slice(0, 22) + '...';
            }

            if (favorite) {
                console.log('adding new film');
            }

            movieDB.movies.push(newFilm);

            createMovieList(movieDB.movies, document.querySelector('.promo__interactive-list'));
        }

        e.target.reset();
    });

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((movie, i) => {
            parent.innerHTML += `
                    <li class="promo__interactive-item">${++i} ${movie}
                        <div class="delete"></div>
                    </li>
                `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    const deleteAdv = (arr) => {
        arr.forEach(item => item.remove());
    }

    const makeChanges = () => {
        document.querySelector('.promo__genre').innerText = 'ДРАМА';
        document.querySelector('.promo__bg').style.background = "url('img/bg.jpg')";
    }

    deleteAdv(document.querySelectorAll('.promo__adv img'));
    makeChanges();
    createMovieList(movieDB.movies, document.querySelector('.promo__interactive-list'));
});


