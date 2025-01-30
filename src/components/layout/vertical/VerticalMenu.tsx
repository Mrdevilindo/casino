// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: { scrollMenu: (container: any, isPerfectScrollbar: boolean) => void }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  // Menu Labels
  const MENU_LABELS = {
    dashboard: 'Dashboard',
    gameCenter: 'Game Center',
    sportsBetting: 'Taruhan Olahraga',
    promotionsAndBonuses: 'Promosi & Bonus',
    transactions: 'Transaksi',
    account: 'Akun',
    help: 'Bantuan',
    adminPanel: 'Admin Panel',
    userManagement: 'Manajemen Pengguna',
    financialReport: 'Laporan Keuangan',
    gameManagement: 'Manajemen Permainan',
    slot: 'Slot',
    poker: 'Poker',
    blackjack: 'Blackjack',
    roulette: 'Roulette',
    liveCasino: 'Live Casino',
    schedule: 'Jadwal Pertandingan',
    history: 'Riwayat Taruhan',
    statistics: 'Statistik Tim',
    offers: 'Penawaran Bonus',
    cashback: 'Cashback',
    loyalty: 'Loyalty Points',
    deposit: 'Top Up Saldo',
    withdraw: 'Tarik Dana',
    transactionHistory: 'Riwayat Transaksi',
    profile: 'Profil Pengguna',
    security: 'Keamanan Akun',
    activity: 'Log Aktivitas',
    faq: 'FAQ',
    support: 'Hubungi Support',
    guide: 'Panduan Bermain'
  } as const

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >
        <SubMenu label={MENU_LABELS.dashboard} icon={<i className='ri-dashboard-line' />}>
          <MenuItem href='/dashboard/summary'>Ringkasan Saldo</MenuItem>
          <MenuItem href='/dashboard/statistics'>Statistik Taruhan</MenuItem>
          <MenuItem href='/dashboard/announcements'>Pengumuman dan Promosi</MenuItem>
        </SubMenu>

        <MenuSection label={MENU_LABELS.gameCenter}>
          <MenuItem href='/games/slot' icon={<i className='ri-gamepad-line' />}>
            {MENU_LABELS.slot}
          </MenuItem>
          <MenuItem href='/games/poker' icon={<i className='ri-hearts-line' />}>
            {MENU_LABELS.poker}
          </MenuItem>
          <MenuItem href='/games/blackjack' icon={<i className='ri-id-card-line' />}>
            {MENU_LABELS.blackjack}
          </MenuItem>
          <MenuItem href='/games/roulette' icon={<i className='ri-record-circle-line' />}>
            {MENU_LABELS.roulette}
          </MenuItem>
          <MenuItem href='/games/live-casino' icon={<i className='ri-live-line' />}>
            {MENU_LABELS.liveCasino}
          </MenuItem>
        </MenuSection>

        <MenuSection label={MENU_LABELS.sportsBetting}>
          <MenuItem href='/sports/schedule' icon={<i className='ri-calendar-event-line' />}>
            {MENU_LABELS.schedule}
          </MenuItem>
          <MenuItem href='/sports/history' icon={<i className='ri-history-line' />}>
            {MENU_LABELS.history}
          </MenuItem>
          <MenuItem href='/sports/statistics' icon={<i className='ri-bar-chart-line' />}>
            {MENU_LABELS.statistics}
          </MenuItem>
        </MenuSection>

        <MenuSection label={MENU_LABELS.promotionsAndBonuses}>
          <MenuItem href='/promotions/offers' icon={<i className='ri-gift-line' />}>
            {MENU_LABELS.offers}
          </MenuItem>
          <MenuItem href='/promotions/cashback' icon={<i className='ri-refund-2-line' />}>
            {MENU_LABELS.cashback}
          </MenuItem>
          <MenuItem href='/promotions/loyalty' icon={<i className='ri-vip-crown-line' />}>
            {MENU_LABELS.loyalty}
          </MenuItem>
        </MenuSection>

        <MenuSection label={MENU_LABELS.transactions}>
          <MenuItem href='/wallet/deposit' icon={<i className='ri-money-dollar-circle-line' />}>
            {MENU_LABELS.deposit}
          </MenuItem>
          <MenuItem href='/wallet/withdraw' icon={<i className='ri-bank-card-line' />}>
            {MENU_LABELS.withdraw}
          </MenuItem>
          <MenuItem href='/wallet/history' icon={<i className='ri-file-list-3-line' />}>
            {MENU_LABELS.transactionHistory}
          </MenuItem>
        </MenuSection>

        <MenuSection label={MENU_LABELS.account}>
          <MenuItem href='/account/profile' icon={<i className='ri-user-settings-line' />}>
            {MENU_LABELS.profile}
          </MenuItem>
          <MenuItem href='/account/security' icon={<i className='ri-shield-keyhole-line' />}>
            {MENU_LABELS.security}
          </MenuItem>
          <MenuItem href='/account/activity' icon={<i className='ri-time-line' />}>
            {MENU_LABELS.activity}
          </MenuItem>
        </MenuSection>

        <MenuSection label={MENU_LABELS.help}>
          <MenuItem href='/help/faq' icon={<i className='ri-questionnaire-line' />}>
            {MENU_LABELS.faq}
          </MenuItem>
          <MenuItem href='/help/support' icon={<i className='ri-customer-service-2-line' />}>
            {MENU_LABELS.support}
          </MenuItem>
          <MenuItem href='/help/guide' icon={<i className='ri-book-open-line' />}>
            {MENU_LABELS.guide}
          </MenuItem>
        </MenuSection>

        <MenuSection label={MENU_LABELS.adminPanel}>
          <MenuItem href='/admin/users' icon={<i className='ri-user-star-line' />}>
            {MENU_LABELS.userManagement}
          </MenuItem>
          <MenuItem href='/admin/finance' icon={<i className='ri-funds-line' />}>
            {MENU_LABELS.financialReport}
          </MenuItem>
          <MenuItem href='/admin/games' icon={<i className='ri-game-line' />}>
            {MENU_LABELS.gameManagement}
          </MenuItem>
        </MenuSection>
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
