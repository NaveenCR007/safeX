import { Input } from "./input";
import { Button } from "./button";
import LordIcon from "./Lordicon";
import { useEffect, useState } from "react";
import { toast } from "sonner"

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false)
    type PasswordEntry = {
        url: string;
        name: string;
        pass: string;
    };

    const [password, setPassword] = useState<PasswordEntry>({ url: "", name: "", pass: "" });
    const [passList, setPassList] = useState<PasswordEntry[]>([]);
    const [loading, setLoading] = useState(true)
    const [editStatus, setEditStatus] = useState(false)


    //prev = current value of "showPassword", prev is just a prop
    const EyeToggle = () => {
        return (
            <span className="absolute cursor-pointer right-3 top-2" onClick={() => { setShowPassword(prev => !prev) }}>
                <img width={"20px"} src={showPassword ? "/eye.png" : "/eyecross.png"} alt="" />
            </span>
        )
    }

    const addPass = () => {
        if (password.name === "" || password.pass === "" || password.url === "") return
        setPassList([...passList, password]);
        setPassword({ url: "", name: "", pass: "" }); // reset input fields

        if (!editStatus) {
            toast.success("Password has been saved.");
        } else {
            toast.success("Password has been updated.");
            setEditStatus(false)
        }

        console.log([...passList, password])
    }
    
    const handleDelete = (idx: number) => {
        let updatedPass = passList.filter((_, index) => (index !== idx))
        toast.error("Password has been deleted.")
        setPassList(updatedPass)
    }

    const handleEdit = (idx: number) => {
        let editPass = passList.find((_, index) => (index === idx))
        if (editPass) {
            setPassword(editPass)
        }
        setPassList(passList.filter((_, index) => (index !== idx))) // this will prevent saving same password again
    }

    const copyText = (link: string) => {
        navigator.clipboard.writeText(link)
        toast.success("Copied to clipboard")
    }

    // saving it to local storage
    useEffect(() => {
        // it might return null so typescript won't allow us to store unless we use "[]"
        let info = JSON.parse(localStorage.getItem("Info") || "[]")
        setPassList(info) // load it to the current useState
        setLoading(false) // info is retrieved
    }, [])

    // To add new passwords correctly, it only runs when new password is added to passList
    useEffect(() => {
        if (!loading) {
            localStorage.setItem("Info", JSON.stringify(passList))
        }
    }, [passList])

    return (
        <div>
            <div className="input min-h-50 text-black rounded-2xl justify-center mt-3 flex flex-col max-w-[90%] m-auto space-y-8">
                <div>
                    <h1 className="scroll-m-20 text-green-500 text-center text-4xl font-extrabold tracking-tight text-balance">
                        Enter Your Password
                    </h1>
                </div>

                <div className="space-y-2">
                    <div className="website">
                        <Input
                            type="text"
                            className="max-w-sm sm:max-w-3xl m-auto"
                            placeholder="Enter Website URL"
                            value={password.url}
                            onChange={(e) => setPassword((prev) => ({
                                ...prev,
                                url: e.target.value
                            }))}
                        />
                    </div>
                    <div className="user flex flex-col sm:flex-row justify-center items-center gap-1 m-3 sm:m-0">
                        <Input
                            type="text"
                            className="max-w-sm"
                            placeholder="Enter Username"
                            value={password.name}
                            onChange={(e) =>
                                setPassword((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                        />
                        <div className="flex w-full max-w-sm items-center gap-1">
                            <div className="relative w-full">
                                <Input type={showPassword ? "text" : "password"} placeholder="Enter Password" value={password.pass} onChange={(e) =>
                                    setPassword((prev) => ({
                                        ...prev,
                                        pass: e.target.value,
                                    }))
                                } />
                                <EyeToggle />
                            </div>
                            <Button
                                className="cursor-pointer text-md text-black"
                                type="submit"
                                variant="default"
                                onClick={() => addPass()}
                            >
                                <LordIcon src="https://cdn.lordicon.com/efxgwrkc.json"
                                    trigger="hover" style={{ width: "25px", height: "25px" }}>
                                </LordIcon>
                                Save
                            </Button>
                        </div>
                    </div>
                </div>

                {/* table of passwords */}
                <div className="w-full text-3xl font-bold p-1 m-0">Your Passwords</div>
                {passList.length === 0 ? (
                    <div className="bg-[url('/nothing.webp')] bg-no-repeat bg-contain bg-center h-54 w-full"></div>
                ) : (
                    <div className="overflow-y-auto w-full h-40">
                        <table className="table-auto w-full m-auto text-sm sm:text-base">
                            <thead className="bg-green-700 h-8 text-white">
                                <tr>
                                    <th>Website URL</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Tools</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passList.map((info, idx) => {
                                    return (<tr key={idx} className="border border-b odd:bg-gray-200 h-10">
                                        <td className="flex justify-center items-center gap-1 text-center break-all p-1.5">{info.url}
                                            <span className="copy cursor-pointer" onClick={() => copyText(info.url)}><LordIcon src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" className="p-1.5 w-[18px] h-[18px] sm:w-[25px] sm:h-[25px]">
                                            </LordIcon></span>
                                        </td>
                                        <td className="text-center break-all">{info.name}</td>
                                        <td className="text-center break-all">{info.pass}</td>
                                        <td><div className="space-x-1 flex items-center justify-center p-1">
                                            <span className="edit cursor-pointer" onClick={() => { handleEdit(idx); setEditStatus(true); }}><LordIcon src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover" className="w-[18px] h-[18px] sm:w-[25px] sm:h-[25px]">
                                            </LordIcon></span>
                                            <span className="delete cursor-pointer" onClick={() => handleDelete(idx)}><LordIcon src="https://cdn.lordicon.com/xyfswyxf.json"
                                                trigger="hover" className="w-[18px] h-[18px] sm:w-[25px] sm:h-[25px]">
                                            </LordIcon></span>
                                        </div></td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Manager;