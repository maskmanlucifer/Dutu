
/* Including body parser.*/
let bodyParser = require('body-parser')

/* Including mongoose for communicating to data base.*/
let mongoose = require('mongoose');

/* Connecting database.*/
mongoose.connect('mongodb://maskman:dutumaskman@dutu-shard-00-00-n6xkw.gcp.mongodb.net:27017,dutu-shard-00-01-n6xkw.gcp.mongodb.net:27017,dutu-shard-00-02-n6xkw.gcp.mongodb.net:27017/dutu?ssl=true&replicaSet=dutu-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true });

/* Making blueprint of data style.*/
let Myschema=new mongoose.Schema({
   item:String
});

/* Creating model for blueprint.*/
let Dutu=mongoose.model('Dutu',Myschema);


let urlencodedParser = bodyParser.urlencoded({ extended: false })

/*Giving access of this module.*/
module.exports =  function(app)
{
   app.get('/dutu',function(req,res)
   {
       Dutu.find({},function(err,data)
       {
           if(err)
           {
            process.exit(1);
           }
           res.render('index',{data:data});
       })
   });

   app.post('/dutu',urlencodedParser,function(req,res)
   {
       let newdata=Dutu(req.body).save(function(err,data)
       {
            if(err)
            {
            process.exit(1);
            }
            res.json(data);
       });
   });

   app.delete('/dutu/:item',function(req,res)
   {
       Dutu.find({item:req.params.item.replace(/\-/g," ")}).deleteOne(function(err,data)
       {
            if(err)
            {
            process.exit(1);
            }
            res.json(data);
       });
   });
};