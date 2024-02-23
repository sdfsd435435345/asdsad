import classNames from 'classnames'
import { useState } from 'react'
import { Checkbox, Radio } from 'react-vant'
import Icon from '../icon'
import { createRadioIconRender } from '../radio/icon-render'
import styles from './index.module.css'

export type IQuestionProps = {
  question: {
    title: string
    options: string[]
    answer?: number
  }
  index: number
  onChange?: (index: number, optionIndex: number) => void
  inCheck?: boolean
}
/** 问题选项 */
export function QUestion({ onChange, question, inCheck, index }: IQuestionProps) {
  // 标题 选项 点击选中
  const [selected, setSelected] = useState(-1)
  const onClick = (optionIndex: number) => {
    setSelected(optionIndex)
    onChange?.(index, optionIndex)
  }
  return (
    <div
      className={classNames(styles['question-wrapper'], {
        'un-selected': inCheck && selected === -1,
      })}
    >
      <div className="title">
        {index + 1}.{question.title}
      </div>
      <div className="options">
        {question.options.map((option, optionIndex) => {
          const isSelected = selected === optionIndex
          const isCorrect = inCheck && question.answer === optionIndex
          const isWrong = inCheck && isSelected && !isCorrect
          return (
            <div
              className={classNames('option-item', {
                selected: isSelected,
                wrong: isWrong,
                correct: isCorrect,
              })}
              key={optionIndex}
              onClick={() => {
                onClick(optionIndex)
              }}
            >
              <div className="flex items-center">
                <Checkbox
                  checked={isSelected}
                  className="text-xs"
                  iconRender={createRadioIconRender(
                    classNames('text-xs', {
                      'text-brand_color': !inCheck,
                      'text-success_color': isCorrect,
                      'text-warning_color': isWrong,
                    })
                  )}
                />
                <div className="option-content">{option}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
