const greetings = String(prompt('Please select your language: en, ru, de'))

switch (greetings.toLowerCase()) {
        case 'en':
        console.log('Hello!');
        break;
    case 'ru':
        console.log('Привет!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    default:
        console.log('Please select language');
}