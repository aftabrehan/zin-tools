import { SectionWrapper } from '@/components/section-wrapper'
import { Card } from '@/components/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/carousel'

import {
  BOOKMARK_CARDS,
  CONVERT_FROM_PDF_CARDS,
  CONVERT_TO_PDF_CARDS,
} from '@/constants/feature-list'

const Home = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-8">
    <SectionWrapper
      title="Your Bookmarks"
      childrenClass="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6 px-4 pb-4 sm:pb-6"
    >
      {BOOKMARK_CARDS.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </SectionWrapper>

    <SectionWrapper title="Covert from PDF" showAllButton>
      <Carousel className="w-full">
        <CarouselContent className="w-full mb-12 xs:mb-16 sm:mb-0 px-4 pb-4 sm:pb-6">
          {CONVERT_FROM_PDF_CARDS.map((item, i) => (
            <CarouselItem
              key={i}
              className="basis-1/1 xs:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Card {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </SectionWrapper>

    <SectionWrapper
      title="Covert to PDF"
      childrenClass="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6 px-4 pb-4 sm:pb-6"
    >
      {CONVERT_TO_PDF_CARDS.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </SectionWrapper>
  </div>
)

export default Home
