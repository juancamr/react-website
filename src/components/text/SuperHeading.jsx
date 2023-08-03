export default function SuperHeading({children, className}) {
    return (
        <h1 className={`${className} text-4xl md:text-6xl 2xl:text-8xl font-bold uppercase `}>
            {children}
        </h1>
    )
}