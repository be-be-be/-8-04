const uslugi = [
        {
            'id' : 1,
            'title' : 'Листовки',
            'desc' : 'Печать, дизайн',
            'img' : 'listovki.jpg',
        },
        {
            'id' : 2,
            'title' : 'Афиши',
            'desc' : 'Печать, размещение, дизайн',
            'img' : 'afisha.jpg',
        },
        {
            'id' : 3,
            'title' : 'Баннеры',
            'desc' : 'Печать, размещение, дизайн',
            'img' : 'banner.jpg',
        }
    ];
    
let cardUsl = '';
    
let out = document.getElementById('out');
uslugi.forEach ((list) => {
        cardUsl +=
        `
        <div class="card">
        <img src="../img/${list.img}" alt="${list.title}">
        <div class="container">
          <h3>${list.title}</h3> 
          <div class="desc">${list.desc}<input type="button" id="btn_usl_${list.id}" class="btns_more" value="Подробнее"></div>
        </div>
        </div>
        ` 
});
out.insertAdjacentHTML('afterbegin', cardUsl);

