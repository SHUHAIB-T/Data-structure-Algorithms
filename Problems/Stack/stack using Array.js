// implientation of stack using Array

class Stack{
    constructor(){
        let element = [];
    }
    isEmpty() {
        return element.length == 0;
    }
    push(value){
        return element.push(value);
    }
    pop(){
        return element.pop();
    }
    print(){
        console.log(element.toString());
    }
}

/**
 * valid paranthesis
 * queue using stack
 * stack using queue
 * impliment doule ended queue
 * 5 Sorting(best,worst, space , adv,disadv);
 * delete midlle element in stack
 * infix, postfix and postfix
 */