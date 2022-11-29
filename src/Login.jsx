export default function Login(){

    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-20 col-lg-12 col-md-9">
                    <div class="card o-hidden border-5 shadow-lg my-5">
                        <div class="card-body p-4">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block ">
                                    <img src="https://www.imagar.com/wp-content/uploads/2020/07/Desarrollo-web-ecommerce-1.jpg" class="img-fluid" alt="Responsive image" /></div>
                                <div class="col-lg-6">
                                    <div class="p-0">
                                        <div class="text-center">
                                        <h1 class="h1 text-black-900 mb-2">Bienvenido</h1>
                                        </div>
                                        {/* <!--Formulario de Login--> */}
                                        <from>
                                            <div class="mb-1">
                                                <label for="exampleInputEmail1" class="form-label">Ingrese su Correo</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                                            </div>
                                            <div class="mb-2">
                                                <label for="exampleInputPassword1" class="form-label">Ingrese su Contraseña</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1" />
                                            </div>
                                            
                                            <div class="mb-1 col-lg-3 d-grid">
                                                <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                                            </div>
                                            <div class="mb-1 col-md-4 from-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                                <label class="form-check-label" for="exampleCheck1">Recordar Contraseña</label>
                                            </div>
                                            <div class="my-1 col-md-6">
                                                <span>¿No tienes una cuenta?<a href="#"> Registrate Aquí</a></span><br/>
                                                <span><a href="#">Recuperar Contraseña</a></span>
                                                </div>
                                        </from>
                                        </div>
                                    </div>
                                    {/* <div class="col"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        /* </div> */

    )
}