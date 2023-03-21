import style from "./Cursos.module.css";

export default function Cursos() {
  return (
    <div className={style.container}>
      <div className={style.titulo}>
        <h2>Cursos</h2>
        <p style={{margin:"30px"}}>Estamos trabajando para desarrollar cursos donde ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae ipsam nihil. Perferendis adipisci ipsum eaque esse accusamus, similique aut eligendi, odio facere nisi, dolore expedita sint. Pariatur, veniam sed! </p>
      </div>
      <iframe
        width="760"
        height="415"
        src="https://www.youtube.com/embed/nHCx05rpesQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

    </div>
  );
}
