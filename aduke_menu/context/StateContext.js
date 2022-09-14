// import React, { createContext, useContext, useState, useEffect } from 'react';

// const Context = createContext();

// export const StateContext = ({ children }) => {
//   const [menuList, setMenuList] = useState(false);

//   const [searchMenu, setSearchMenu] = useState('');

//   const [menuItem, setMenuItem] = useState([]);
//   const [toggleDisplay, setToggleDisplay] = useState(true);

//   const onSearch = async (queryData) => {
//     let searchedMenu;
//     // let sum = 0;
//     if (searchMenu) {
//       searchedMenu = queryData.filter(
//         (item, index) => item.name.toLowerCase().includes(searchMenu)

//         // ||
//         // item.details.toLowerCase().includes(searchMenu)
//       );
//       setSearchMenu('');
//       setMenuItem(searchedMenu);
//       console.log(searchedMenu);
//     }
//   };

//   // const onMenuToggle = () => {
//   //   setMenuList(!menuList);
//   // };

//   return (
//     <Context.Provider
//       value={{
//         menuItem,
//         setMenuItem,
//         menuList,
//         setMenuList,
//         searchMenu,
//         setSearchMenu,
//         toggleDisplay,
//         setToggleDisplay,
//         onMenuToggle,
//         onSearch,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// };

// export const useStateContext = () => useContext(Context);
