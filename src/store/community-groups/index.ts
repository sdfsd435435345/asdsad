import create from 'zustand'
import { t } from '@lingui/macro'
import { createTrackedSelector } from 'react-tracked'

type IStore = ReturnType<typeof getStore>
const getSettingDefault = () => [
  {
    id: '1',
    icon: 'community_bird',
    hoverIcon: 'community_bird_hover',
  },
  {
    id: '2',
    icon: 'community_telegram',
    hoverIcon: 'community_telegram_hover',
  },
  {
    id: '3',
    icon: 'community_discord',
    hoverIcon: 'community_discord_hover',
  },
  {
    id: '4',
    icon: 'community_line',
    hoverIcon: 'community_line_hover',
  },
  {
    id: '5',
    icon: 'community_play',
    hoverIcon: 'community_play_hover',
  },
  {
    id: '6',
    icon: 'community_facebook',
    hoverIcon: 'community_facebook_hover',
  },
  {
    id: '7',
    icon: 'community_instagram',
    hoverIcon: 'community_instagram_hover',
  },
  {
    id: '8',
    icon: 'community_reddit',
    hoverIcon: 'community_reddit_hover',
  },
  {
    id: '9',
    icon: 'community_media',
    hoverIcon: 'community_media_hover',
  },
  {
    id: '10',
    icon: 'community_linkedin',
    hoverIcon: 'community_linkedin_hover',
  },
  {
    id: '11',
    icon: 'community_group',
    hoverIcon: 'community_group_hover',
  },
]
function getStore(set, get) {
  return {
    menuList: getSettingDefault(),
  }
}

const baseListStore = create(getStore)
const useListStore = createTrackedSelector(baseListStore)

export { useListStore, baseListStore }
