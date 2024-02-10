import logo from '../assets/logo192.png';

const Header = () => {
    return (
        <>
            <div className='flex items-center py-2 px-5 md:px-10'>
                <a className='flex items-center gap-2 flex-1' href='/'>
                    <img src={logo} alt="Pienteger Logo"
                        className='h-6 w-6' />
                    <h1 className='text-xl font-bold'>Pienteger</h1>
                </a>

                <div className='flex-init'>
                    <nav className='flex gap-2 justify-end'>
                        <a href='/about' className='font-bold hover:underline'>About</a>
                        <a href='/services' className='font-bold hover:underline'>Services</a>
                        <a href='/contact' className='font-bold hover:underline'>Contact</a>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;
