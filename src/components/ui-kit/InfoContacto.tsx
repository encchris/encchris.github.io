import RedirectIcon from "./icons/RedirectIcon"
import NavLink from "./NavLink"

interface InfoContactoProps {
    leyend: string;
    link: string;
    text: string;
}

export const InfoContacto = ({leyend, link, text}: InfoContactoProps) => {
  return (
    <div className="flex items-center gap-3">
        <span className="text-[1.2rem]"><strong>{leyend}</strong></span>
        <span className="flex items-center gap-1">
            <NavLink className="text-[1rem]" href={link} children={text}/>
            <RedirectIcon />
        </span>
    </div>
  )
}
