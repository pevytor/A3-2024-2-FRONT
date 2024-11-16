import { Button } from "../ui/Button";

export const Header = () => {
    return (
        <div className="w-full bg-zinc-700">
            <div className="boxed flex justify-between items-center h-52">
                <div className="flex">
                    <div className="h-24 w-24 bg-white rounded-lg">
                        <img src="" alt="foto" />
                    </div>
                    <div></div>
                </div>
                <div className="w-36">
                    <Button
                        label="Meus pedidos"
                        size="medium"
                    />
                </div>
            </div>
        </div>
    );
}