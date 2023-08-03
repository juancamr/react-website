export default function Paragraph({children, className}) {
  return (
    <p className={`${className} text-xl lg:text-2xl leading-6`}>
        {children}
    </p>

  );
}
