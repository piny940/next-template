import {
  ProfileButton,
  ProfileButtonProps,
} from '@/components/Navbar/ProfileButton'
import { TestID } from '@/resources/TestID'
import { expect } from '@jest/globals'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import { Mock } from 'ts-mockery'

describe('<ProfileButton />', () => {
  it('正常に描画される', async () => {
    const onClick = jest.fn()
    const props = Mock.from<ProfileButtonProps>({
      onClick: onClick,
    })

    const { getByTestId } = render(<ProfileButton {...props} />)

    await waitFor(() => {
      expect(getByTestId(TestID.PROFILE_BUTTON)).toBeTruthy()
      expect(onClick).not.toBeCalled()
    })

    act(() => {
      fireEvent.click(getByTestId(TestID.PROFILE_BUTTON))
    })
    await waitFor(() => {
      expect(onClick).toBeCalledTimes(1)
    })
  })
})
