import Swal from "sweetalert2";

export default function errorMessage(message:string){
    Swal.fire({
        title:"Error!",
        text:message,
        icon:"error"
      })
}
