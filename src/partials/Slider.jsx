import SliderItem from '../components/SliderItem'
import heroImg from '../assets/hero.png'

const slides = [
  {
    id: 1,
    src: heroImg,
    title: 'His mother had always taught him',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

export default function Slider() {
  return (
    <div className="slider" data-layout-structure="block">
      {slides.map((slide) => (
        <SliderItem key={slide.id} {...slide} />
      ))}
    </div>
  )
}
