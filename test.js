var moviesearcher = require('./index.js');
var Q = require('q');

moviesearcher({
    name: 'taken',
    quality: '1080p',
    limit: 5
})    .then(function(finalData) {
        console.log(finalData);
    })
    .
catch (function(error) {
    console.log(error);
});