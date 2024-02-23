import { t } from '@lingui/macro'
import { useRequest } from 'ahooks'
import produce from 'immer'
import { useState } from 'react'
import { Button, Checkbox } from 'react-vant'
import classNames from 'classnames'
import { useHelpCenterUrl } from '@/hooks/use-help-center-url'
import { FutureHelpCenterEnum } from '@/constants/future/future-const'
import Icon from '../icon'
import Link from '../link'
import { createRadioIconRender } from '../radio/icon-render'
import styles from './index.module.css'
import { IQuestionProps, QUestion } from './question'

export type IQuestionnaireProps = {
  desc: string
  onOk: () => void
  questions: IQuestionProps['question'][]
}

function Questionnaire({ onOk, questions = [], desc }: IQuestionnaireProps) {
  const [agreed, setAgreed] = useState(false)
  const [answers, setAnswers] = useState<number[]>([])
  const onAnswerChange = (index: number, optionIndex: number) => {
    setAnswers(
      produce(answers, draft => {
        draft[index] = optionIndex
      })
    )
  }
  const hasWrongAnswer = questions.some((question, index) => answers[index] !== question.answer)
  const [inCheck, setInCheck] = useState(false)
  const { run: onConfirm, loading } = useRequest(
    async () => {
      setInCheck(true)
      if (hasWrongAnswer) {
        return
      }
      onOk()
    },
    {
      manual: true,
    }
  )
  const agreementUrl = useHelpCenterUrl(FutureHelpCenterEnum.futureAgreement)
  const riskUrl = useHelpCenterUrl(FutureHelpCenterEnum.futureRisk)

  return (
    <div className="overflow-auto">
      <div className={styles['questionnaire-wrapper']}>
        <div className="info">
          <Icon name="msg" className="mr-1" />
          <span>{desc}</span>
        </div>
      </div>
      <div className="questions mt-8">
        {questions.map((question, index) => {
          return <QUestion key={index} onChange={onAnswerChange} inCheck={inCheck} question={question} index={index} />
        })}
      </div>
      {hasWrongAnswer && inCheck && (
        <div className="text-warning_color text-xs px-4 mt-1">
          <p>{t`components_questionnaire_index_5101384`}</p>
        </div>
      )}
      <div className="px-4 text-xs mb-4 mt-2">
        <Checkbox
          checked={agreed}
          className="text-xs"
          onChange={setAgreed}
          iconRender={createRadioIconRender(classNames('text-xs', { 'text-brand_color': agreed }))}
        >
          <span>
            {t`components/questionnaire/index-0`}{' '}
            <Link target href={agreementUrl} className="text-brand_color">{t`components/questionnaire/index-1`}</Link>
            {t`components/questionnaire/index-2`}{' '}
            <Link target href={riskUrl} className="text-brand_color">{t`components/questionnaire/index-3`}</Link>
          </span>
        </Checkbox>
      </div>
      <div className="text-center px-4 pb-10">
        <Button
          loading={loading}
          onClick={onConfirm}
          className="w-full"
          type="primary"
          disabled={!agreed}
        >{t`components/questionnaire/index-4`}</Button>
      </div>
    </div>
  )
}
export default Questionnaire
