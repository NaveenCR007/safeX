import LordIcon from "./ui/Lordicon"

const Footer = () => {
    return (
        <div className="bg-slate-800 w-full h-13 fixed bottom-0">
            <div className="flex justify-center items-center">
                <p className="sm:py-3 text-center text-md text-white font-semibold">
                    © 2025 Safe<b className="text-green-500">X</b>. Built with React, Tailwind, and caffeine
                </p>
                <span className="p-1 break-all">
                    <LordIcon src="https://cdn.lordicon.com/elcmkycs.json"
                        trigger="loop" style={{ width: "25px", height: "25px" }}
                        colors="primary:#ffffff,secondary:#ffc738,tertiary:#f24c00">
                    </LordIcon>
                </span>
            </div>
        </div >
    )
}

export default Footer
