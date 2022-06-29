import classNames from "classnames"

const className = "font-bold"

const variants = {
  login_register:
    "text-blue-600 font-bold font-family: Consolas text-center mb-2 ",
  Choice_Side: "text-blue-600 font-bold font-family: Consolas text-center",
  nav_bar_text: "text-zinc-200 hover:text-zinc-300 text-center",
  popup:
    "flex justify-center text-gray-900 font-semibold font-family: Consolas",
  info: "text-blue-600 font-medium pt-2 text-center",
  link: "underline underline-offset-1 text-blue-500 font-semibold text-center",
  card_name: "text-amber-500 font-bold text-left",
  card_title: "text-amber-400 font-bold text-left font-mono",
  card_category: "text-zinc-200 text-left",
  card_price: "text-zinc-200 text-left",
  card_rating: "text-zinc-200 text-center",
  detail_name: "text-amber-500 font-bold text-left",
  detail_category: "text-zinc-200 text-left my-2",
  detail_description: "text-zinc-200 text-left mt-5",
  detail_price: "text-zinc-200 text-left",
  detail_rating: "text-zinc-200 text-center",
  profile_text: "text-gray-700",
}

const sizes = {
  sm: "text-xs",
  md: "text-md",
  lg: "text-lg",
  xl: "text-3xl",
}

const Text = (props) => {
  const { variant, size, ...otherProps } = props

  return (
    <h1
      {...otherProps}
      className={classNames(className, variants[variant], sizes[size])}
    />
  )
}

export default Text
