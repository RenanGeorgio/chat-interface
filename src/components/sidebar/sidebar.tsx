import { SvgIcon } from '@mui/material';
import React, { useState } from 'react';
import { FaArrowsAltH} from "react-icons/fa";
import {AiFillAppstore} from "react-icons/ai";
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu, menuClasses, MenuItemFR,} from 'react-pro-sidebar';

function SidebarLayout() {
  const [menuCollapse, setMenuCollapse] = useState(false)
  
  
  
  const { collapseSidebar, toggleSidebar, collapsed, toggled } = useProSidebar();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      menuCollapse;
      collapseSidebar();
    } else {
      !menuCollapse;
      collapseSidebar();
    }
  };


  // const handleCollapsedChange = () => {
  //   setCollapsed(!collapsed);
  // };
  // const handleToggleSidebar = (value) => {
  //   toggled(value);
  // };

  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
        <>
        <div className='h-full text-white absolute overflow-hidden ' id="header">
        <Sidebar 
        rootStyles={{
         hover:'none'
        }}
         collapsedWidth={'55px'}
         width='195px'
        style={{ height: "100%", position: "fixed", marginLeft:0, marginTop:'5.5%', border:'none' }}
        // @ts-ignore
        // collapsed={collapsed}
        toggled={!toggled}
        // handleToggleSidebar={handleToggleSidebar}
        // handleCollapsedChange={handleCollapsedChange}
        >
        <main  className='h-full z-40 relative bg-zinc-900 overflow-hidden '>
    <div className=' bg-zinc-900  min-h-full text-white relative mt-1 z-40 '>
          <Menu className='h-full bg-zinc-900  text-white z-40'
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    color: 'fff',
                    backgroundColor: active ? '#eecef9' : undefined,
                    ":hover":{
                      color: '#fff',
                      backgroundColor: '#666'
                    }
                  };
              },
               }}
          >
          <div className={'z-40-700 ml-8 mt-5 sticky mb-10'} onClick={() => collapseSidebar()}>
                {/* changing menu collapse icon on click */}

              {!toggled ? 
                <FaArrowsAltH className="flex-shrink-0 w-6 h-6" size={30}/>
             : 
                <FaArrowsAltH size={30}/>
              }
           
            </div>
            <MenuItem
            icon={ <svg aria-hidden="true" className="w-6 h-6 text-yellow-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>}>
             Giro de Produtos
             </MenuItem>
            
          <MenuItem 
          icon={<svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-yellow-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
          >
            Em Atenção
          </MenuItem>

          <MenuItem          
            icon={<svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-yellow-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>}
          >
            Produtos
          </MenuItem>
        
            <MenuItem 
            icon={<svg  className="flex-shrink-0 w-6 h-6 text-yellow-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 48C0 21.5 21.5 0 48 0H368c26.5 0 48 21.5 48 48V96h50.7c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3V256v32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V48zM416 256H544V237.3L466.7 160H416v96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM208 272c39.8 0 72-29.6 72-66c0-27-39.4-82.9-59.9-110.3c-6.1-8.2-18.1-8.2-24.2 0C175.4 123 136 179 136 206c0 36.5 32.2 66 72 66z"/></svg>}
            > 
            Distribuição
            </MenuItem>
          </Menu>
      </div>
    </main>
        </Sidebar>
      </div>
      </>
  );
}

export default SidebarLayout