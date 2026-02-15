export const addData =(req)=>{
    console.log(req.body);
    
}

export const getdatabynum =(req)=>{
    console.log(req.params);
    
}

export const getdatabyquery =(req)=>{
    console.log(req.query);
    
}

export const getdatabyheader=(req)=>{
    console.log(req);
    
}
