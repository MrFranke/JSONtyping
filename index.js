/**
 * Функция проходится по всему JSON-у и заменяет значения его свойств на типы.
 * @param json {Object} Объект JSON-а или массива, который нужно обработать
 * @param m {Number} Максимальная глубина вхождение в JSON. Если не передавать аргумент,
 *                        функция обработает весь JSON.
 * @param n {Number} Необходим для определения уровня JSON-а, на котором находится обрабатываемый функцией объект
 *
 */
function jsonTypeisation (json, m, n) {
   var newObj = {}
     , nesting = n || 1
     , maxlvl = m || Infinity;
   if ( !Object.keys(json).length ) return 'object';
   if ( (typeof json == "object") && (json instanceof Array) ) newObj = [];  // Если json == array, вместо {} создаем []
   for( param in json ) {
      var type = typeof json[param];
      if ( json[param] === null ) {
         newObj[param] = 'object';
         continue;
      }
      if ( type === 'object' || json[param] instanceof Array ) {
         if( nesting === maxlvl && !json[param] instanceof Array ){
            newObj[param] = type;
            continue;
         }
         newObj[param] = jsonTypeisation( json[param], maxlvl, nesting+1 );
         continue;
      }
      newObj[param] = type;
      if ( newObj.length ) return newObj; // По массиву проходимся только 1 раз
   }
   return newObj;
}




var input = document.getElementById('input').value
  , output = document.getElementById('output')
  , button = document.getElementsByTagName('button')[0]
   
button.addEventListener('click', run);

function run(){
   input = document.getElementById('input').value;
   input = JSON.parse( input );
   output.innerHTML = JSON.stringify( jsonTypeisation(input, 3), null, 4 );
   return false;
}