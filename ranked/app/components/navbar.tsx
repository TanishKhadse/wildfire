import Logo from "./logo"
import User from "./user"
import CreateBtn from "./create-btn"

export default function NavigationBar() {
    return (
        <div className="flex items-center justify-center">
            <div className="
                flex
                justify-between
                py-2
                w-[90%]
            ">
                <Logo/>
                <div className="
                    flex
                    row
                    items-center
                    gap-6
                ">
                    <CreateBtn/>
                    <User/>
                </div>
            </div>

        </div>
    );
}