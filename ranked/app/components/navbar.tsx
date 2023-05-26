import Logo from "./logo"
import User from "./user"
import Create from "./create"

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
                    <Create/>
                    <User/>
                </div>
            </div>

        </div>
    );
}