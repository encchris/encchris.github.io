type NavLinkProps = {
    href: string; 
    children: string;
}

function NavLink({href, children}: NavLinkProps) {
    return (
        <li><a className="text-[1.2rem] text-[#111111]" href={href}>{children}</a></li>
    );
}

export default NavLink;