import './header.css';

function Header() {
    return (
        <div className='header'>
            <h3 className='logo'>PixMerc</h3>
            <div className='navbar'>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/pricing'>Pricing</a>
                <a href='/blogs'>Blogs</a>
            </div>
        </div>
    );
}

export default Header;
