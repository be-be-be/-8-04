var key = localStorage.getItem("key");
var type = "Афиши";

window.onload = function() {
    document.getElementById("main").addEventListener('click', function() { 
        document.location.href = "../html/main.html";
    }, true);
     
    document.getElementById("services").addEventListener('click', function() { 
        document.location.href = "../html/main.html";
    }, true);

    document.getElementById("about").addEventListener('click', function() { 
        document.location.href = "../html/about.html";
    }, true);

    document.getElementById("result").addEventListener('click', function() { 
        var cost = 0;
        format = document.getElementById("format").value;
        design = document.getElementById("design").value;
        placement = document.getElementById("location").value;
        count = Number(document.getElementById("count").value);

        if ((format == "Выберите формат") || (design == "Дизайн") || (count == "") || (placement == "Размещение")) document.getElementById("result2").innerHTML = "Заполните все поля ввода.";
        else if ((Number.isInteger(count) == false) || (count < 1)) document.getElementById("result2").innerHTML = "Количество афиш - целое положительное число.";
        else {
            if (format == "А0") {
                if ((count > 0) && (count <= 100)) cost = 250*count;
                if ((count > 100) && (count <= 1000)) cost = 245*count;
                if ((count > 1000) && (count <= 10000)) cost = 240*count;
                if ((count > 10000)) cost = 230*count;
            }
    
            if (format == "А1") {
                if ((count > 0) && (count <= 100)) cost = 125*count;
                if ((count > 100) && (count <= 1000)) cost = 120*count;
                if ((count > 1000) && (count <= 10000)) cost = 115*count;
                if ((count > 10000)) cost = 110*count;
            }
    
            if (format == "А2") {
                if ((count > 0) && (count <= 100)) cost = 60*count;
                if ((count > 100) && (count <= 1000)) cost = 55*count;
                if ((count > 1000) && (count <= 10000)) cost = 50*count;
                if ((count > 10000)) cost = 45*count;
            }
    
            if (format == "420x297") {
                if ((count > 0) && (count <= 100)) cost = 40*count;
                if ((count > 100) && (count <= 1000)) cost = 35*count;
                if ((count > 1000) && (count <= 10000)) cost = 30*count;
                if ((count > 10000)) cost = 25*count;
            }
    
            if (placement == "location_yes") cost *= 1.3;
            if (design == "design_yes") cost += 500;
            document.getElementById("result2").innerHTML = "Стоимость - " + cost + " руб.";
        }
    
    }, true);

    document.getElementById("btn22").addEventListener('click', function() { 
        const formWrap = document.getElementById('form-wrap');
        formWrap.classList.add('open');
    }, true);

    document.getElementById("svz").addEventListener('click', function () {
        
        var ClientName = document.getElementById("name").value;
        var ClientEmail = document.getElementById("email").value;
        var ClientPhone = document.getElementById("tel").value;
        var ClientComment = document.getElementById("comment").value;
        var format = document.getElementById("formater").value;
        var placement = document.getElementById("locate").value; 
        var design = document.getElementById("designer").value;
        var count = document.getElementById("counter").value;

        if ((ClientName == "") || (ClientEmail == "") || (ClientPhone == "") || (format == "Выберите формат") || (placement == "Размещение") || (design == "Дизайн") || (count == "")) 
        document.getElementById("msg").innerHTML = "Заполните обязательные поля с контактами.";

        else {
            
            const client = {
                type,
                format,
                count,
                placement,
                design,
                ClientName,
                ClientEmail,
                ClientPhone,
                ClientComment
            };
    
            localStorage.setItem(key, JSON.stringify(client));
            key++;
            localStorage.setItem("key", key);

            document.getElementById("form-wrap").reset();
            document.getElementById("msg").innerHTML = "Заявка принята. Мы с Вами свяжемся!";
        }

    }, true);

}