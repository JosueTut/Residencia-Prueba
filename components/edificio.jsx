import { Button } from "@headlessui/react";
import Buttonn from "./button";

function Edificio() {

    const handleClick = () => {
        window.open('https://github.com/JosueTut/Residencia-Prueba', '_blank');
    }

    return (
        <div className="w-3/4 text-center my-10 space-y-6 rounded-xl bg-white/5 p-5">
            <Buttonn />
            <Buttonn />
            <Buttonn />
            <Buttonn />

        </div>
    )
}

export default Edificio
