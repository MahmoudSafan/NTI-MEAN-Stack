const http = require('http')

const getApiData = (url,cb)=>{
    const apiRequest = http.request(url,(res)=>{
        let result = ''
        res.on('data',(data)=>{
            result += data.toString()
        })
        res.on('end',()=>{
            const all = JSON.parse(result)
            cb(all,false)
        })
    })
    apiRequest.on('error',(err)=>{
        console.log(err);
    })

    apiRequest.end()
}

const allArticals = (req,res)=>{
    const url = `http://medical.mind-techs.com/api/blog/${req.params.langId}/0/11`

    getApiData(url,(response,err)=>{
        if(err) res.send(err)
   
        res.render('../views/template/home',{
            articales:response.data[0],
            lang:req.params.langId,
            title:'All articles'
        })
    })
}

const singleArticle = (req,res)=>{
    const url = `http://medical.mind-techs.com/api/SingleBlog/${req.params.articleId}/${req.params.langId}`
    
    getApiData(url,(response,err)=>{
        if(err) res.send(err)
        res.render('../views/template/singleArticle',{
            articales:response.data[0],
            lang:req.params.langId,
            title:'All articles'
        })
    })
}

// `http://medical.mind-techs.com/api/SingleBlog/${req.params.articleId}/${req.params.langId}`

module.exports = {
    allArticals,
    singleArticle
}