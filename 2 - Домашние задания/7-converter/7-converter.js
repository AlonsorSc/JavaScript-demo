/* Написать функцию, которая получает на вход 3 параметра:

суммой средств - 1000
валютой средств - руб
целевой валютой - $
Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет. Ставки конвертации хранятся внутри функции.

Конспект
Цель упражнения: Создать простую функцию для конвертации валют на JavaScript для использования в банковском ПО.

Важно знать:

JavaScript может не идеально подходить для работы с дробными значениями валют.
Детальное обсуждение ограничений JavaScript для конвертации валют будет в продвинутом курсе.
Задание:

Создать функцию конвертации валют, принимающую три параметра:
Сумма для конвертации
Исходная валюта
Целевая валюта
Пример работы функции:

Примерно $1000 рублей к долларам вернет $30.
Обработка ошибок:

Если курс для пары валют неизвестен (например, нет курса рубль к ене), функция вернет null.
Логика функции:

В функции должны содержаться курсы конвертации для поддерживаемых валют (например, рубль к доллару и обратно).
Реализовать логику конвертации с простыми математическими операциями, исходя из входных параметров.
Если курс конвертации для заданной пары валют отсутствует, возвращается null.
Расширение функциональности:

Добавьте поддержку нескольких валют, минимум рубли, доллары, евро.
Протестируйте функцию с различными входными данными.*/

const CURRENCY = {
    USD:'USD',
    RUB:'RUB',
    EUR:'EUR'
}

function converter(sum, sourceCurrency, targetCurrency) {
    const sourceCurrencyRub = sourceCurrency === CURRENCY.RUB;
    const sourceCurrencyUsd = sourceCurrency === CURRENCY.USD;
    const sourceCurrencyEur = sourceCurrency === CURRENCY.EUR;
    const targetCurrencyRub = targetCurrency === CURRENCY.RUB;
    const targetCurrencyUsd = targetCurrency === CURRENCY.USD;
    const targetCurrencyEur = targetCurrency === CURRENCY.EUR;
    
    if (!sourceCurrencyRub && !sourceCurrencyUsd && !sourceCurrencyEur) {
        return null;
    }

    if (!targetCurrencyRub && !targetCurrencyUsd && !targetCurrencyEur) {
        return null;
    }
    
    if (sourceCurrency === CURRENCY.RUB) {
        return targetCurrency === CURRENCY.USD ? sum / 79 : sum / 92;
    } 

    if (sourceCurrency === CURRENCY.USD) {
        return targetCurrency === CURRENCY.RUB ? sum * 79 : sum * 92;
    }

    if (sourceCurrency === CURRENCY.EUR) {
        return targetCurrency === CURRENCY.USD ? sum * 1.17 : sum * 92;
    }

    return null;
}

console.log(converter(100, CURRENCY.EUR, CURRENCY.RUB));
