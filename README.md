JSONtyping
==========

Функция заменяет зачение свойств обхекта JSON-a на их типы:

**Исходный JSON:**
```javascript
{"testString": "bla-bla-bla", "testObj": {"testArray":["this", "is", "text"],
 "emptyObj":{}, "emptyArray":[]}, "thisNumber":123, "isBoolean":false}
```

**Результат:**
```javascript
{
    "testString": "string",
    "testObj": {
        "testArray": [
            "string"
        ],
        "emptyObj": "object",
        "emptyArray": "object"
    },
    "thisNumber": "number",
    "isBoolean": "boolean"
}
```

**Использование в nodejs:**
```javascript
var jsonT = require('json-typping');
var json = {"test":123};
json = jsonT.typping(json);
console.log( json ); // {test: 'number'}
```

**TODO:**
- [x] Добавить в npm
- [x] Сделать вариант функции без графической обертки
- [ ] Сделать возможность загружать JSON по ссылке

json, typisation
