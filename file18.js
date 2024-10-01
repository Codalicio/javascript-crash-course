// Object destructuring :

const obj = {
    bandName : 'Red Zeppellin',
    song1 : 'Stairway to heaven',
    song2 : 'kashmir',
    year : 1968
};

const {bandName:var1, song1:var2, ...restProps} = obj;
console.log(var1, var2, restProps);
