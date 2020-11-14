function detectCollision(a, b){
    abp = a.bodies.position
    bbp = b.bodies.position
    //console.log(b.r+a.width/2);

    if(abp.x - bbp.x <= (b.r+a.width/2) && bbp.x - abp.x <= (b.r+a.width/2) &&
    abp.y - bbp.y <= (b.r+a.width/2)&& bbp.y - abp.y <= b.r+a.width/2){
        Matter.Body.setStatic(b.bodies, false)
        //console.log(abp.x - bbp.x)
    }
    //console.log(abp.x - bbp.x)
    
}
/*function detectCollision( b){
    if(stoneobject.x - b.x < (stoneobject.width/2 + b.width/2) && b.x - stoneobject.x < (stoneobject.width/2 + b.width/2) 
    && stoneobject.y - b.y < (stoneobject.height/ 2 + b.height / 2)&& b.y - stoneobject.y <((stoneobject.height/ 2 + b.height / 2))){
        Matter.Body.setStatic(b, {isStatic: false})
    }
    
}*/
