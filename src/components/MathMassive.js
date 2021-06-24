export const chatController=[
    {
        arrayMatchWords: ['+', 'Плюс', 'плюс', 'Сложить', 'сложить', 'Сложи', 'сложи', 'Добавить', 'добавить', 'Добавь', 'добавь', 'Сложение', 'сложение', 'Складываем', 'складывем', 'Складывай', 'складывай', 'Прибавить', 'прибавить', 'Прибавь', 'прибавь', 'Увеличить', 'увеличить', 'Увеличь', 'увеличь'],
        actionMethod:'',
        typeParam: 'number',
        conditionFunc: i => !!+i
    },
    {
        arrayMatchWords:['-', 'Минус','минус', 'Вычесть','вычесть', 'Вычти', 'вычти', 'Уменьшить', 'уменьшить', 'Уменьши', 'уменьши'],
        actionMethod:'',
        typeParam: 'number',
        conditionFunc: i => !!+i
    },
    {
        arrayMatchWords:['*', 'Умножение','умножение', 'Умножь','умеожь', 'Умножить', 'умножить', 'Перемножить' ,'перемножить', 'Перемножь','перемножь', 'Помножить' ,'помножить','Помножь','помножь'],
        actionMethod:'',
        typeParam: 'number',
        conditionFunc: i => !!+i
    },
    {
        arrayMatchWords:['/', 'Делить','делить','Дели','дели', 'Деление','деление', 'Разделить','разделить','Раздели','раздели', 'Подели', 'подели'],
        actionMethod:'',
        typeParam: 'number',
        conditionFunc: i => !!+i
    }
]

