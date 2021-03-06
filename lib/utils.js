const assignDeepEnumerablesToOut = (obj, out) => {
    const props = Object.keys(obj);
    let key, v, o;
    for(let i = 0; i < props.length; i++) {
        key = props[i];
        if(key !== '_ctx' && key !== '_timer') {
            v = obj[key];
            out[key] = isObject(out[key]) ? out[key] : {};
            isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;
        }
    }  
};

const isObject = (val) => (typeof val === 'object' && val !== null);

const timestamp = () => window.performance && window.performance.now ? window.performance.now() : new Date().getTime();

const inherits = function(child, mother){
    const copyMother = Object.create(mother.prototype);
    child.prototype = copyMother;
    child.prototype.constructor = child;
}

const consoleLogColor = (colorName, text) => {
    const colors = {
        red: '#B03A2E',
        green: '#27AE60',
        blue: '#46C7C7',
        yellow: '#E1D562',
        grey: '#839192'
    };
    console.log('%c'+text, 'color:' + colors[colorName] + ';');  
};

export {
    assignDeepEnumerablesToOut, 
    isObject,
    timestamp,
    inherits,
    consoleLogColor
}