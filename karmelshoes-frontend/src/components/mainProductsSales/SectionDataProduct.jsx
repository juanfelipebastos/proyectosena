import { productModel } from "../../models/productModel";
import "/src/css/styleSectionDataProduct.css";
import { FormInputFormularyData } from "../senaApp/FormInputFormularyData";

export const SectionDataProduct = ({ showDataProduct }) => {
  const handlerOnChange = () => null;
  const erroState = {};
  const {
    name,
    description,
    price,
    stock,
    productType,
    mark,
    model,
    sizes,
    color,
    gender,
    img,
    status,
    code,
  } = productModel;

  return (
    <section className="data-product">
      <div className="data-admin-div">
        <div className="data-admin-head">
          <div className="data-admin-title">EDITAR DATOS</div>
          <div className="data-admin-img">
            <img
              onClick={showDataProduct}
              src="/src/assets/imgs/circulo-marca-x.png"
              alt=""
            />
          </div>
        </div>
        <form className="data-product-body">
          <div className="container-form-product">
            <FormInputFormularyData
              label="NOMBRE"
              name="name"
              value={name}
              onChange={handlerOnChange}
              type="text"
              id="name"
              error={erroState.name}
            />
            <FormInputFormularyData
              label="MARCA"
              name="mark"
              value={mark}
              onChange={handlerOnChange}
              type="text"
              id="mark"
              error={erroState.mark}
            />
            <FormInputFormularyData
              label="CODIGO"
              name="code"
              value={code}
              onChange={handlerOnChange}
              type="text"
              id="code"
              error={erroState.code}
            />
            <div className="form-perfil-input">
              <input
                value={stock}
                onChange={handlerOnChange}
                name={"stock"}
                className="input"
                type={"number"}
                id={"stock"}
              />
              <label htmlFor={"stock"} className="form-label-perfil">
                <span>CANTIDAD</span>
              </label>
              {erroState.code && (
                <p className="error-message">{erroState.code}</p>
              )}
            </div>
          </div>
          <div className="container-form-input-body">
            <div className="container-body-1">
              <div className="form-perfil-input">
                <label htmlFor={"gender"} className="form-label-perfil">
                  <span>GENERO</span>
                </label>
                <select className="select-1" id="gender">
                  <option value="DAMA">DAMA</option>
                  <option value="CABALLERO">CABALLERO</option>
                  <option value="NIÑO">NIÑO</option>
                  <option value="NIÑA">NIÑA</option>
                </select>
              </div>
              <div className="form-perfil-input">
                <label htmlFor={"model"} className="form-label-perfil">
                  <span>MODELO</span>
                </label>
                <select className="select-1" id="model">
                  <option value="SANDALIAS">SANDALIAS</option>
                  <option value="TENIS">TENIS</option>
                  <option value="ZAPATOS">ZAPATOS</option>
                  <option value="TACONES">TACONES</option>
                </select>
              </div>
              <div className="form-perfil-input">
                <label htmlFor={"productType"} className="form-label-perfil">
                  <span>CATEGORIA</span>
                </label>
                <select className="select-1" id="productType">
                  <option value="BOTINES">BOTINES</option>
                  <option value="BOTAS">BOTAS</option>
                  <option value="SNEAKERS">SNEAKERS</option>
                  <option value="SIN CORDONES">SIN CORDONES</option>
                  <option value="DEPORTIVOS">DEPORTIVOS</option>
                  <option value="PLANAS">PLANAS</option>
                  <option value="PLATAFORMAS">PLATAFORMAS</option>
                  <option value="MEDIANAS">MEDIANAS</option>
                  <option value="ALTOS">ALTOS</option>
                  <option value="BAJOS">BAJOS</option>
                  <option value="MEDIOS">MEDIOS</option>
                </select>
              </div>
            </div>
            <div className="container-body-2">
              <div className="container-buttom-sizes">
                <label htmlFor={"color"} className="form-label-perfil">
                  <span>COLORES</span>
                </label>
                <button type="button">SELECCIONAR</button>
              </div>
              <div className="container-buttom-sizes">
                <label htmlFor={"sizes"} className="form-label-perfil">
                  <span>TALLAS</span>
                </label>
                <button type="button">SELECCIONAR</button>
              </div>
              <div className="container-img">
                <label htmlFor="img" className="form-label-perfil">
                  <span>IMAGEN</span>
                </label>
                <div className="custom-file-input">
                  <input type="file" id="img" className="file" />
                </div>
              </div>
            </div>
            <div className="container-body-3">
              <div className="container-price">
                <FormInputFormularyData
                  label="PRECIO $"
                  name="price"
                  value={price}
                  onChange={handlerOnChange}
                  type="number"
                  id="price"
                  error={erroState.price}
                />
              </div>
              <div className="container-title-description">
                <label htmlFor="description" className="form-label-perfil">
                  <span>DESCRIPCION:</span>
                </label>
              </div>
              <textarea className="text-area" name="description"></textarea>
            </div>
            <div className="container-body-buttom">
              <div className="buttom-delete">
                <input type="reset" value="LIMPIAR" />
              </div>
              <div className="buttom-create">
                <input type="submit"value={"GUARDAR"} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
