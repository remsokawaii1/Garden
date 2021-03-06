const db = require('../../config/db');
const { insertIntoTable } = require('./Service')

exports.getDataInfo = (req, res) => {
    if (!req.query.startDay || !req.query.endDay) {
        // res.send("Miss Day")
        res.send(req.query)
        res.status(400)
        return
    }

    db.query(`SELECT * FROM datas WHERE time > '${req.query.startDay}' AND time < '${req.query.endDay}'`, (err,result) => {
        console.log(result.rows);  
        res.send(result.rows)
    })
}


exports.getDatabyGarden = (req, res) => {
    db.query(`SELECT * FROM datas WHERE id_garden = ${req.params.id}` , (err,result) => {
        console.log(result.rows);  
        res.send(result.rows)
    })
}




exports.getAllLastData = (req, res) => {
    db.query(`SELECT * FROM datas WHERE time IN (SELECT MAX(time) FROM datas GROUP BY category)` , (err,result) => {
        if (err) res.send(err)
        else res.send(result.rows)
    })
}



exports.getBeforeLastData = (req, res) => {
    db.query(`SELECT category FROM datas GROUP BY category` , (err,result) => {
        if (err) res.send(err)
        else {
            const response = new Map()
            let categories = result.rows
            let len = categories.length
            // console.log(categories)
            for (let i = 0; i< len; i++){
                db.query(`SELECT * FROM datas WHERE category = '${categories[i].category}' ORDER BY time DESC LIMIT 2 `, (error, data) => {
                    if (error) console.log(error)
                    else {
                        // if ((data.rows)[0].value > (data.rows)[1].value) response.set(categories[i].category ,'increased' )
                        // else if ((data.rows)[0].value < (data.rows)[1].value) response.set(categories[i].category,'decreased' )
                        // else response.set(categories[i].category,'balanced' )
                        // console.log(response)
                        response.set(categories[i].category , (data.rows)[1].value)

                        if ( i == len - 1) res.send(Object.fromEntries(response))
                    }
                })
            }
        }
    })
}



exports.getAlldata = (req, res) => {
    db.query("SELECT * FROM datas" , (err,result) => {
        console.log(result.rows);  
        res.send(result.rows)
    })
}


exports.insertData = (req, res) => {

    insertIntoTable('datas', req.body)
    res.send(req.body)
    // db.query("INSERT INTO datas(id,category,value,id_garden,time) VALUES (1,'Temp',100.2,1,'2001-08-20') ", (err,result) => {
    //     if (err) console.log(err)
    //                     else {
    //                         console.log(result);  
    //                         res.send(req.body)
    //                     }
    // })
}