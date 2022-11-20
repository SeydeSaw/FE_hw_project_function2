
//________________________________________________________________
//___________________________Задача 1_______________________________

// Project10.Создать кнопку <button class="item" id="random">Random</button> и
// при нажатии на кнопку Random нужно менять цвет фона body на какой-то из цветов массива
// let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]Buttons. При нажатии на кнопку менять цвет body.
// У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
// По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
// Менять фона body на считанный атрибут id.
// Добавить кнопку blue и orange. 

let buttons = document.querySelectorAll(".item")
let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]

for (let i = 0; i < buttons.length; i++) {
   
   buttons[i].addEventListener("click", function() {
    console.log("click");
   let Id = buttons[i].getAttribute("id")
    console.log(Id);
    if (Id == "random") {
        document.body.style.background = colors[Math.floor(Math.random() * colors.length)];    
        };

        document.body.style.background = Id 
   })    
}

//!Функцию для рандомного выбора цвета нашла в google . 
//!Если честно, пока не очень поняла как она точно работает, Но думаю со временем вникну.



//___________________________________________________________________
//________________________Задача 2____________________________________

// Создать 5 тегов 

//  в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
// для каждого тега p добавить соотв-ю текст. innerText

// let text = document.querySelectorAll(".text")
// let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]

// for (let i = 0; i < text.length; i++) {
    
//     text[i].innerText = texts[i]
// }


//___________________________________________________________________
//________________________Задача 3____________________________________

// Есть массив arr = [
// {
//     link : "https://google.com",
//     title : "Ссылка на гугл"
// },
// {
//     link : "https://instagram.com",
//     title : "Ссылка на инстаграм"
// },
// {
//     link : "https://facebook.com",
//     title : "Ссылка на фейсбук"
// }
// ]
// В html создаем 3 тега a -  x3. Для каждого из трех, 
//     добавить link в href и title внутрь тега из массива arr



// let a = document.querySelectorAll(".item1")

// let arr = [
//     {
//         link : "https://google.com",
//         title : "Ссылка на гугл"
//     },
//     {
//         link : "https://instagram.com",
//         title : "Ссылка на инстаграм"
//     },
//     {
//         link : "https://facebook.com",
//         title : "Ссылка на фейсбук"
//     }
//     ]

// for (let i = 0; i < a.length; i++) {
    
//     a[i].setAttribute("href", arr[i].link)
//     a[i].innerText = arr[i].title
// }

//___________________________________________________________________
//________________________Задача 4____________________________________

// Создать две кнопки - PLUS, MINUS
// Создать тег p с начальным значением - 0. 
// При клике на buttonPlus увеличивать значение в теге p на 1
// При клике на buttonMinus уменьшать значение в теге p на 1
// addEventListener. innerText. 

// let p = document.querySelector(".math")
// let sum = 0

// let buttonPlus = document.querySelector(".plus")
// let buttonMinus = document.querySelector(".minus")

// buttonPlus.addEventListener("click", function () {
//     sum += 1;
//     p.innerText = sum
    
// })

// buttonMinus.addEventListener("click", function () {
//     sum = sum - 1;
//     p.innerText = sum
    
// })

//_____________________________________________________________________

