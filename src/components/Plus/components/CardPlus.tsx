import { ReactElement, useEffect } from "react";
import { GridPattern } from "../../GridPattern";

export interface PlusProps {
    id: string;
    title: string;
    content: string;
    icon: ReactElement
}

const number = Math.round(Math.random()) * 4

export function CardPlus({ title, id, icon, content }: PlusProps) {

    const hoverCard = () => {
        const grid = document.getElementById("cards")
        if (grid) {
            grid.onmousemove = (e) => {
                for (const card of document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>) {
                    if(card != null) {
                        const rect = card.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top;

                        card.style.setProperty("--mouse-x", `${x}px`);
                        card.style.setProperty("--mouse-y", `${y}px`);
                };
                    }
            }
        }
    }
    useEffect(() => {
        hoverCard()
    }, [])

    return (
        <div className="card group">
            <div className="card-content overflow-hidden flex flex-col justify-between items-start group">
                <GridPattern
                    width={72}
                    height={56}
                    x="-12"
                    y="4"
                    squares={[
                        [number, 4],
                        [2, number - 1],
                        [6, 2],
                        [5, 1],
                    ]}
                    className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-20deg] mix-blend-overlay fill-zinc-950/50
                                        stroke-white/40"
                />
                <div className="p-1 rounded-full border border-zinc-600/70 text-zinc-500 inline-flex items-center justify-center group-hover:border-violet-300 
                group-hover:text-violet-300 transition-colors duration-300">
                    {icon}
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-base font-semibold text-zinc-200">{title}</h2>
                    <p className="text-sm text-zinc-400">{content}</p>
                </div>
            </div>
        </div>
    )
}