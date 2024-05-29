
import "/src/css/styleMain.css"
export const Main = () => {

  return (
    <>
      <main className="main">
        <div className="gallery">
          <div className="gallery-container">
            <img className="gallery-item gallery-item-1" src="/src/assets/imgs/fondo_page_2.jpg" alt="imgagen de muestra" data-index="1" />
            <img className="gallery-item gallery-item-2" src="/src/assets/imgs/fondo_page_1.jpg" alt="imgagen de muestra" data-index="2" />
            <img className="gallery-item gallery-item-3" src="/src/assets/imgs/fondo_page_3.jpg" alt="imgagen de muestra" data-index="3" />
            <img className="gallery-item gallery-item-4" src="/src/assets/imgs/fondo_page_4.jpg" alt="imgagen de muestra" data-index="4" />
            <img className="gallery-item gallery-item-5" src="/src/assets/imgs/fondo_page_5.jpg" alt="imgagen de muestra" data-index="5" />
          </div>
        </div>
      </main>
    </>
  );
};
