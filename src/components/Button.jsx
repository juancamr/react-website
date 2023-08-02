export default function Button({
  fullWidth,
  blue,
  orange,
  error,
  outline,
  black,
  onClick,
  children,
  type,
  href,
  sm,
  big,
  styles,
}) {
  if (outline) {
    return (
      <button
        type={type}
        onClick={onClick}
        class="mb-0 relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
      >
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {children}
        </span>
      </button>
    );
  } else if (href) {
    return (
      <a
        href={href}
        className={`mb-0 text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2
      ${fullWidth && "w-full"}
      ${blue && "from-blue-400 via-blue-500 to-blue-600"}
      ${black && "from-slate-800 via-slate-900 to-slate-950"}
      ${error && "from-rose-400 via-rose-500 to-rose-600"}
      ${big && "text-3xl"}
      ${sm && "text-sm"}
      ${styles}
      `}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`mb-0 text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2
        ${fullWidth && "w-full"}
        ${blue && "from-blue-400 via-blue-500 to-blue-600"}
        ${black && "from-slate-800 via-slate-900 to-slate-950"}
        ${error && "from-rose-400 via-rose-500 to-rose-600"}
        ${big && "text-3xl"}
        ${sm && "text-sm"}
        ${styles}
      `}
      >
        {children}
      </button>
    );
  }
}
