const DashboardLayout = ({children}) => {
    return  <div className="h-screen w-screen relative">
        <aside className="absolute w-44 top-0 left-0 h-full border-r border-black/10">
            Mood
        </aside>
        <div className="ml-44">
            <header className="h-16 border-b border-black/10">
                Hello
            </header>
            <div>
                {children}
            </div>
        </div>
        </div>
}

export default DashboardLayout