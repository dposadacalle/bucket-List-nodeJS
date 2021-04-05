/**
 *   La librería core de fs no solamente lee y escribe archivos, 
     tiene una gran variedad de funciones para manipular buffers y streams.
 */

const fs = require('fs');

module.exports.load = (filepath) => {
    try {
        // If File Exist
        const content = fs.readFileSync(filepath, "utf-8");
        return JSON.parse(content);
    } catch (err) {
        // If File does not Exist
        return [];
    }
};

module.exports.save = (filepath, content) => {
    fs.writeFileSync(filepath, JSON.stringify(content, null, 2));
};