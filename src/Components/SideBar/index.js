import Menu from './Menu';
import Logo from './Logo';
function SideBar(){
    return(
        <aside className='
        w-2/12
         bg-base-100
          h-screen
          border-r
          border-blue-300
          border-opacity-20
          
          
          '>
        <Logo/>
          <Menu/>
          
        </aside>
    )
}

export default SideBar;