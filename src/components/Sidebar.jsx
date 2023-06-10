
export default function Sidebar() {
    return (
        <aside className="bg-gray600 rounded-lg overflow-hidden w-64">
            <img
                className="w-full h-[72px] object-cover"
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
                alt=""
            />

            <div className="flex flex-col items-center mt-[-2rem]">
                <img
                    className="w-calcimage h-calcimage rounded-lg border-[4px] border-gray600 shadow-outline-green"
                    src="https://github.com/weslleyolli.png" alt=""
                />

                <strong>Weslley Oliveira</strong>
                <span>Web Developer</span>
            </div>

            <footer className="border-t-[1px] border-gray500 mt-6 pt-6 px-8 pb-8">
                <a
                    className="bg-transparent text-green100 border border-green500 rounded-lg h-[50px] py-0 px-6 font-bold block flex items-center justify-center"
                    href="#"
                >
                    Edit your profile
                </a>
            </footer>
        </aside>
    )
}