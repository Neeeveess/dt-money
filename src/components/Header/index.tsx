import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImg from '../../assets/images/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Novo Lançamento</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
