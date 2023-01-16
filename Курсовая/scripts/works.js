const works = [
    {
        'id' : 1,
        'title' : 'Афиша',
        'name' : 'Juice Here',
        'img' : 'works1.jpg',
    },
    {
        'id' : 2,
        'title' : 'Листовки',
        'name' : 'Shitake Restaurant',
        'img' : 'works2.jpg',
    },
    {
        'id' : 3,
        'title' : 'Афиша',
        'name' : 'Coffee today',
        'img' : 'works3.jpg',
    },
    {
        'id' : 4,
        'title' : 'Баннер',
        'name' : 'Гусь',
        'img' : 'гусь2.jpg',
    },
    {
        'id' : 5,
        'title' : 'Баннер',
        'name' : 'Anime Shop',
        'img' : 'works5.jpg',
    },
    {
        'id' : 6,
        'title' : 'Афиша',
        'name' : 'Кафе-мороженое',
        'img' : 'afisha.jpg',
    }
];

let cardWorks = '';

let out = document.getElementById('out');
works.forEach ((list) => {
    cardWorks +=
    `
    <div class="card">
    <img src="../img/${list.img}" alt="${list.title}">
    <div class="container">
      <h3>${list.title}</h3> 
      <div class="desc">Для "${list.name}"</div>
    </div>
    </div>
    ` 
});
out.insertAdjacentHTML('afterbegin', cardWorks);

