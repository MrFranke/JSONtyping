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
    "boolean": "boolean"
}
```

**TODO:**
- [ ] Добавить в npm
- [ ] Сделать вариант функции без графической обертки
- [ ] Сделать возможность загружать JSON по ссылке

json, typisation
