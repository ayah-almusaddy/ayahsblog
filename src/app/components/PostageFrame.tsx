// === src/components/PostageFrame.tsx ===
import { ReactNode } from "react";
import clsx from "clsx";


type Props = { children: ReactNode; className?: string };
export default function PostageFrame({ children, className }: Props) {
    return (
        <div className={clsx("postage", className)}>
            <div className="relative p-6 md:p-8">{children}</div>
        </div>
    );
}