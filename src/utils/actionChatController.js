

export const actionChatController = [
	{
		matchWordsArray: ["+", "Плюс", "плюс", "Сложить", "сложить", "Сложи", "сложи", "Добавить", "добавить", "Добавь", "добавь", "Сложение", "сложение", "Складываем", "складывем", "Складывай", "складывай", "Прибавить", "прибавить", "Прибавь", "прибавь", "Увеличить", "увеличить", "Увеличь", "увеличь"],
		actionMethod: 'sum',
		regExpSpecific: '',
		paramType: 'number',
		conditionFunc: i => !!+i
	},
	{
		matchWordsArray: ['-', 'Минус','минус', 'Вычестеть','вычестеть', 'Вычти', 'вычти', 'Уменьшить', 'уменьшить', 'Уменьши', 'уменьши'],
		actionMethod: 'minus',
		regExpSpecific: '',
		paramType: 'number',
		conditionFunc: i => !!+i
	},
];