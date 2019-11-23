import * as math  from 'mathjs'

export const calculation = (req: any, res: any) => {
        
    //Validando os campos
    if(!req.body.value1 || !req.body.operation || !req.body.value2) 
        return res.status(400).send({ error: 'Preencha todos os campos!' });
    
    // Calculos
    if(req.body.operation === "+")
        return res.status(200).send({result: math.sum(req.body.value1, req.body.value2)})
    
    if(req.body.operation === "-")
        return res.status(200).send({result: math.subtract(req.body.value1, req.body.value2)})
    
    if(req.body.operation === "*")
        return res.status(200).send({result: math.multiply(req.body.value1, req.body.value2)})
    
    if(req.body.operation === "/")
        return res.status(200).send({result: math.divide(req.body.value1, req.body.value2)})
}

export const multiplicationTable = (req: any, res: any) => {
    if(!req.body.value) 
        return res.status(400).send({ error: 'Informe um valor!' });
     
    let tableArray = new Array(10)

    for(let i = 0; i < 11; i++){
        tableArray[i] = req.body.value + ' ' + 
        'x' + ' ' + i + ' ' + '= ' + 
        math.multiply(req.body.value, i)
    }
    return res.status(200).send({result: tableArray})
}