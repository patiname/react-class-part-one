// import React from "react";

// const MapFn = ({ menu }) => {
//   //   console.log(menu[0].menu);
//   console.log(menu);
//   return (
//     // <ul>
//     //   <li>
//     //     메뉴: {menu[0].menu}, 사이드: {menu[0].side}
//     //   </li>
//     //   <li>
//     //     메뉴: {menu[1].menu}, 사이드: {menu[1].side}
//     //   </li>
//     //   <li>
//     //     메뉴: {menu[2].menu}, 사이드: {menu[2].side}
//     //   </li>
//     // </ul>
//     <ul>
//       <h1>오늘의 메뉴!</h1>
//       {menu.map((eat) => (
//         <li key={menu.id}>
//           메뉴: {eat.menu}, 사이드: {eat.side}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MapFn;

import React, { Component } from "react";

class MapFn extends Component {
  render() {
    const { menu } = this.props;
    console.log(menu);

    return (
      <div>
        <ul>
          <h1>오늘의 메뉴!</h1>
          {menu.map((eat) => (
            <li key={menu.id}>
              메뉴: {eat.menu}, 사이드: {eat.side}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MapFn;
