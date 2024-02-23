const useSetting = () => {
  const cssColorObj = handleobj => {
    const { valueTittle } = handleobj
    return {
      color: `var(--${valueTittle}-05)`,
      color_hover: `var(--${valueTittle}-06)`,
      color_animate: `var(--${valueTittle}-04)`,
      color_disable: `var(--${valueTittle}-08)`,
      color_special: `var(--${valueTittle}-07)`,
      color_lightbg: `var(--${valueTittle}-10)`,
      color_special_02: `var(--${valueTittle}-11)`,
      color_special_03: `var(--${valueTittle}-12)`,
    }
  }

  return { cssColorObj }
}

export { useSetting }
