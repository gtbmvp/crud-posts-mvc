/* создание схемы, описывающей структуру данных */
const mongoose = require('mongoose');

/* схема, описывающая объект */
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
})

/* создаем модель с именем Post на основе вышеописанной схемы
*модель это обёртка вокруг данных, которая предоставляет удобные методы для работы с ними */
const Contact = mongoose.model('Contact', contactSchema); 

module.exports = Contact;