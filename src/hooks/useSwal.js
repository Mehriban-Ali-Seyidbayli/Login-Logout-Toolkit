import Swal from "sweetalert2";
import widthReactContent from "sweetalert2-react-content"


export default function useSwal() {
    return widthReactContent(Swal);
}