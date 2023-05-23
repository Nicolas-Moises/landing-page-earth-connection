interface AvatarProps {
    img: string
}

export function Avatar({ img }: AvatarProps) {
    return (
        <img src={img} className="w-10 h-10 " />
    )
}