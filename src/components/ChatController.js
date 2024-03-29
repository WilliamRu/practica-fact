export const chatController=[
    {
        arrayMatchWords: ['+','Плюс', 'плюс', 'Сложить', 'сложить', 'Сложи', 'сложи', 'Добавить', 'добавить', 'Добавь', 'добавь', 'Сложение', 'сложение', 'Складываем', 'складывем', 'Складывай', 'складывай', 'Прибавить', 'прибавить', 'Прибавь', 'прибавь', 'Увеличить', 'увеличить', 'Увеличь', 'увеличь'],
        actionMethod:'sum',
        typeParam: 'number',
        conditionFunc: i =>  !isNaN(+i) && typeof +i === 'number'
    },
    {
        arrayMatchWords:['-','Минус','минус', 'Вычесть','вычесть', 'Вычти', 'вычти', 'Уменьшить', 'уменьшить', 'Уменьши', 'уменьши'],
        actionMethod:'minus',
        typeParam: 'number',
        conditionFunc: i => !isNaN(+i) && typeof +i === 'number'
    },
    {
        arrayMatchWords:['*','Умножение','умножение', 'Умножь','умножь', 'Умножить', 'умножить', 'Перемножить' ,'перемножить', 'Перемножь','перемножь', 'Помножить' ,'помножить','Помножь','помножь'],
        actionMethod:'mul',
        typeParam: 'number',
        conditionFunc: i => !isNaN(+i) && typeof +i === 'number'
    },
    {
        arrayMatchWords:['/','Делить','делить','Дели','дели', 'Деление','деление', 'Разделить','разделить','Раздели','раздели', 'Подели', 'подели'],
        actionMethod:'division',
        typeParam: 'number',
        conditionFunc: i => !isNaN(+i) && typeof +i === 'number'
    }
]

