const helper = () => {
    const num = Math.floor(Math.random() * 10)
    return num % 2 == 0;
}

const execute = () => {
    const result = module.exports.helper();
    console.log(result);
    if(result){
        return "learning JS"
    }
    else return "learning reactjs"
}

module.exports = {
    helper,
    execute
}