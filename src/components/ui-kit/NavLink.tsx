import React from "react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
}

function NavLink({children, ...props}: NavLinkProps) {
    return (
        <a className="text-[1.2rem] text-[#111111]" {...props}>{children}</a>
    );
}

export default NavLink;