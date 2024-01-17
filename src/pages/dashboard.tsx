/* eslint-disable jsx-a11y/alt-text */
import { Header } from '@components/header/header';
import Image from 'next/image';

import styles from '@styles/Chart.module.css';
import Footer from '@components/footer/footer';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SidebarLayout from '@components/sidebar/sidebar';

const Logo = "../../public/LogoPanvel.svg"

const IndexPage: React.FC = () => {

  return ( 
    <div className={styles.content}>
      <div style={{flexGrow:1, width:'100vw', zIndex:9999995, position:'fixed'}}>
        <Header title={undefined} />
      </div>
        <div style={{marginTop:0}}>
          < ProSidebarProvider>
            <div className='h-full'>
              <SidebarLayout/>
            </div>
          </ProSidebarProvider>
        </div>
        <div className={styles.container}>
          <div  id={styles.wrapper}>
            <div className={styles.box}>
              <div className='flex justify-end'>
                <Image
                  src="/LogoPanvel.svg"
                  width={200}
                  height={100}
                  style={{margin:25,justifyContent:'flex-end'}}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{flexGrow:1, width:'100vw', zIndex:9999995, position: 'fixed', bottom:0}}>
        <Footer/>
      </div>
    </div>
  );
};

export default IndexPage;
