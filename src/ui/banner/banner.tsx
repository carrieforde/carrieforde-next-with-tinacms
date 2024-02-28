type BannerProps = React.PropsWithChildren<{
    variant: 'info' | 'warning' | 'error' | 'success';
}>

export const Banner = ({ children, variant }: BannerProps) => {
    return (
        <div className={`bg-${variant}-100 border-${variant}-400 text-${variant}-700 px-4 py-3 rounded relative`} role="alert">
            <strong className="font-bold">{variant}</strong>
            <span className="block sm:inline">{children}</span>
        </div>
    );
}
