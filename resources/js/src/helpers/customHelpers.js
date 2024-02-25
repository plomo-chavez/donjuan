
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import '@resources/scss/vue/libs/vue-sweetalert.scss';

export default {
  methods: {
    loading(tipo = true){
      document.getElementById("loading-bg").style.display = tipo?"block":"none";
    },
    messageToast ({message='',color='success',title='Notificación de sistema',icon='MessageCircleIcon',time=''}) {

      this.$toast({
        component: ToastificationContent,
        position: 'top-right',
        props: {
          title   : title,
          icon    : icon,
          variant : color,
          text    : message,
        },
      })
    },

    capitalize(value) {
        if (!value) return "";
        return value.charAt(0).toUpperCase() + value.slice(1);
    },
    buscarPorPropiedad(array, propiedad, valor) {
      if (!array || array.length === 0) { // Verifica si el array es nulo/undefined o está vacío
        return false;
      } else {
          return !!array.find(elemento => elemento[propiedad] === valor); // Usa !! para convertir el resultado a booleano
      }
    },
    eliminarElemento(array, criterio, valor) {
      // criterio =  si es indice o la propiedad
      // valor =  es para cuando es por propiedad y es para validar el valor de la propiedad a buscar
      let indice;
  
      // Determinar si el criterio es un índice numérico o el nombre de una propiedad
      if (typeof criterio === "number") {
          indice = criterio;
      } else {
          indice = array.findIndex(elemento => elemento[criterio] === valor);
      }
  
      // Si se encontró un índice válido, eliminar el elemento
      if (indice !== -1 && indice < array.length) {
          array.splice(indice, 1);
      }
    },
    messageSweet ({
        message='',
        color='success',
        title='Notificación de sistema',
        icon='success',
        time=3000
    }) {
        // icon = success / error / info / warning
        this.$swal({
          title: title,
          text: message,
          icon: icon,
          timer: time,
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
    },
    copyObject (data) {
        return JSON.parse(JSON.stringify(data))
    },
    messageConfirm({
        message='Esta acción ya no se va a poder deshacer',
        title='¿Desea eliminar este registro?',
        icon='warning',
        showCancelButton= true,
        confirmButtonText= 'Si, eliminar',
        cancelButtonText= 'No, cancelar',
        cancelFunction = null,
        confirmFunction = null,
        messageCancel = true
    }){
        this.$swal({
            title: title,
            text: message,
            icon: icon,
            showCancelButton: showCancelButton,
            confirmButtonText:confirmButtonText,
            cancelButtonText:cancelButtonText,
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-outline-danger ml-1',
            },
            buttonsStyling: false,
          }).then(result => {
            if (result.value) {
                if (typeof confirmFunction == 'function'){
                    confirmFunction()
                } else {
                    console.log('Falta funcion de confirmación')
                }
            } else if (result.dismiss === 'cancel') {
                if (typeof cancelFunction == 'function'){
                    cancelFunction()
                } else {
                    if (messageCancel) {

                        this.$swal({
                            title: 'Proceso cancelado',
                            text: 'Cancelo correctamente el proceso',
                            icon: 'error',
                            timer: 3000,
                            customClass: {
                            confirmButton: 'btn btn-success',
                            },
                        })
                    }
                }
            }
          })
    },
    formatoFechaYMD(value){
        const fecha = new Date(value);
        let fechaFormateada = value != null ? fecha.toISOString().slice(0,10).replace(/-/g,"/") : null;
        return fechaFormateada
    },
    formatoFechaBD(value){
        var date = new Date(value);
        var formattedDate = date.toLocaleString('es-ES', {
            timeZone: 'UTC',
            hour12: true
        });
        return formattedDate;
    },

    formatoMoney(amount, signal = true){
        let tmp = parseInt(amount).toLocaleString("es-ES", { style: "currency", currency: "MXN" });
        return (signal? '$ ' : '') + tmp
    },
    descargarPDF(response,id = ''){
      let tmpName = String(id).padStart(6, '0');
      tmpName = 'Resarvacion-' + tmpName + '.pdf'
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', tmpName); // Nombre del archivo descargado
      document.body.appendChild(link);
      link.click();
      this.loading(false);
    },
    errorPDF(response){
      this.loading(false)
      const reader = new FileReader();
      reader.onload = (event) => {
          const result = event.target.result;
          const obj = JSON.parse(result);
          this.messageSweet({
              message: obj.message,
              icon: 'warning',
          });
      };

      reader.readAsText(response.data);
    }
  }
}


// export const customHelpers = {
//   methods: {
//     message ({message='',color='success',title='Notificación de sistema',icon='MessageCircleIcon',time=''}) {

//       this.$toast({
//         component: ToastificationContent,
//         position: 'top-right',
//         props: {
//           title   : title,
//           icon    : icon,
//           variant : color,
//           text    : message,
//         },
//       })
//     }
//   },
// }

// // Ignore below for now. We will remove it when we add more transition in future.
// export const _ = null
