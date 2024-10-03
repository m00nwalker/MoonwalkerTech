import Banner from '.'
import { render } from '@testing-library/react'

describe('Banner Component', () => {
  it('should render BannerContent component', () => {
    const { getByText } = render(<Banner />)
    const headingElement = getByText(/Future-Proof/i)
    const subheadingElement = getByText(/ Websites/i)
    expect(headingElement).toBeInTheDocument()
    expect(subheadingElement).toBeInTheDocument()
  })

  it('should render BannerImage component', () => {
    const { getByAltText } = render(<Banner />)
    const imageElement = getByAltText('banner-image')
    expect(imageElement).toBeInTheDocument()
  })
})
