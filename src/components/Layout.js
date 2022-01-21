import React,{useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children})  {
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        
        <div>
            
            <Header />
            <div className="content font-mont">
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout
