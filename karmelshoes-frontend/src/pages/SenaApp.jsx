import { Footer } from "../components/senaApp/Footer";
import { Header } from "../components/senaApp/Header";
import { Main } from "../components/senaApp/Main";
import { Nav } from "../components/senaApp/Nav";
import { Section } from "../components/senaApp/Section";
import { ShoppingCart } from "../components/senaApp/ShoppingCart";
import { MainLoging } from "../components/loging/MainLoging";
import { MainRegistration } from "../components/registration/MainRegistration";
import { DivShowProduct } from "../components/senaApp/DivShowProduct";
import { SectionProduct } from "../components/sectionProduct/SectionProduct";
import { MainWhoWeAre } from "../components/whoWeAre/MainWhoWeAre";
import { MainShop } from "../components/shop/MainShop";
import { PurchaseHistory } from "../components/senaApp/PurchaseHistory";
import { NavPerfil } from "../components/senaApp/NavPefil";
import { MainPerfil } from "../components/senaApp/MainPerfil";
import { useStateSenaApp } from "../hooks/useStateSenaApp";
import { useEffect } from "react";
import { MainAdmin } from "../components/mainAdmin/MainAdmin";
import { FooterAdmin } from "../components/mainAdmin/FooterAdmin";
import { SectionAdmin } from "../components/mainAdmin/SectionAdmin";
import { NavConfiguration } from "../components/senaApp/NavConfiguration";
import { SectionDataAdmin } from "../components/mainAdmin/SectionDataAdmin";
import { SectionCreateProduct } from "../components/mainProductsSales/SectionCreateProduct";

import "/src/css/styleSenaApp.css";
import "/src/css/index.css";
import "/src/css/styleShop.css";
import { SectionDetailsProduct } from "../components/senaApp/SectionDetailsProduct";
import { SectionMainPayment } from "../components/senaApp/SectionMainPayment";


export const SenaApp = () => {
  const {
    handlerLoging,
    handlerLogout,
    login,
    state,
    initPage,
    showBoy,
    showLady,
    showGentleman,
    showRegistrer,
    showLoging,
    showShoppingCart,
    showWhoWeAre,
    showPurchaseHistory,
    showShop,
    showNavPerfil,
    dataClientById,
    showMainAdmin,
    setCurrentPage,
    showDataAdmin,
    dataTableAdmin,
    dataTableProduct,
    getDataAdmin,
    getDataProduct,
    updateMainAdmin,
    showMainProductsSales,
    setCurrentPageProduct,
    showDataProduct,
    showFormularyCreateProduct,
    dataTableProductAvailable,
    showDetailsProduct,
    setDataDetailsProduct,
    setModelProductsShoppingCart,
    setDataShoppingCartModel,
    removeProductShoppingCart,
    showMainPayment,
    setCurrentPageProductAvalable,
  } = useStateSenaApp();

  const {
    id,
    name,
    email,
    phone,
    address,
    identification,
    status,
    admin,
    password,
  } = state.clienteOrAdmin;



  useEffect(() => {
    if (login.user) {
      dataClientById(login.user.clientId);
      const shoppingCartId = sessionStorage.getItem("shoppingCartId");
      setDataShoppingCartModel(shoppingCartId);
    }
  }, [login.user, sessionStorage.getItem("shoppingCartId")]);

  const renderComponentMain = () => {
    switch (state.activeSection) {
      case "Main":
        return <Main />;
      case "WhoWeAre":
        return <MainWhoWeAre />;
      case "Shop":
        return <MainShop />;
      case "NavPerfil":
        return (
          <MainPerfil
            showMainAdmin={showMainAdmin}
            login={login}
            dataClientById={dataClientById}
            dataClientOrAdmin={state.clienteOrAdmin}
            showMainProductsSales={showMainProductsSales}
          />
        );
      case "MainAdmin":
        return (
          <MainAdmin
            dataTableProduct={dataTableProduct}
            forcerRender={state.updateMainAdmin}
            getDataAdmin={getDataAdmin}
            getDataProduct={getDataProduct}
            dataTableProductElement={state.dataTableProduct}
            dataTable={state.dataTableAdmin}
            dataTableAdmin={dataTableAdmin}
            currentPageProduct={state.currentPageProduct}
            currentPage={state.currentPage}
            showDataAdmin={showDataAdmin}
            activeMainProductsSales={state.activeMainProductsSales}
            showDataProduct={showDataProduct}
          />
        );
      default:
        return <Main />;
    }
  };

  const renderComponentSection = () => {
    if (state.activeShop || state.activeNavPerfil) {
      return <section></section>;
    } else if (state.activeMainAdmin || state.activeMainProductsSales) {
      return (
        <SectionAdmin
          dataTableProduct={dataTableProduct}
          dataTableAdmin={dataTableAdmin}
          currentPageProduct={state.currentPageProduct}
          currentPage={state.currentPage}
          showRegistrer={showRegistrer}
          activeMainProductsSales={state.activeMainProductsSales}
          showFormularyCreateProduct={showFormularyCreateProduct}
        />
      );
    } else if (!state.activeWhoWeAre) {
      return (
        <Section
          handlerLogout={handlerLogout}
          login={login}
          name={name}
          showLoging={showLoging}
          showRegistrer={showRegistrer}
        />
      );
    }
  };

  const renderComponentForSectionMain = () => {
    switch (true) {
      case state.activeShoppingCart:
        return <ShoppingCart
          showShoppingCart={showShoppingCart}
          shoppingCartModel={state.shoppingCartModel}
          removeProductShoppingCart={removeProductShoppingCart}
          showMainPayment={showMainPayment}
          setDataShoppingCartModel={setDataShoppingCartModel}
        />;
      case state.activeLoging:
        return (
          <MainLoging handlerLoging={handlerLoging} showLoging={showLoging} showRegistrer={showRegistrer} />
        );
      case state.activeRegistrer:
        return (
          <MainRegistration
            showLoging={showLoging}
            showRegistrer={showRegistrer}
            login={login}
          />
        );
      case state.activeLady || state.activeGentleman || state.activeChild || state.activeDetailsProduct:
        return (
          <>
            <SectionProduct
              dataTableProductAvailable={dataTableProductAvailable}
              activeChild={state.activeChild}
              activeLady={state.activeLady}
              activeGentleman={state.activeGentleman}
              currentPageProductAvalable={state.currentPageProductAvalable}
            />
            <DivShowProduct
              dataTableProductAvailable={state.dataTableProductAvailable}
              showDetailsProduct={showDetailsProduct}
              setDataDetailsProduct={setDataDetailsProduct}
              setCurrentPageProductAvalable={setCurrentPageProductAvalable}
              currentPageProductAvalable={state.currentPageProductAvalable}
              totalPagesProductAvailable={state.totalPagesProductAvailable}
            />
            {state.activeDetailsProduct && <SectionDetailsProduct
              shoppingCartModel={state.shoppingCartModel}
              setModelProductsShoppingCart={setModelProductsShoppingCart}
              showDetailsProduct={showDetailsProduct}
              dataDetailsProduct={state.dataDetailsProduct}
              login={login}
              showLoging={showLoging}
            />}
          </>
        );
      case state.activePurchaseHistory:
        return <PurchaseHistory initPage={initPage} clientOrAdmin={state.clienteOrAdmin} />;
      case state.activeDataAdmin:
        return (
          <SectionDataAdmin
            updateMainAdmin={updateMainAdmin}
            showDataAdmin={showDataAdmin}
            dataAdmin={state.dataAdmin}
            id={id}
          />
        );
      case state.activeDataProduct:
        return <SectionCreateProduct
          dataProduct={state.dataProduct}
          showDataProduct={showDataProduct}
          showFormularyCreateProduct={showFormularyCreateProduct}
          updateMainAdmin={updateMainAdmin}
        />;
      case state.activeFormularyCreateProduct:
        return <SectionCreateProduct
          dataProduct={undefined}
          showDataProduct={undefined}
          showFormularyCreateProduct={showFormularyCreateProduct}
          updateMainAdmin={updateMainAdmin}
        />;
      case state.activatePayment:
        return <>
          <SectionMainPayment
            showMainPayment={showMainPayment}
            clienteOrAdmin={state.clienteOrAdmin}
            listModelProductWithColorsAndSizes={state.listModelProductWithColorsAndSizes}
            shoppingCartModel={state.shoppingCartModel}
            setDataShoppingCartModel={setDataShoppingCartModel}
          />
        </>;
      default:
        return null;
    }
  };

  const renderFooter = () => {
    if (state.activeMainAdmin || state.activeMainProductsSales) {
      return (
        <FooterAdmin
          activeMainProductsSales={state.activeMainProductsSales}
          currentPageProduct={state.currentPageProduct}
          currentPage={state.currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={state.totalPages}
          totalPagesProduct={state.totalPagesProduct}
          setCurrentPageProduct={setCurrentPageProduct}
        />
      );
    } else if (state.activeNavPerfil) {
      return null;
    } else {
      return <Footer />;
    }
  };

  const renderNav = () => {
    if (state.activeMainAdmin || state.activeMainProductsSales) {
      return (
        <NavConfiguration
          initPage={initPage}
          showNavPerfil={showNavPerfil}
          showMainAdmin={showMainAdmin}
          activeMainProductsSales={state.activeMainProductsSales}
          showMainProductsSales={showMainProductsSales}
        />
      );
    } else if (state.activeNavPerfil) {
      return (
        <NavPerfil
          showPurchaseHistory={showPurchaseHistory}
          showShop={showShop}
          initPage={initPage}
        />
      );
    } else {
      return (
        <Nav
          dataTableProductAvailable={dataTableProductAvailable}
          initPage={initPage}
          showShoppingCart={showShoppingCart}
          showLady={showLady}
          showGentleman={showGentleman}
          showBoy={showBoy}
          activeChild={state.activeChild}
          activeLady={state.activeLady}
          activeGentleman={state.activeGentleman}
          showWhoWeAre={showWhoWeAre}
          showShop={showShop}
          showPurchaseHistory={showPurchaseHistory}
          activeWhoWeAre={state.activeWhoWeAre}
          activeShop={state.activeShop}
          activePurchaseHistory={state.activePurchaseHistory}
          showNavPerfil={showNavPerfil}
          login={login}
          currentPageProductAvalable={state.currentPageProductAvalable}
        />
      );
    }
  };

  return (
    <>
      <Header />
      {renderNav()}
      {renderComponentSection()}
      {renderComponentMain()}
      {renderFooter()}
      {renderComponentForSectionMain()}
    </>
  );
};
