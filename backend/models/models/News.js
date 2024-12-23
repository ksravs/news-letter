const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    source: { type: String, required: true },
    url: { type: String, required: true },
    publishedAt: { type: Date, required: true },
    category: { type: String, required: true }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;