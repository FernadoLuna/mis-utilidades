import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start ">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Sobre Nosotros</h5>
            <p>
              Hemos estado en tu posición y sabemos lo que necesitas por lo que
              desarrollamos herramientas utiles para ti y para tu e-commerce.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Enlaces</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contacto</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">
                  Dirección
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Teléfono
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Correo electrónico
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Mis Utilidades. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
