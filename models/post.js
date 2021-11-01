/* создание схемы, описывающей структуру данных */
const mongoose = require('mongoose');

/* схема, описывающая объект */
const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
}, { timestamps: true })

/* создаем модель с именем Post на основе вышеописанной схемы
*модель это обёртка вокруг данных, которая предоставляет удобные методы для работы с ними */
const Post = mongoose.model('Post', postSchema); 

module.exports = Post;