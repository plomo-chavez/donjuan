<template>
    <div class="col-12 m-0 p-0">
        <div class="col-12 d-flex flex-wrap justify-content-between pb-1 mb-2" style="border-bottom: 1px solid gray;">
            <h3 class="my-auto">Acompañantes:</h3>
            <div>
                <b-button
                    size="sm"
                    class="my-auto fw-bolder"
                    variant="primary"
                    @click="handleAgregar"
                    >
                    <feather-icon icon="PlusIcon" size="16" />
                    <span>Agregar</span>
                </b-button>
            </div>
        </div>
        <h3 v-if="acompaniantes.length == 0" class="col-12 text-center font-weight-bolder">No hay acompañantes registrados.</h3>
        <div
            :ref="'divForm'"
            :key="'Form#'+index"
            class="mb-2"
            v-for="(formulario,index) in acompaniantes"
        >
            <div class="col-12 d-flex justify-content-between" v-if="viewForms">
                <p class="">Acompañante # {{ index + 1 }}:</p>
                <feather-icon size="18" :icon="`XIcon`" class="cursor-pointer text-danger font-weight-bolder mmb-4" @click="handleEliminar(index)"/>
            </div>
            <FormFactory
                :ref="'formAcom'"
                classForm=" col-12 p-0 m-0 "
                :data = formulario
                :btnsAccion="false"
                :schema="formSchema"
            />
        </div>
    </div>
</template>
<script>
    import customHelpers  from '@helpers/customHelpers'
    import FormFactory from '@currentComponents/FormFactory.vue'
    import {
    BButton,
    BModal,
    BCardText,
    BFormInput,
    BRow,
    BCol,
    BFormGroup,
    } from 'bootstrap-vue'

    export default {
        components: {
            FormFactory,
            BButton,
            BModal,
            BCardText,
            BFormInput,
            BRow,
            BCol,
            BFormGroup,
        },
        mixins : [customHelpers],
        data() {
            return {
                viewForms : true,
                acompaniantes:[],
                formSchema: [
                    {
                        classContainer:' col-md-3 col-lg-3 col-12 ',
                        type        : 'input-text',
                        name        : 'nombre',
                        value       : 'nombre',
                        label       : 'Nombre',
                        placeholder : 'Introduce un nombre',
                        rules       : 'required',
                    },
                    {
                        classContainer:' col-md-3 col-lg-3 col-12 ',
                        type        : 'input-text',
                        name        : 'primerApellido',
                        value       : 'primerApellido',
                        label       : 'Primer apellido',
                        rules       : 'required',
                    },
                    {
                        classContainer:' col-md-3 col-lg-3 col-12 ',
                        type        : 'input-text',
                        name        : 'segundoApellido',
                        value       : 'segundoApellido',
                        label       : 'Segundo apellido',
                    },
                    {
                        classContainer:' col-md-3 col-lg-3 col-12 ',
                        type        : 'input-number',
                        name        : 'edad',
                        value       : 'edad',
                        label       : 'Edad',
                        placeholder : 'Introduce una edad',
                        rules       : 'required',
                        prefix      : '',
                    },
                ],
            }
        },
        props: {
            reservacion: {
                type    : Object,
                default : {}
            },
        },
        beforeMount(){
            if (this.reservacion.acompaniantes){
                this.acompaniantes = [...this.reservacion.acompaniantes] 
            }
        },
        mounted(){
        },
        methods: {
            handleSubmit(data,index){
                console.log('data => ', data)
                console.log('index => ', index)
                this.acompaniantes[index] = this.copyObject(data)
            },
            handleEliminar(index){
                this.viewForms = false
                console.log('index => ', index)
                this.eliminarElemento(this.acompaniantes,index)
                this.acompaniantes = this.copyObject([...this.acompaniantes])
                setTimeout(() => { }, 5);
                this.viewForms = true 
                console.log(this.acompaniantes)
            },
            async getAcompaniantes(index) {
                // Verificar si this.$refs.formAcom está definido
                if (typeof this.$refs.formAcom !== 'undefined') {
                    // Validar cada formulario de acompañantes y recopilar los resultados
                    const resultadosValidacion = await Promise.all( this.$refs.formAcom.map(item => item.validationForm()) );
                    // return false
                    console.log('resultadosValidacion => ',resultadosValidacion)
                    
                    // // Verificar si todos los formularios son válidos
                    const todosValidos = resultadosValidacion.every(valido => valido);
                    
                    if (!todosValidos) {
                        // Si algún formulario no es válido, terminar temprano
                        console.error('Uno o más formularios de acompañantes son inválidos.');
                        return false;
                    }
                    this.acompaniantes = await Promise.all( this.$refs.formAcom.map(item => item.getForm()) );
                    
                    // // Si llegamos aquí, todos los formularios son válidos
                    // // Ahora, verifica si hay más de un acompañante
                    if (this.acompaniantes.length > 0) {
                        // Si hay más de un acompañante, retorna el array de acompañantes
                        return this.acompaniantes;
                    } else {
                        // Si hay 0 o 1 acompañante, retorna false
                        console.log('No hay suficientes acompañantes.');
                        return [];
                    }
                } else {
                    // this.$refs.formAcom no está definido, retorna false
                    console.error('Referencias a formularios de acompañantes no encontradas.');
                    return [];
                }
            },
            handleAgregar(index){
                this.acompaniantes.push({
                    "nombre": null,
                    "primerApellido": null,
                    "segundoApellido": null,
                    "edad": null
                })
            },
        },
    }
</script>

