import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4  max-w-7xl mx-auto border-b-2 '>
            <h1 className='text-6xl, font-extrabold'>
                Knowledge-cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};


export default Header;

