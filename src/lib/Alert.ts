import swal from "sweetalert";

const Alert = (alertText: any) => {
    const swalOptions = {
        title: "Campos faltantes",
        text: alertText,
        icon: "error",
    };
    swal(swalOptions);
}

export default Alert