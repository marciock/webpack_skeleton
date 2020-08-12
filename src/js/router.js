export const Router=(routes)=>{

    const url=window.location.hash;
   // console.log(url)
    let contents=[];
    let newRoute='';
    routes.map((route)=>{
       
         
        newRoute=`#${route.pathName}`;

        contents[newRoute]=route.viewName;
     
    })
    

    document.addEventListener('readystatechange',()=>{
        if(url===newRoute){
            const view=document.getElementById('viewSession');
           // console.log(view)
            view.innerHTML=contents[url];
          
        } 
        else if (url==='' || url==='#/') {
            const view=document.getElementById('viewSession');
           // console.log(view)
            view.innerHTML=contents['#/'];
        } 
            
            
    })
}