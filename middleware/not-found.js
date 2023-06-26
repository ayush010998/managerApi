const notFound=(req,res)=>{res.status(404).json({msg:"Route does not exists : Bad Request"})}

module.exports=notFound