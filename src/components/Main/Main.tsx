import { Categories } from "./components/Categories"
import { Products } from "./components/Products";

export const Main = () => {
    return (
        <>
            <div className="w-full py-5">
                <div className="boxed flex flex-col gap-7">
                    <Categories />
                    <Products />

                </div>

            </div>
        </>
    );
}