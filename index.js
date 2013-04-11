
function jsonTypeisation (json, maxlvl, n) {
   var newObj = {}
     , nesting = n || 1;
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