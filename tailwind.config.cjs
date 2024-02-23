function getColorConfig(key, color) {
  let result = {}
  // 如果是数组说明是色板，需要格式出每个色版值
  if (Array.isArray(color)) {
    color.forEach(v => {
      result[`${key}_${v}`] = `var(--${key.replace(/_/g, '-')}-${v})`
    })
  } else {
    result[key] = `var(--${key})`
  }
  return result
}

/**
 * 初始化颜色配置
 * brand_color -> var(--brand_color) // 业务场景值
 * or: [1, 2] -> var(--or_1) / var(--or_2) // 色板
 * @param {*} config
 * @returns
 */
function normalizeColor(config) {
  let result = {}
  Object.keys(config).forEach(key => {
    const color = config[key]
    result = {
      ...result,
      ...getColorConfig(key, color),
    }
  })
  return result
}

module.exports = {
  content: [`./**/*.tsx`],
  media: false, // or 'media' or 'class'
  mode: 'jit',
  corePlugins: {
    preflight: false,
  },
  safelist: ['text-sell_down_color', 'text-buy_up_color'],
  theme: {
    extend: {
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' },
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
        'phone': { raw: '(max-width: 768px)' },
        'desktop': { raw: '(min-width: 1024px)' },
        'tablet': { raw: '(max-width: 1023px)' },
      },
      zIndex: {
        '-10': -10,
        '-1': -1,
        '0': 0,
        '1': 1,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
        'auto': 'auto',
      },
      colors: {
        ...normalizeColor({
          or: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
          rd: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
          gr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
          nc: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],

          /* 品牌色 - 重点元素/按钮/文字等 */
          brand_color: 'brand_color',
          brand_color_hover: 'brand_color_hover',
          /** 点击色 */
          brand_color_animate: 'brand_color_animate' /* 辅助色 */,
          brand_color_special: 'brand_color_special',
          brand_color_special_02: 'brand_color_special_02',
          brand_color_disable: 'brand_color_disable',
          brand_color_disabletext: 'brand_color_disabletext',
          brand_color_light_bg: 'brand_color_light_bg',

          /* 辅助色-K 线/涨跌色/提示文字等 */
          sell_down_color: 'sell_down_color',
          sell_down_color_hover: 'sell_down_color_hover',
          sell_down_color_animate: 'sell_down_color_animate',
          sell_down_color_disable: 'sell_down_color_disable',
          sell_down_color_special: 'sell_down_color_special',
          sell_down_color_special_02: 'sell_down_color_special_02',
          sell_down_color_special_03: 'sell_down_color_special_03',
          sell_down_color_light_bg: 'sell_down_color_light_bg',

          /* 辅助色-K 线/涨跌色/提示文字等 */
          buy_up_color: 'buy_up_color',
          buy_up_color_hover: 'buy_up_color_hover',
          buy_up_color_animate: 'buy_up_color_animate',
          buy_up_color_disable: 'buy_up_color_disable',
          buy_up_color_special: 'buy_up_color_special',
          buy_up_color_special_02: 'buy_up_color_special_02',
          buy_up_color_special_03: 'buy_up_color_special_03',
          buy_up_color_light_bg: 'buy_up_color_light_bg',

          /* 线条 Line */
          line_color_03: 'line_color_03',
          line_color_02: 'line_color_02',
          line_color_01: 'line_color_01',

          /* 填充 Icon */
          icon_color: 'icon_color',

          /* 文字 Text */
          text_color_01: 'text_color_01',
          text_color_02: 'text_color_02',
          text_color_03: 'text_color_03',
          text_color_04: 'text_color_04',
          text_color_05: 'text_color_05',

          /* 层级用色 Hierarchy */
          card_bg_color_02: 'card_bg_color_02',
          bg_sr_color: 'bg_sr_color',
          card_bg_color_01: 'card_bg_color_01',
          bg_color: 'bg_color',
          bg_color_01: 'bg_color_01',
          bg_color_02: 'bg_color_02',
          bg_color_03: 'bg_color_03',

          bg_button_disabled: 'bg_button_disabled',
          card_bg_color_03: 'card_bg_color_03',
          card_bg_color_04: 'card_bg_color_04',

          /* 提示 Tips */
          tips_color: 'tips_color',
          tips_color_hover: 'tips_color_hover',
          tips_color_animate: 'tips_color_animate',
          tips_color_disable: 'tips_color_disable',
          tips_color_special: 'tips_color_special',
          tips_color_lightbg: 'tips_color_lightbg',
          tips_warning_bg_color: 'tips_warning_bg_color',

          /* 警告 Warning */
          warning_color: 'warning_color',
          warning_color_hover: 'warning_color_hover',
          warning_color_animate: 'warning_color_animate',
          warning_color_disable: 'warning_color_disable',
          warning_color_special: 'warning_color_special',
          warning_color_lightbg: 'warning_color_lightbg',

          /* 成功 Success */
          success_color: 'success_color',
          success_color_hover: 'success_color_hover',
          success_color_animate: 'success_color_animate',
          success_color_disable: 'success_color_disable',
          success_color_special: 'success_color_special',
          success_color_special_02: 'success_color_special_02',
          success_color_lightbg: 'success_color_lightbg',

          /** 按钮 */
          button_text_01: 'button_text_01',
          button_text_02: 'button_text_02',
          button_hover_01: 'button_hover_01',

          toast_bg_color: 'toast_bg_color',
        }),
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/line-clamp')],
  },
}
