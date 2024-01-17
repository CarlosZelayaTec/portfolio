import "../css/Header.css";

export default function Header() {
  return (
    <>
      <section className="title-menu">
        <h2>ZelayaDev</h2>
        <menu className="menu">
          <ul>
            <a href="#" className="item-list">
              Inicio
            </a>
          </ul>
          <ul>
            <a href="#" className="item-list">
              Sobre mí
            </a>
          </ul>
          <ul>
            <a href="#" className="item-list">
              Portfolio
            </a>
          </ul>
          <ul>
            <a href="#" className="item-list">
              Contacto
            </a>
          </ul>
        </menu>
      </section>
    </>
  );
}
