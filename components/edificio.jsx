
function Edificio() {

    const handleClick = () => {
        window.open('https://github.com/JosueTut/Residencia-Prueba', '_blank');
    }

    return (
        <>
            <div onClick={handleClick} className='bg-blue-200 w-3/4 size-32 p-6 my-8 text-center items-center justify-center flex rounded-lg border-1 border-blue-400 hover:bg-blue-300 cursor-pointer shadow-2xl/30'>
                Edificio 1
            </div>
        </>
    )
}

export default Edificio
