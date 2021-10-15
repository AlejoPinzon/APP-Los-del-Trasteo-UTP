<template>
    <div class="profile">
    <div class="container w-80 bg-secundary mt-5">
    <div class="row aling-items-stretch">
        <h1 class="fw-bold text-left pt-5 mt-5 bg2 "> Ingresa tus datos  </h1>
        
        <br>
        
       <div class="col d-none d-lg-block">
            <div class="aling-right">
                <h3 class="fw-bold text-left pt-3 mt-3">Datos personales</h3>
                <br>
                    <form action="">
                        <p>
                            Nombre de la empresa: <input type="text" 
                                                    name="nombre" 
                                                    placeholder="Nombre" 
                                                    class = "form-control" 
                                                    v-model="contacto.nombre" >
                        </p>
                        <p>
                            Correo electrónico: <input type="text" 
                                                 name="correo" 
                                                 placeholder="Correo" 
                                                 class = "form-control" 
                                                 v-model="contacto.correo">
                        </p>
                        <p>
                            Teléfono: <input type="number" 
                                       name="telefono" 
                                       placeholder="Telefono" 
                                       class = "form-control" 
                                       v-model="contacto.telefono">
                        </p>
                    </form>
        
                <h3 class="fw-bold text-left pt-1 mt-2">Servicios </h3>
                <br>
                    <form action="" @submit.prevent="addDatos" >
                        <p>
                            Tipo de servicio: <input type="text" 
                                               name="tipo" 
                                               placeholder="Tipo" 
                                               class = "form-control" 
                                               v-model="contacto.tipo">
                        </p>
                        <p>
                            Servicios adicionales: <input type="text" 
                                                    name="adicional" 
                                                    placeholder="Adicional" 
                                                    class = "form-control" 
                                                    v-model="contacto.adicional">
                        </p>
                                            
                        <input type="submit" value="Guardar" title="Guardar" class="btn btn-primary">                   
                    </form>                  
            </div>
           
         </div>
        <br>
        <div class="col bg-white">
            <h3 class="fw-bold text-left pt-3 mt-3">Datos del Vehículo</h3>
            <br>
                <form action="">
                     <p>
                        Placa: <input type="text" 
                                name="placa" 
                                placeholder="Placa" 
                                class = "form-control" 
                                v-model="contacto.placa">
                    </p>
                    <p>
                        Tamaño: <input type="text" 
                                 name="tamaño" 
                                 placeholder="Tamaño" 
                                 class = "form-control" 
                                 v-model="contacto.tamaño">
                    </p>               
                    
                </form>
                <br>
                <table class="table table bordered">
                    <thead>
                        <th>Empresa</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Servicio</th>
                        <th>Adicionales</th>
                        <th>Placa</th>
                        <th>Tamaño</th>
                    </thead>
                    <tbody >
                        <tr v-for="contacto of contactos" v-bind:key="contacto">
                        <td>{{contacto.nombre}}</td>
                        <td>{{contacto.correo}}</td>
                        <td>{{contacto.telefono}}</td>
                        <td>{{contacto.tipo}}</td>
                        <td>{{contacto.adicional}}</td>
                        <td>{{contacto.placa}}</td>
                        <td>{{contacto.tamaño}}</td>
                        <td>
                            <button @click="deleteDatos(contacto._id)" 
                                    class="btn btn-danger">
                                    Borrar
                            </button>
                            <button @click="updateDatos(contacto._id)"
                                    class="btn btn-success">
                                    Actualizar
                            </button>
                        </td>
                        </tr>

                    </tbody>
                </table>                
        </div>
             <br>                           
        </div>
        
        </div>
        
    </div>
</template>

<script>
//import {required, minLenght, email} from 'vuelidate/lib/validators';
class contacto{
    constructor(nombre, correo, telefono, tipo, adicional, placa, tamaño){
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.tipo = tipo;
        this.adicional = adicional;
        this.placa = placa;
        this.tamaño = tamaño;
    }
}

export default {
    data() {
        return {
            contacto: new contacto(),
            contactos: []            
        }
        
    },
   created(){
       this.getDatos();
   },
    
    methods:{

        /*procesar() {
            alert("Datos guardados con éxito")
        },*/
        enviarDatos(){
            if(this.edit === false){
                this.addDatos();
            }else{
                fetch('http://localhost:5000/tasks/'+ this.tareaEdit,{
                    method: 'PUT',
                    body: JSON.stringify(this.contacto),
                    headers: {
                        'Accept':'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(() => {this.getDatos()})
                .then(this.edit = false)
                this.contacto = new contacto();
              
            }
        },
        addDatos(){   
            console.log(this.contacto)       
            fetch ('http://localhost:5000/tasks', {
                method: 'POST', 
                body: JSON.stringify(this.contacto),
                headers:{

                    'Accept':'application/json',
                    'Content-type': 'application/json',
                }

            }).then(res => res.json())
            .then(() => {this.getDatos()})
            this.contacto = new contacto()
            
        },
        getDatos(){
        fetch('http://localhost:5000/tasks')
        .then(res => res.json())
        .then(data => {
            this.contactos = data
            console.log(this.contactos)
            })
        },
        deleteDatos(id){
            fetch('http://localhost:5000/tasks/'+id,{
                method:'DELETE',
                headers:{

                    'Accept':'application/json',
                    'Content-type': 'application/json'
                }
            }).then(res => res.json)
            .then(() => {this.getDatos()})
            
        },
        updateDatos(id){
            fetch('http://localhost:5000/tasks/'+id)
            .then(res => res.json())
            .then(data => {
               this.contacto = new contacto(data.nombre, data.correo, data.telefono, data.tipo, 
                                            data.adicional, data.placa, data.tamaño)
               this.edit = true
               this.tareaEdit = data._id
            });
        }
    }   
   
}
</script>





<style>
    

        .bg2{
          background: url("../../img/img1.png");
          background-position: center;

        }
</style>


    'http://localhost:5000/tasks/'