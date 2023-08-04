export default function Container({ children, className }) {
  return <div className={` px-4 xl:px-8 2xl:px-20 ${className}`}>{children}</div>;
}
