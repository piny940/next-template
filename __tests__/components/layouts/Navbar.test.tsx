import { render, waitFor } from '@testing-library/react'
import { expect } from '@jest/globals'
import { Navbar } from '@/layouts/Navbar'
import { TestID } from '@/resources/TestID'

describe('<Navbar />', () => {
  it('Navbarを正常に表示できる', async () => {
    const { getByTestId } = render(<Navbar />)

    await waitFor(() => {
      expect(getByTestId(TestID.NAVBAR)).toBeTruthy()
    })
  })
})
