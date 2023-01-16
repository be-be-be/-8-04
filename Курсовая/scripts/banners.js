var key = localStorage.getItem("key");
var type = "Баннеры";

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
        else if ((Number.isInteger(count) == false) || (count < 1)) document.getElementById("result2").innerHTML = "Количество баннеров - целое положительное число.";
        else {

            if (format == "5x10") {
                if ((count > 0) && (count <= 100)) cost = 6950*count;
                if ((count > 100) && (count <= 1000)) cost = 6940*count;
                if ((count > 1000) && (count <= 10000)) cost = 6900*count;
                if ((count > 10000)) cost = 6850*count;
            }
    
            else if (format == "4x12") {
                if ((count > 0) && (count <= 100)) cost = 6670*count;
                if ((count > 100) && (count <= 1000)) cost = 6650*count;
                if ((count > 1000) && (count <= 10000)) cost = 6630*count;
                if ((count > 10000)) cost = 6600*count;
            }
    
            else if (format == "3x6") {
                if ((count > 0) && (count <= 100)) cost = 2500*count;
                if ((count > 100) && (count <= 1000)) cost = 2470*count;
                if ((count > 1000) && (count <= 10000)) cost = 2450*count;
                if ((count > 10000)) cost = 2400*count;
            }
    
            if (placement == "location_yes") cost *= 1.7;
            if (design == "design_yes") cost += 1000;
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
        var design = document.getElementById("designer").value;
        var count = document.getElementById("counter").value;
        var placement = document.getElementById("locate").value; 

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