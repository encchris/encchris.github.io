import React from "react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    showCurriculum?: boolean;
    setShowCurriculum?: (show: boolean) => void;
}

function NavLink({children, setShowCurriculum, ...props}: NavLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        if (props.href === '#curriculum') {
            // Si hace clic en Curriculum, mostrarlo
            setShowCurriculum?.(true);
        } else {
            // Si hace clic en otra sección, ocultar Curriculum
            setShowCurriculum?.(false);
            
            // Después de ocultar, hacer scroll a la sección
            setTimeout(() => {
                const element = document.querySelector(props.href || '');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <a 
            className="text-[1.2rem] text-[#111111] hover:text-blue-600 transition cursor-pointer" 
            onClick={handleClick}
            {...props}
        >
            {children}
        </a>
    );
}

export default NavLink;