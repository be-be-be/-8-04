var key = localStorage.getItem("key");
var type = "Листовки";

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
        count = Number(document.getElementById("count").value);

        if ((format == "Выберите формат") || (design == "Дизайн листовки") || (count == "")) document.getElementById("result2").innerHTML = "Заполните все поля ввода.";
        else if ((Number.isInteger(count) == false) || (count < 1)) document.getElementById("result2").innerHTML = "Количество листовок - целое положительное число.";
        else {
            if (format == "А4") {
                if ((count > 0) && (count <= 100)) cost = 7*count;
                if ((count > 100) && (count <= 1000)) cost = 6.5*count;
                if ((count > 1000) && (count <= 10000)) cost = 6*count;
                if ((count > 10000)) cost = 5.5*count;
            }
    
            if (format == "А5") {
                if ((count > 0) && (count <= 100)) cost = 6*count;
                if ((count > 100) && (count <= 1000)) cost = 5.5*count;
                if ((count > 1000) && (count <= 10000)) cost = 5*count;
                if ((count > 10000)) cost = 4.5*count;
            }
    
            if (format == "А6") {
                if ((count > 0) && (count <= 100)) cost = 5*count;
                if ((count > 100) && (count <= 1000)) cost = 4.5*count;
                if ((count > 1000) && (count <= 10000)) cost = 4*count;
                if ((count > 10000)) cost = 3.5*count;
            }
    
            if (format == "148x210") {
                if ((count > 0) && (count <= 100)) cost = 4*count;
                if ((count > 100) && (count <= 1000)) cost = 3.5*count;
                if ((count > 1000) && (count <= 10000)) cost = 3*count;
                if ((count > 10000)) cost = 2.5*count;
            }
    
            if (format == "100x210") {
                if ((count > 0) && (count <= 100)) cost = 3*count;
                if ((count > 100) && (count <= 1000)) cost = 2.5*count;
                if ((count > 1000) && (count <= 10000)) cost = 2*count;
                if ((count > 10000)) cost = 1.5*count;
            }
    
            if (design == "yes") cost += 300;
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

        if ((ClientName == "") || (ClientEmail == "") || (ClientPhone == "") || (format == "Выберите формат") || (design == "Дизайн листовки") || (count == "")) 
        document.getElementById("msg").innerHTML = "Заполните обязательные поля с контактами.";

        else {
            
            const client = {
                type,
                format,
                count,
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