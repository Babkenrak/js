//alert('Я JavaScript!') 

// let name 
// let admin
// naem = "Иван"
// admin = naem
// alert(admin)

// let name = "Ilya"; 
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?

// var Name = prompt("Как Вас зовут?");  
//     document.write("Привет, " + Name + "!");

// let a = 1, b = 1;  
// let c = ++a; // ?
// let d = b++; // ?
// alert(b)

// let a = 2;  //5
// let x = 1 + (a *= 2);
// alert(x)

// let a = +prompt("Первое число?", 1); 
// let b = +prompt("Второе число?", 2);
// alert(a + b); // 12

// 7 > 5  //7
// "стол" > "стул"
// "4" > "52"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"
// alert(7 > 5)
// alert("стол" > "стул")
// alert("4" > "52")


// if ("0") { //8
//     alert( 'Привет' );
//   }
  

// let value = prompt('Какое "официальное" название JavaScript?', ''); 
//     if (value == 'ECMAScript') 
//     {
//         alert('Верно!');
//     }
//     else
//     {
//         alert('Не знаете? ECMAScript!');
//     }
    
    
// let value = prompt('Введите число') 
// if (value > 0) 
//   {
//     alert( 1 );
//   } 
//   else if (value < 0) 
//   {
//     alert( -1 );
//   } 
//   else 
//   {
//     alert( 0 );
//   }

// let result;  //11
// let a = +prompt('введите число')
// let b = +prompt('введите число')
// if (a + b < 4)
// {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// alert(result)


// let message = prompt('введите текст');  
// if (login == 'Сотрудник') 
// {
//   message = 'Привет';
// } 
// else if (login == 'Директор') 
// {
//   message = 'Здравствуйте';
// } 
// else if (login == '') 
// {
//   message = 'Нет логина';
// } 
// else 
// {
//   message = '';
// }

// alert( null || 4 || undefined );  

// alert( alert(1) || 2 || alert(3) );

// alert( 1 && null && 2 );

// alert( alert(1) && alert(2) );

// alert( null || 2 && 3 || 4 );

// let value = NaN;

// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;

// alert(value);

// if (age >= 14 && age <= 90)  

// if (age < 14 || age > 90)

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

// let userName = prompt("Кто там?", '');  

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }
// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }