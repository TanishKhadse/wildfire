import Logo from "./logo"
import User from "./user"

export default function NavigationBar() {
    return (
        <div>
            <div className="
                flex
                justify-between
                py-2
            ">
                <Logo/>
                <User/>
            </div>

        </div>
    );
}