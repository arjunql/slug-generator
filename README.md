# slug-generator-js


A slug generator is a tool or function that takes a string of text, typically a title or a phrase, and converts it into a URL-friendly format known as a slug.

Slugs are commonly used in web development for creating clean and readable URLs that contain keywords relevant to the content of a web page.

Steps to use the package:
    
    Step:1
    npm install slug-generator-js

    Step:2
    Import
    const getSlugValues = require('slug-generator-js');

    Step:3
    Uses

    const  options={
        trim:false,
        separate:'_',
        allow_number:false,
        allow_special_characters:false
    }
    const retult = getSlugValues('string input',options)

    Note:If you do not pass any argumnet then it will return the string value only separated with '_';


    Example:1
    const retult = getSlugValues('node.js is a environmnet')
    //nodejs_is_a_environmnet

    Example:2
    const retult = getSlugValues('node.js is a environmnet',{separate:'-'})
    //nodejs-is-a-environmnet

