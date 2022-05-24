
import {ReactComponent as SiteLogo }from  './../../Assets/logo/SiteLogo.svg'

function Logo(){
    return(
        <div className="h-16 p-3 bg-base-100 w-full text-center flex items-center justify-start" >
            <SiteLogo
            className='h-18 w-18'
            />
            <a href="#" className="btn btn-ghost logoTitle normal-case text-2xl">Kidsy Land</a>
    
        </div>
    )
}


export default Logo;