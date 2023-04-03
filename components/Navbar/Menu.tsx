import { BarraMenu } from './components/BarraMenu';

export default function Menu() {
    return (
        <>
            <div className="space-y-2 w-[25%] shadow-lg bg-white hidden lg:block xl:block z-100">
                <BarraMenu />
            </div>
        </>
    )
}