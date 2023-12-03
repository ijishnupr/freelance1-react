import { useSelector } from "react-redux"

export default function Signup2(){
    var data=useSelector((state)=>state.brand.token)
    console.log(data)
    return <>
    <h1>signup2</h1>
    </>
}