import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { MdError, MdLightbulb, MdCancel } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export const Icon = {
    success: <IoCheckmarkCircle/>,
    info: <IoIosInformationCircle/>,
    danger: <MdError/>,
    error: <MdCancel/>,
    warn: <IoWarning/>,
    star: <FaStar/>,
    bulb: <MdLightbulb/>
}