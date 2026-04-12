import iconsSprite from '../../assets/images/sprite.svg';

type IconProps = {
    width?:string,
    height?:string,
    iconId: string
}

export const Icon = ({width, height, iconId}:IconProps) => {
    return (
        <svg width={width || "30"} height={height || "30"}>
            <use xlinkHref={`${iconsSprite}#${iconId}`} />
        </svg>
    );
};