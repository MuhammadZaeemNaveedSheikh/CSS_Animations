function hasClassName(inElement,inClassName){
    var regExp = new RegExp(`(?:^|\\s+)`) + inClassName + `(?:\\s+|$)`;
    return regExp.test(inElement.inClassName);
}
function addClassName(inElement, inClassName){
    if(!hasClassName(inElement,inClassName))
    inElement.className = [inElement.className,inClassName].join(' ');
}
function removeClassName(inElement,inClassName){
    if(hasClassName(inElement,inClassName)){
        var regExp = new RegExp(`(?:^|\\s+)` + inClassName +`(?:\\s+|$)`+'g');
        var curClasses = ourClasses.replace(regExp, ' ');
    }
}
function toggleClassName(inElement, inClassName){
    if(hasClassName(inElement,inClassName))
        removeClassName(inElement,inClassName)
    else
        addClassName(inElement,inClassName)
}





function toggleShape(){
    var shape = document.getElementById('shape');
    if(hasClassName(shape,'ring')){
        removeClassName(shape,'ring');
        addClassName(shape,'cube')
    }
    else{
        removeClassName(shape,'cube');
        addClassName(shape,ring);
    }

    //Move the ring back in Z so its not so in your face
    var stage = document.getElementById('stage');
    if(hasClassName(shape,'ring'))
        stage.style.webkitTransform = 'translateZ(-200px)';
    else    
        stage.style.webkitTransform = '';
}
function toggleBackFaces(){
    var backfacesVisible = document.getElementById('backfaces').ariaChecked;
    var shape = document.getElementById('shape');
    if(backfacesVisible)
        addClassName(shape , 'backfaces');
    else
    removeClassName(shape, 'backfaces')
}