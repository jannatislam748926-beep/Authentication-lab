const secureapi =(req,res,next)=>{
    
    if(req.headers.authorization=="3454jlkdsfjkl34wjt6kl54j53kl24j5lkwsjdflkj"){
        next()
    }else{
      return res.send({error:"Authentication Failed"})
    }
    

}
module.exports = secureapi