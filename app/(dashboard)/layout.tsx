import { UserButton } from "@clerk/nextjs"

const DashboardLayout = ({children}) => {
    return  <div className="h-screen w-screen relative">
        <aside className="absolute w-44 top-0 left-0 h-full border-r border-black/10">
            Mood
        </aside>
        <div className="ml-44 h-full">
            <header className="h-16 border-b border-black/10">
                <div className="h-full w-full px-6 flex items-center justify-end">
                    <UserButton />
                </div>
            </header>
            <div className="h-full">
                {children}
            </div>
        </div>
        </div>
}

export default DashboardLayout