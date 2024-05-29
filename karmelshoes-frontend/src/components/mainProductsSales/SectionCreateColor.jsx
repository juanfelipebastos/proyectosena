import { useEffect, useState } from "react";
import { FormInputFormularyData } from "../senaApp/FormInputFormularyData";
import { initialDataFormularyColorAndSize, initialErrorsMessage, showDataColorsAndSizes } from "../../models/initialStateSectionCreateColor";
import { createNewColor, createNewSize, deleteColorByName, deleteSizrBySize, getAllListColorAndSize } from "../../services/colorAndSizeservice";

export const SectionCreateColor = ({ dataListColorAndListSize, showSectionColor }) => {
  const [dataFormuaryMain, setDataFormularyMain] = useState(initialDataFormularyColorAndSize);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [showList, setShowList] = useState(showDataColorsAndSizes);
  const [erroState, setErroState] = useState(initialErrorsMessage);
  const { colors, sizes } = dataFormuaryMain;


  const handlerOnChangeColor = (event) => {
    const { name, value } = event.target;
    if (name === "color") {
      const nameValue = value.toUpperCase();
      setColor(nameValue);
      setErroState(initialErrorsMessage);
    }
  };

  const handlerOnChangeSize = (event) => {
    const { name, value } = event.target;
    if (name === "size") {
      setSize(value);
      setErroState(initialErrorsMessage);
    }
  };

  useEffect(() => {
    handlerListColorsAndSizes();
  }, []);

  const handlerListColorsAndSizes = async () => {
    const data = await getAllListColorAndSize();
    setShowList(data);
  }

  const handlerSaveSize = async () => {
    if (size < 0) {
      setErroState((prevDataFormulary) => {
        return {
          ...prevDataFormulary,
          size: "No puede ser menor a 0"
        }
      })
    } else {
      try {
        const normalizeData = {
          size: size,
        }
        await createNewSize(normalizeData);
        handlerListColorsAndSizes();
        setErroState((prevDataFormulary) => {
          return {
            ...prevDataFormulary,
            size: "Se Guardo Correctamente"
          }
        })
        setSize("");
      } catch (error) {
        console.log(error.response);
        const responseError = error.response.data;
        if (responseError.code === 400) {
          if (responseError.errors === null) {
            setErroState((prevDataFormulary) => {
              return {
                ...prevDataFormulary,
                size: responseError.message
              }
            })
          } else {
            setErroState((prevDataFormulary) => {
              return {
                ...prevDataFormulary,
                size: responseError.errors.size
              }
            })
          }
        }
      }
    }
  };

  const handlerDeleteSize = async () => {
    try {
      await deleteSizrBySize(size);
      setSize("");
      setErroState((prevDataFormulary) => {
        return {
          ...prevDataFormulary,
          size: "Se Ha Eliminado Correctamente"
        }
      })
      handlerListColorsAndSizes();
    } catch (error) {
      const responseError = error.response.data;
      if (error.response.status === 403) {
        setErroState((prevDataFormulary) => {
          return {
            ...prevDataFormulary,
            size: "No Puede Estar Vacio El Campo"
          }
        })
      } else if (responseError.code === 404) {
        setErroState((prevDataFormulary) => {
          return {
            ...prevDataFormulary,
            size: responseError.message
          }
        })
      }
    }
  };

  const handlerSaveColor = async () => {
    try {
      const sendData = {
        name: color
      }
      await createNewColor(sendData);
      handlerListColorsAndSizes();
      setColor("");
      setErroState((prevDataFormulary) => {
        return {
          ...prevDataFormulary,
          color: "Se Guardo Correctamente"
        }
      })
    } catch (error) {
      const responseError = error.response.data;
      if (responseError.code === 400) {
        if (responseError.errors === null) {
          setErroState((prevDataFormulary) => {
            return {
              ...prevDataFormulary,
              color: responseError.message
            }
          })
        } else {
          setErroState((prevDataFormulary) => {
            return {
              ...prevDataFormulary,
              color: responseError.errors.name
            }
          })
        }
      }
    }
  };

  const handlerDeleteColor = async () => {
    try {
      await deleteColorByName(color);
      handlerListColorsAndSizes();
      setColor("");
      setErroState((prevDataFormulary) => {
        return {
          ...prevDataFormulary,
          color: "Se Elimino Correctamente"
        }
      })
    } catch (error) {
      const responseError = error.response.data;
      if (error.response.status === 403) {
        setErroState((prevDataFormulary) => {
          return {
            ...prevDataFormulary,
            color: "No Puede Estar Vacio El Campo"
          }
        })
      } else if (responseError.code === 404) {
        setErroState((prevDataFormulary) => {
          return {
            ...prevDataFormulary,
            color: responseError.message
          }
        })
      }
    }
  };

  const handlerOnChangeFormularyName = (event) => {
    const { name, type, checked } = event.target;

    setDataFormularyMain((prevDataFormulary) => {
      if (type === "checkbox") {
        return {
          ...prevDataFormulary,
          colors: checked
            ? [...prevDataFormulary.colors, name]
            : prevDataFormulary.colors.filter((color) => color !== name),
        };
      }
    });
  };

  const handlerOnChangeFormularySize = (event) => {
    const { name, type, checked } = event.target;
    const sizeValue = parseInt(name);

    if (!isNaN(sizeValue) && type === "checkbox") {
      setDataFormularyMain((prevDataFormulary) => {
        return {
          ...prevDataFormulary,
          sizes: checked
            ? [...prevDataFormulary.sizes, sizeValue]
            : prevDataFormulary.sizes.filter((size) => size !== sizeValue),
        };
      });
    } else {
      console.error(`Error: ${name} no es un número o el tipo no es checkbox.`);
    }
  };

  const handlerOnsubmit = (event) => {
    event.preventDefault();
    dataListColorAndListSize(dataFormuaryMain);
    setDataFormularyMain(initialDataFormularyColorAndSize);
    alert("Se Guardo Correctamente La Talla y El Color");
  };

  const renderErrorColorOrColor = () => {
    if (erroState.color) {
      return <h2 style={{ fontSize: "25px" }}>{erroState.color}</h2>;
    } else if (erroState.messageSuccesing) {
      return <h2 style={{ fontSize: "25px" }}>{erroState.messageSuccesing}</h2>;
    } else {
      return <h2>COLORES</h2>;
    }
  }

  const renderErrorSizeOrSize = () => {
    if (erroState.size) {
      return <h2 style={{ fontSize: "25px" }}>{erroState.size}</h2>;
    } else {
      return <h2>TALLAS</h2>;
    }
  }

  return (
    <>
      <div className="section-color">
        <form onSubmit={handlerOnsubmit} className="section-color-body">
          <div className="section-color-img">
            <img
              onClick={showSectionColor}
              src="/src/assets/imgs/flecha-circulo-izquierda.png"
            />
          </div>
          <div className="section-color-div-body">
            <div className="head-section-div">
              {renderErrorColorOrColor()}
            </div>
            <div className="section-color-div">
              <div className="section-text-color">
                <FormInputFormularyData
                  label="COLOR"
                  name="color"
                  value={color}
                  onChange={handlerOnChangeColor}
                  type="text"
                  id="color"
                  error={null}
                />
                <div className="buttom-create">
                  <input className="section-buttoms-color" type="button" value={"GUARDAR"} onClick={handlerSaveColor} />
                  <input type="button" value={"ELIMINAR"} onClick={handlerDeleteColor} />
                </div>
              </div>
              <div className="section-select-checkbox">
                {showList.colorList.map((colorItem) => (
                  <div className="checkbox" key={colorItem.name}>
                    <input
                      type="checkbox"
                      name={colorItem.name}
                      onChange={handlerOnChangeFormularyName}
                      checked={colors.includes(colorItem.name)}
                    />
                    {colorItem.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="head-section-div">
              {renderErrorSizeOrSize()}
            </div>
            <div className="section-color-div">
              <div className="section-text-color">
                <FormInputFormularyData
                  label="TALLA"
                  name="size"
                  value={size}
                  onChange={handlerOnChangeSize}
                  type="number"
                  id="size"
                  error={null}
                />
                <div className="buttom-create">
                  <input className="section-buttoms-color" type="button" value={"GUARDAR"} onClick={handlerSaveSize} />
                  <input type="button" value={"ELIMINAR"} onClick={handlerDeleteSize} />
                </div>
              </div>
              <div className="section-select-checkbox">
                {showList.sizeList.map((sizeItem) => (
                  <div className="checkbox" key={sizeItem.size}>
                    <input
                      type="checkbox"
                      name={sizeItem.size}
                      onChange={handlerOnChangeFormularySize}
                      checked={sizes.includes(sizeItem.size)}
                    />
                    {sizeItem.size}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-section-div">
            <div className="buttom-create">
              <input type="submit" value={"GUARDAR"} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
