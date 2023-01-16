var key = localStorage.getItem("key");

window.onload = function() {
    document.getElementById("main").addEventListener('click', function() { 
        document.location.href = "../html/main.html";
    }, true);

    document.getElementById("about").addEventListener('click', function() { 
        document.location.href = "../html/about.html";
    }, true);

    document.getElementById("app").addEventListener('click', function() { 
        const formWrap = document.getElementById('form-wrap');
        formWrap.classList.add('open');
    }, true);

    document.getElementById("btn_usl_1").addEventListener('click', function() { 
        document.location.href = "../html/listovki.html";
    }, true);

    document.getElementById("btn_usl_2").addEventListener('click', function() { 
        document.location.href = "../html/afishi.html";
    }, true);

    document.getElementById("btn_usl_3").addEventListener('click', function() { 
        document.location.href = "../html/banners.html";
    }, true);

    document.getElementById("svz").addEventListener('click', function () {
        
        var ClientName = document.getElementById("name").value;
        var ClientEmail = document.getElementById("email").value;
        var ClientPhone = document.getElementById("tel").value;
        var ClientComment = document.getElementById("comment").value;

        if ((ClientName == "") || (ClientEmail == "") || (ClientPhone == "")) 
        document.getElementById("msg").innerHTML = "Заполните обязательные поля с контактами.";

        else {
            
            const client = {
                ClientName,
                ClientEmail,
                ClientPhone,
                ClientComment
            };
    
            console.log(client);

            localStorage.setItem(key, JSON.stringify(client));
            key++;
            localStorage.setItem("key", key);

            document.getElementById("form-wrap").reset();
            document.getElementById("msg").innerHTML = "Заявка принята. Мы с Вами свяжемся!";
        }
    }, true);

/*    document.getElementById("clear").addEventListener('click', function () {
        localStorage.clear();
        localStorage.setItem("key", 0);
    }, true);*/

};


