// const  Options={
//     trim:false,
//     separate:'_',
//     allow_number:false,
//     allow_special_characters:false
// }


 function getSlugValues(value,options){
    console.log(options?.allow_number ,options?.allow_special_characters, options?.separate,options?.trim)
    
    if(!value){
        return 'Must have some value'
    }

    const separator = options?.separate == '-' ? '-' : '_';
    let result='';
    let temp = value.toLowerCase();

    if(options?.trim){
        temp = value.trim()
    }

    if(!options?.allow_number){
        temp = temp.replace(/[0-9]/g,'')
    }

    if(!options?.allow_special_characters){
        temp = temp.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'')
    }
    
    const slug = temp.split(' ');
    for(let i=0;i<slug.length;i++){
        if(i >= 0 && i < slug.length - 1){
            result = result + slug[i]+separator
        }else{
            result += slug[i]
        }
    }
    return result
}

module.exports = getSlugValues