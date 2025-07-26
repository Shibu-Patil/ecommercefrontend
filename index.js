import login from "./login.js"
import register from "./register.js"

const root=document.getElementById('root')
const allAnchors=document.querySelectorAll('a')

const router={
    "/login":login,
    "/register":register
}

function handelClick(e){
  e.preventDefault()
//   console.log(e.target.pathname);
let path=e.target.pathname
  history.pushState(null,"",`${path}`)
root.innerHTML=router[path]()
}
allAnchors.forEach((anchor)=>{
    anchor.addEventListener("click",handelClick)
})


