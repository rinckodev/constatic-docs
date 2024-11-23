import { IconType } from "react-icons";
import * as ti from "react-icons/ti";
import * as bs from "react-icons/bs";
import * as fa from "react-icons/fa";
import * as hi from "react-icons/hi";
import * as hi2 from "react-icons/hi2";
import * as ri from "react-icons/ri";
import * as io from "react-icons/io";
import * as io5 from "react-icons/io5";
import * as md from "react-icons/md";
import * as tb from "react-icons/tb";
import * as bi from "react-icons/bi";
import * as si from "react-icons/si";
import * as pi from "react-icons/pi";
import { DiscloudWhite } from "./public/svgs/icons/DiscloudWhite";

const LocalIcons = {
    DiscloudWhite
}
const icons: Record<string, IconType> = {};
const defaults = {
    success: io5.IoCheckmarkCircle,
    info: io.IoIosInformationCircle,
    danger: md.MdError,
    error: md.MdCancel,
    warn: io5.IoWarning,
    star: fa.FaStar,
    bulb: md.MdLightbulb   
}
Object.assign(
    icons, defaults, ti, bs, 
    fa, hi, hi2, ri, io, io5, md, tb, bi, 
    si, pi, 
    LocalIcons,
);

export default icons;

