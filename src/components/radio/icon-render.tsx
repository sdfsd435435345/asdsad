import { CheckboxProps } from 'react-vant'
import classNames from 'classnames'
import Icon from '../icon'

type IIconOption = {
  name: string
  hasTheme?: boolean
}
function formatIconOption(option: string | IIconOption) {
  if (typeof option === 'string') {
    return {
      name: option,
      hasTheme: false,
    } as IIconOption
  }
  return option
}
export function createIconRender(
  icons: {
    active: string | IIconOption
    inactive: string | IIconOption
    disabled?: string | IIconOption
  },
  className = 'text-sm'
) {
  const active = formatIconOption(icons.active)
  const inactive = formatIconOption(icons.inactive)
  const disabled = formatIconOption(icons.disabled || icons.inactive)

  return ({ checked, disabled: checkboxIsDisabled }: Parameters<Required<CheckboxProps>['iconRender']>[0]) => {
    if (checkboxIsDisabled && icons.disabled) {
      return <Icon className={className} name={disabled.name} hasTheme={disabled.hasTheme} />
    }
    if (checked) {
      return <Icon className={className} name={active.name} hasTheme={active.hasTheme} />
    }
    return <Icon className={classNames(className)} name={inactive.name} hasTheme={inactive.hasTheme} />
  }
}

export function createRadioIconRender(className?: string) {
  return createIconRender(
    {
      active: 'icon_radio-checked',
      inactive: {
        name: 'login_agreement_unselected',
        hasTheme: false,
      },
    },
    className
  )
}
export const DefaultRadioIconRender = createIconRender(
  {
    active: 'login_agreement_selected',
    inactive: {
      name: 'assets_agreement_unselected',
      hasTheme: true,
    },
  },
  'text-xs'
)
export function createCheckboxIconRender(className?: string) {
  return createIconRender(
    {
      active: 'login_verify_selected',
      inactive: {
        name: 'login_verify_unselected',
        hasTheme: true,
      },
      disabled: {
        name: 'login_verify_unselected_disabied',
        hasTheme: true,
      },
    },
    className
  )
}

export const defaultCheckboxIconRender = createCheckboxIconRender('text-sm')

export const futureReduceCheckboxIconRender = createIconRender(
  {
    active: 'contract_reduce_position_hover',
    inactive: {
      name: 'contract_reduce_position',
      hasTheme: true,
    },
  },
  'text-xs'
)
export const futureStopLimitCheckboxIconRender = createIconRender(
  {
    active: 'contract_take_profit_hover',
    inactive: {
      name: 'contract_take_profit',
      hasTheme: true,
    },
  },
  'text-xs'
)
export const futureAutoAddMarginCheckboxIconRender = createIconRender({
  active: 'login_verify_selected',
  inactive: {
    name: 'login_verify_unselected',
    hasTheme: true,
  },
})

export const optionRadioIconRender = createIconRender(
  {
    active: 'icon_options_selected',
    inactive: {
      name: 'assets_agreement_unselected',
      hasTheme: true,
    },
  },
  'text-sm'
)
