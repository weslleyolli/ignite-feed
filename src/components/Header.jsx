import igniteLogo from '../assets/logo.svg'

export function Header() {
    return (
        <div className='h-20 bg-gray600 flex items-center justify-center gap-4 py-5'>
            <img src={igniteLogo} alt="dois triangulos verdes" width={40}/>
            <strong>Ignite feed</strong>
        </div>

    )
}