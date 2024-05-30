const express = require('express');
const mongoose = require("mongoose");
const prodContr = require('./controllers/productController');
const connectDb = require('./controllers/connectionController');
const  productlist  = require('./models/productlist');
const  generalspecs  = require('./models/generalspecs');
const reviews = require('./models/reviews');

const app = express();
app.use(express.json());

app.get("/", async(req,res)=>{
res.json({"msg":"API is Aliveeeeee"})
})

const start = async ()=>{
try{
   connectDb.connectMongoDB();
app.listen(3000,()=> console.log("running in 3000"))
}catch(err){
console.log(err);
process.exit(1);
}
};

start();
mongoose.Promise = global.Promise;


app.get('/all', async (req,res)=>{
 prodContr.getAllProducts().then((r1, r2)=>{
     if(r2){
        res.json(r2);
     }
     res.json(r1)
 })

});
app.put("/update/review/like",async (req,res)=>{
    prodContr.updateReview(req.body, 'like').then((data,err)=>{
        if(err){
            res.json(err);
        }
        res.json(data);
    });
})
app.put("/update/review",async (req,res)=>{
    prodContr.updateReview(req.body).then((data,err)=>{
        if(err){
            res.json(err);
        }
        res.json(data);
    });
})
    
app.post('/add/review',async (req,res)=>{

    prodContr.saveReview(req.body).then((data,err)=>{
        console.log(err);
        if(err){
            res.json(err);
        }
        res.json(data);
    })
    
})

app.post('/save', async (req,res)=>{
        prodContr.saveProduct(req.body).then((data,err)=>{
            if(err){
                res.json(err);
            }
            res.json(data);
        });
    
});

app.patch('/update', async (req,res)=>{
    prodContr.updateProduct(req.body).then((data,err)=>{
        if(err){
            res.json(err);
        }
        res.json(data);
    });

});

app.get('/product', async (req,res)=>{
   
    prodContr.getProduct(filter).then((data,err)=>{
        if(err){
            res.json(err);
        }
        res.json(data);
    });

})
app.get('/product/search/:key', async (req,res)=>{
    const {key} = req.params;
    prodContr.searchProduct(key).then((data,err)=>{
        if(err){
            res.json(err);
        }
        res.json(data);
    });

})
app.post('/save/generalSpecs', (req,res)=>{
    //console.log(req.body)
    prodContr.saveGeneralSpecs(req.body).then((data,err)=>{
        if(err){
            res.json(err);
        }
        

        res.json(data)
    })
    
})

app.delete('/delete/:id', (req,res)=>{
    var id = req.params['id'];
    prodContr.deleteProd(id).then((data,err)=>{
        if(err){
            res.json(err);
        }
        

        res.json(data)
    })
})
