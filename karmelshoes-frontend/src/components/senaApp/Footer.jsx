import "/src/css/styleFooter.css"

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <a type="button">
          <a href="https://wa.me/+573154146325" target="_blank">
            <img style={{ width: "40px" }} src="/src/assets/imgs/icono-whatsapp.png" alt="" />
          </a>

        </a>
        <a type="button" >
          <a href="https://www.instagram.com/karmelshoes97?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><img src="/src/assets/imgs/icono-instgram.png" alt="" /></a>
        </a>
      </footer>
    </>
  );
};
