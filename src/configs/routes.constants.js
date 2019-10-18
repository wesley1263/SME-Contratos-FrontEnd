import Home from "../pages/Home";
import ListaContrato from "../pages/ListaContrato";
import painelSelecao from "../pages/PainelSelecao";
import ContratosContinuos from "../pages/ContratosContinuos";


const RoutesConfig = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/lista_contratos",
        component: ListaContrato,
        exact: false
    },
    {
        path: "/painel-selecao",
        component: painelSelecao,
        exact: false
    },
    {
      path: "/contratos-continuos",
      component: ContratosContinuos,
      exact: false
  },
]

export default RoutesConfig

export const MenuConfig = [
    {
      label: "Contratos",
      icon: "pi pi-list",
      items: [
        { label: "Visualizar", icon: "pi pi-fw pi-th-large", to: "/painel-selecao" },
      ]
    },
    {
      label: "Planejamento",
      icon: "pi pi-align-justify",
      command: () => {
        window.location = '#/lista_contratos'
      }
    },
    {
      label: "Localizar gestores",
      icon: "pi pi-map-marker",
      command: () => {
        window.location = '#'
      }
    },
    {
      label: "Relatórios",
      icon: "pi pi-chart-bar",
      command: () => {
        window.location = '#'
      }
    },
    {
      label: "Gestão",
      icon: "pi pi-users",
      command: () => {
        window.location = '#'
      }
    },
    {
      label: "Configurações",
      icon: "pi pi-cog",
      command: () => {
        window.location = '#'
      }
    },
]
// items: [
//     { label: "Sample Page", icon: "pi pi-fw pi-th-large", to: "/sample" },
//     { label: "Forms", icon: "pi pi-fw pi-file", to: "/forms" },
//     { label: "Data", icon: "pi pi-fw pi-table", to: "/data" },
//     { label: "Panels", icon: "pi pi-fw pi-list", to: "/panels" },
//     { label: "Overlays", icon: "pi pi-fw pi-clone", to: "/overlays" },
//     { label: "Menus", icon: "pi pi-fw pi-plus", to: "/menus" },
//     { label: "Messages", icon: "pi pi-fw pi-spinner", to: "/messages" },
//     { label: "Charts", icon: "pi pi-fw pi-chart-bar", to: "/charts" },
//     { label: "Misc", icon: "pi pi-fw pi-upload", to: "/misc" }
//   ]