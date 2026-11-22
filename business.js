export const business = {
  "name": "Радонеж",
  "slug": "radonezh",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Книги в мягком переплёте",
      "detail": "Для расчёта нужны формат, число страниц, тираж и обложка. Возможны чёрно-белый блок и цветная обложка. Мягкий переплёт комплектуют с клеевым соединением блока.",
      "group": "Печать книг",
      "photo": "assets/9c2c918c3e5e390323d5a3d4.webp",
      "url": "https://radnn.ru/service/izdatelstvo-pechat-knig/",
      "imageAlt": "Книги в мягком переплёте"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Цветные книги и вставки",
      "detail": "Выберите всю книгу в цвете либо укажите число отдельных цветных страниц в чёрно-белом блоке. В запросе на печать можно отметить, где в книге они расположены.",
      "group": "Печать книг",
      "photo": "assets/de9877d41724b3b567cda764.webp",
      "url": "https://radnn.ru/service/izdatelstvo-pechat-knig/",
      "imageAlt": "Цветные книги и вставки"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Подготовка рукописи",
      "detail": "Подготовка текста, редактирование, вёрстка книжного блока и оформление обложки. Согласуйте, какие этапы уже выполнены и что нужно типографии.",
      "group": "Издательские услуги",
      "photo": "",
      "url": "https://radnn.ru/service/izdatelstvo-pechat-knig/",
      "imageAlt": "Подготовка рукописи"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Подарочные книги",
      "detail": "Книги индивидуального формата, с фотографиями и выбранной обложкой.",
      "group": "Книги и брошюры",
      "photo": "",
      "url": "",
      "imageAlt": "Подарочные книги"
    },
    {
      "id": "p5",
      "oldIndex": 4,
      "name": "Допечатка тиража",
      "detail": "Заказ дополнительных экземпляров ранее напечатанной книги.",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Допечатка тиража"
    },
    {
      "id": "p6",
      "oldIndex": 5,
      "name": "Пробный экземпляр и ISBN",
      "detail": "Сигнальный экземпляр перед тиражом и помощь с присвоением ISBN по запросу.",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Пробный экземпляр и ISBN"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "p1",
      "productLabel": "Книги в мягком переплёте",
      "label": "А5 · 350 страниц · 200 экз.",
      "quantity": 200,
      "displayQuantity": 200,
      "price": "181 ₽/экз.",
      "rules": "Чёрно-белый блок и цветная обложка. Опубликованный пример.",
      "url": "https://radnn.ru/service/izdatelstvo-pechat-knig/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t2",
      "product": "p1",
      "productLabel": "Книги в мягком переплёте",
      "label": "А4 · 100 страниц · 100 экз.",
      "quantity": 100,
      "displayQuantity": 100,
      "price": "177 ₽/экз.",
      "rules": "Чёрно-белый блок и цветная обложка. Опубликованный пример.",
      "url": "https://radnn.ru/service/izdatelstvo-pechat-knig/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t3",
      "product": "p2",
      "productLabel": "Цветные книги и вставки",
      "label": "А5 · 100 цветных страниц · 50 экз.",
      "quantity": 50,
      "displayQuantity": 50,
      "price": "307 ₽/экз.",
      "rules": "Цветной блок, цветная обложка, мягкий переплёт. Опубликованный пример.",
      "url": "https://radnn.ru/service/izdatelstvo-pechat-knig/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t4",
      "product": "p2",
      "productLabel": "Цветные книги и вставки",
      "label": "А5 · 80 цветных страниц · 100 экз.",
      "quantity": 100,
      "displayQuantity": 100,
      "price": "271 ₽/экз.",
      "rules": "Цветной блок, цветная обложка, мягкий переплёт. Опубликованный пример.",
      "url": "https://radnn.ru/service/izdatelstvo-pechat-knig/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t5",
      "product": "p2",
      "productLabel": "Цветные книги и вставки",
      "label": "А5 · 200 страниц + 10 цветных вставок · 100 экз.",
      "quantity": 100,
      "displayQuantity": 100,
      "price": "196 ₽/экз.",
      "rules": "Чёрно-белый блок с цветными вставками, цветная обложка, мягкий переплёт. Опубликованный пример.",
      "url": "https://radnn.ru/service/izdatelstvo-pechat-knig/",
      "amount": null,
      "mode": "reference",
      "apply": false
    }
  ],
  "fields": [
    {
      "key": "format",
      "label": "Формат книги",
      "type": "select",
      "options": [
        "А6",
        "А5",
        "А4",
        "А3",
        "Индивидуальный"
      ],
      "applies": null
    },
    {
      "key": "pages",
      "label": "Количество страниц",
      "type": "number",
      "applies": null
    },
    {
      "key": "quantity",
      "label": "Тираж, экз.",
      "type": "number",
      "applies": null
    },
    {
      "key": "color",
      "label": "Печать блока",
      "type": "select",
      "options": [
        "Чёрно-белая",
        "Цветная",
        "С цветными вставками"
      ],
      "applies": null
    },
    {
      "key": "notes",
      "label": "Обложка, ISBN, сигнальный экземпляр и срок",
      "type": "textarea",
      "applies": null
    },
    {
      "key": "binding",
      "label": "Обложка",
      "type": "select",
      "options": [
        "Мягкая",
        "Твёрдая",
        "Уточнить"
      ],
      "applies": null
    },
    {
      "key": "publication",
      "label": "Что нужно",
      "type": "select",
      "options": [
        "Печать по макету",
        "Подготовка к изданию",
        "Уточнить"
      ],
      "applies": null
    }
  ],
  "fileLabel": "Рукопись или вёрстка"
};
