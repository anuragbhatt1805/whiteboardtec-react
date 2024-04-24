import { Outlet } from 'react-router-dom'
import { HeaderHome } from './components/header/Header'
// import { HeaderBase } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { NavigationBar, HomeNav } from './components/navigation';
import { useLocation } from 'react-router-dom';

import { useEffect, useRef, useState } from "react";
import { database } from "./config/firebase";
import { onValue, ref, set } from "firebase/database";
import GoTo from './components/goto/GoTo';


function App(): JSX.Element{
  const [updated, setUpdated] = useState<boolean>(false);
  useEffect( ()=> {
    console.log('App loaded')
    const reference = ref(database, "/view");
    onValue(reference, async (snapshot) => {
      if (!updated){
        await set(reference, snapshot.val()+1);
        setUpdated(true);
      }
    })
  }, [] );
  
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) {
    return (
      <>
        <Outlet />
        <Footer />
      </>
    )

  } else {
    // console.log("Appppp Loooadded")
  const reference = useRef<HTMLDivElement>(null);
    return (
      <>
        {/* {(location.pathname === '/') ? <HeaderHome /> : <HeaderBase />} */}
        <div ref={reference}></div>
        <HeaderHome/>
        {(location.pathname === '/') ? <HomeNav /> : <NavigationBar />}
        <Outlet />
        {(location.pathname !== '/') && (<GoTo props={reference}/>)}
        <Footer />
      </>
    )
  }
}

export default App