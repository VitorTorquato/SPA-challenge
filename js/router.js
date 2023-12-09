import {controls} from "./actions.js"
export class Router {
    
    controls = controls()
    routes = {}

    add(routesName , page){
        this.routes[routesName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()
        
        
        window.history.pushState({} , "" , event.target.href)
        
            this.handle()
        
        }
        
    handle(){
                const {pathname} = window.location
                const route = this.routes[pathname] || this.routes[404] 

               
                if(pathname === "/"){
                    this.controls.homePage()
                }else if(pathname === "/universe"){
                    this.controls.universePage()
                }else if(pathname === "/explore"){
                    this.controls.explorePage()
                }
                
        
                fetch(route).then(data => data.text())
                .then(html => {
                    document.querySelector('#app').innerHTML = html
                })
                
                
                
            }
        
}