import Image from 'next/image';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { Header } from '@components/header/header';
import Footer from '@components/footer/footer';
import SidebarLayout from '@components/sidebar/sidebar';

import styles from '@styles/Chart.module.css';

const Logo = './LogoPanvel.svg';

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
              </div>
            </div>
          </div>
        </div>
        <div style={{flexGrow:1, width:'100vw', zIndex:9999995, position: 'fixed', bottom:0}}>
        <Footer/>
      </div>
    </div>
  );
}

export default IndexPage
