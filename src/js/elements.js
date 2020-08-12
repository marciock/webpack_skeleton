export const NewElement=(el,dom)=>{
    window.customElements.define(el, class  extends HTMLElement {
            constructor(){
                super();
                let shadow=this.attachShadow({mode:'open'});
                console.log(dom)
                shadow.innerHTML=dom;
            }
    }); 
}
