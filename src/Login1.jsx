export default function Login(){

    return (
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                            
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block ">
                                <img src="https://www.imagar.com/wp-content/uploads/2020/07/Desarrollo-web-ecommerce-1.jpg" class="img-fluid" alt="Responsive image" /></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Bienvenido</h1>
                                    </div>

                        
                                    <div class="alert alert-dismissible alert-info">
                                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                        <h4 class="alert-heading">Ingreso al Sistema</h4>
                                            <p class="mb-0">                                      
                                            </p>
                                    </div>
                        
                               

                                        {/* <!--Formulario de Login--> */}
                                    <form class="user" action="/validarlogin" method="POST">
                                        <div class="form-group mb-3">
                                            <input type="email" class="form-control form-control-user" name="usuario" aria-describedby="emailHelp" placeholder="Ingrese el Usuario"/>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="password" class="form-control form-control-user" id="exampleInputPassword" name="passw" placeholder="Contraseña"/>
                                        </div>                                        
                                        <div class="form-group mb-3">
                                        <div class="custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                            <label class="custom-control-label" for="customCheck">Recordar</label>
                                        </div>
                                        </div>
                                        <button class="btn btn-outline-primary btn-block" id="alertas" type="submit">Enviar</button>
                        
                        
                                               
                                    </form>
                                            
                                            
                                    {/* <div class="text-center">
                                    <a class="small" href="#">Olvido su Contraseña?</a>
                                    </div> */}
                                            
                                    <hr/>
                                        <div class="text-center">
                                        <a class="btn btn-outline-primary" href="{{url_for('registro')}}">Registrar Usuario</a>
                                        </div>
                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
    
        </div>
    
    /* </div> */
  


    )
}