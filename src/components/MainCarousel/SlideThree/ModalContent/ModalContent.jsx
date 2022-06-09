import { modalContentMock } from '../../../../mock/text';
import { StackCarousel } from '../../../UI/Carousel/StackCarousel/StackCarousel'
import { ModalContentItem } from './ModalContentItem/ModalContentItem';
import './styles.scss';

export const ModalContent = () => {
  return (
    <div className="modal-content block">
      <div className="modal-content__container">
        <StackCarousel>
          {
            modalContentMock.map((item, key) => {
              return (
                item.map((item, key) => <ModalContentItem title={item.title} text={item.text} key={key} />)
              )
            })
          }
        </StackCarousel>
      </div>
    </div>
  )
}
