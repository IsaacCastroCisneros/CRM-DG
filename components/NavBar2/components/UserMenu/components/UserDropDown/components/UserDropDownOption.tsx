import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface props
{
  label:string;
  icon:IconProp;
  path?:string;
  isLink?:boolean;
  onClick?:()=>void
}

export default function UserDropDownOption(props:props)
{
  const
  {
    label,
    icon,
    path='/',
    isLink=true,
    onClick
  }=props

  const myStyles = "flex gap-[.5rem] py-[.5rem] items-center px-[1.5rem] hover:text-[#000] hover:bg-[#f4f6fb] transition-all duration-200"

  return (
    <li>
      {isLink && (
        <Link
          href={path}
          className={myStyles}
        >
          <UserDropDownContent icon={icon} label={label} />
        </Link>
      )}
      {!isLink && (
        <button
          className={myStyles} 
          onClick={onClick}
        >
          <UserDropDownContent icon={icon} label={label} />
        </button>
      )}
    </li>
  );
}

function UserDropDownContent({icon, label}:{icon:IconProp,label:string}) 
{
  return (
    <>
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </>
  );
}