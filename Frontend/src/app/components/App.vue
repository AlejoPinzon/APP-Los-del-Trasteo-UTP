<template>
    <div>
    <div class="container w-80 bg-secundary mt-5">
    <div class="row aling-items-stretch">
        <h1 class="fw-bold text-left pt-5 mt-5"> Ingresa tus datos  </h1>
        <br>
        <div class="col d-none d-lg-block">
            <div class="aling-right">
                <h3 class="fw-bold text-left pt-3 mt-3">Datos personales</h3>
                <br>
        <form action="#">
            <p>
                Nombre de la empresa: <input type="text" name="nombre" placeholder="Nombre" class = "form-control" v-model="contacto.nombre" />
            </p>
            <p>
                Correo electrónico: <input type="text" name="correo" placeholder="E-mail" class = "form-control" v-model="contacto.correo"/>
            </p>
            <p>
                Teléfono: <input type="number" name="telefono" placeholder="Número" class = "form-control" v-model="contacto.telefono"/>
            </p>
        </form>
        <h3 class="fw-bold text-left pt-1 mt-2">Servicios </h3>
        <br>
        <form action="" v-on:submit.prevent="procesar();">
             <p>
                Tipo de servicio: <input type="text" name="tipo" placeholder="Tipo" class = "form-control" v-model="contacto.tipo"/>
            </p>
             <p>
                Servicios adicionales: <input type="text" name="adicional" placeholder="Adicionales" class = "form-control" v-model="contacto.adicional" />
            </p>
            <hr />
            <input type="submit" value="Guardar" title="Guardar" class="btn btn-primary"/>
        </form>
            </div>
        </div>
        <br>
        <div class="col bg-white">
        <h3 class="fw-bold text-left pt-3 mt-3">Datos del Vehículo</h3>
        <br>
        <form action="">
             <p>
                Placa: <input type="text" name="placa" placeholder="Placa" class = "form-control" v-model="contacto.placa" />
            </p>
             <p>
                Tamaño: <input type="text" name="tamaño" placeholder="Tamaño" class = "form-control" v-model="contacto.tamaño" />
            </p>
        </form>
        </div>
        <br>                
    </div>
    </div>
    </div>
</template>

<script>
//import {required, minLenght, email} from 'vuelidate/lib/validators';
export default {
    name: 'App',
    data() {
        return {
            contacto: {
                nombre:'',
                correo:'',
                telefono:'',
                placa:'',
                tamaño:'',
                tipo:'',
                adicional:''
            }
        }
        
    },
    methods:{
        procesar() {
            alert("Datos guardados con éxito")
        }
    },/*
    validations: {
        contacto: {
            nombre: {
                required,                
            },
            correo: {
                required,
                email,                
            },
            telefono: {
                required,
                minLenght: minLenght(7),                
            },
            placa: {
                required,                
            },
            tamaño: {
                required,                
            },
            tipo: {
                required,                
            },
            adicional: {
                                
            }       
        }
    }*/
}
</script>