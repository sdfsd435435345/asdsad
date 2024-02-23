import { IBestAdItem, IC2cPayment, ITradeAdItem, ITradeAreaItem } from '@/typings/api/c2c/trade'

export function mockUserPayments() {
  const userPayments: IC2cPayment[] = [
    {
      name: '支付宝',
      type: 'ALIPAY',
      accounts: [
        {
          account: '123456789',
          paymentId: '1',
          qrcode: 'http://sdf.png',
          enabled: true,
        },
        {
          account: '123456789222',
          qrcode: 'http://sdf.png',
          paymentId: '1',
          enabled: true,
        },
      ],
    },
    {
      name: '银行卡',
      type: 'BANK',
      accounts: [
        {
          account: '12345*****6789',
          name: '北京银行',
          paymentId: '1',
          enabled: true,
        },
      ],
    },
    {
      name: '微信支付',
      type: 'WECHAT',
      accounts: [
        {
          account: '12345*****6789',
          name: '北京银行',
          enabled: false,
          paymentId: '1',
        },
      ],
    },
    {
      name: '微信支付 2',
      type: '4',
      accounts: [],
    },
  ]

  return userPayments
}

export function mockBestAds() {
  const ads: IBestAdItem[] = [
    {
      advertId: 1,
      paymentId: '1',
      paymentType: 'WECHAT',
      paymentAccount: '123456789',
      accounts: [],
      price: 3,
    },
    {
      advertId: 4,
      paymentId: '2',
      paymentType: 'BANK',
      paymentAccount: '123456789',
      price: 4.5,
      accounts: [],
    },
  ]
  return ads
}
