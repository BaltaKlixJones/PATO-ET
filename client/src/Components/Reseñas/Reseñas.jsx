import "./Reseñas.css";

export default function Reseñas() {
  return (
    <div className="container1">
    <div className="container2">
      <div className="textos">
        <h1>💬 Algunas opiniones</h1>
        <p>
          {" "}
          ¡Nos importa mucho las opiniones de nuestro centro para poder seguir
          mejorando !
        </p>
      </div>
      <div className="reseñas">
        <div className="container">
          <div className="reseña">
            <h2>Micaela Valdez</h2>
            <p>"Excelentes profesionales con gran calidad humana."</p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          <div className="reseña">
            <h2>Diego Portal</h2>
            <p>
              "Mi hija asiste ahi. Son excelentes en todas las areas. Estamos
              felices. Super recomendados."
            </p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          <div className="reseña">
            <h2>Ely CM</h2>
            <p>
              "Centro de Estimulación temprana! Realizan un trabajo excelente,
              <br />
              nosotros vamos hace 2 años y mi hijo le encanta! Excelentes
              profesionales!!"
            </p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          <div className="reseña">
            <h2>Nicolas Bf</h2>
            <p>
              "Excelentes intalaciones con un equipamiento muy completo.
              <br />
              El equipo humano es maravilloso y muy capacitado. Sin duda lo
              recomiendo."
            </p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          <div className="reseña">
            <h2>Gabriel Zalazar</h2>
            <p>"Hermoso lugar y excelentes profesionales."</p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          <div className="reseña">
            <h2>María soledad Guasco</h2>
            <p>
              "Cuenta con los mejores profesionales de Salta y tiene lo último
              en equipamiento!"
            </p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
        </div>
      </div>

        <div className="recuadroHome">
      <h2>
        ¡Puedes ver más opiniones haciendo click{" "}
        <a
          href="https://www.google.com/search?hl=es-AR&gl=ar&q=P.a.t.o+-Centro+de+Estimulaci%C3%B3n+Temprana+y+Neurorehabilitacion+Integral+(de+Lic.+Patricia+Jones),+Salta&ludocid=1068908539001127313&lsig=AB86z5WF4gAMjVYyC91s3J6aHM7w&hl=es&gl=AR#lrd=0x941bc17ade5a5d03:0xed586a7248b4191,1"
          target="_blank"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          acá
        </a>
        !
      </h2>
      <h4>© 2022 | P.A.T.O. Estimulación Temprana y Neurorehabilitación Integral | Derechos Reservados.</h4>
      </div>
    </div>
    </div>
  );
}
